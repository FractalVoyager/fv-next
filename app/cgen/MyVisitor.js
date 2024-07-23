/* 
this is my custom visitor class, it overrides visotor functions from base visitor and fractal visiotr
when we traerse the tree, every time we hit a node, we either run the auto generated funciton for that node 
in base visitor which is just to visit children, or if the fcn is overriden here we run this fcn
*/

const { default: FractalVisitor } = require("./FractalVisitor");

export default class MyVisitor extends FractalVisitor {
  constructor() {
    super(); // call the parent class
    // output string stream that gets built up
    this.output = "";
    // TODO nested loops
    this.loopCounter = 0;
    // If c does not appear, then this will set the type to dynmical plane initallly and z gets set to screen val and is iterated
    this.param = false;
    // if we are genning the oribt fcn
    this.orbit = false;
    // helper var for stops condition
    this.stopsSecond = false;
  }

  // fcn to get type

  getType() {
    return this.param ? 0 : 1;
  }

  cgenOrbit(tree) {
    // reset stopsSecond
    this.stopsSecond = false;
    // set orbit to true
    this.orbit = true;
    // reset output
    this.output = "";
    // gen orbit def
    // math for im, re values is done in js, so just need the two values

    let orbitdef =
      "EMSCRIPTEN_KEEPALIVE void orbit(double fixed_re, double fixed_im, double clicked_re, double clicked_im, int maxIters, double minRadius, double maxRadius, double_t *ptr, double epsilon, int orbitNum){\n";

    // adds to output by traversing the tree
    this.visitScript(tree);
    // defns
    let initdefns = "std::complex<double> z(clicked_re, clicked_im);\n";

    // means there is a c val - still need this for orbit in case there is an already dyn space
    if (this.param) {
      initdefns += "std::complex<double> c(fixed_re,fixed_im);\n";
    }

    return orbitdef + initdefns + this.output + "}\n";
  }

  cgen(tree) {
    // defn
    let fcndef =
      "int calcPixel(double z_re, double z_im, double c_re, double c_im, int maxIters, double minRadius, double maxRadius, int type, double epsilon) {\n";

    // add to output
    this.visitScript(tree);

    // defns to start
    let initdefns = "std::complex<double> z(z_re, z_im);\n";

    // means there is a c val b/c param space - if so, need to set it to c passed in
    if (this.param) {
      initdefns += "std::complex<double> c(c_re,c_im);\n";
    }

    return fcndef + initdefns + this.output + "return 0;\n}\n";
  }

  // don't really need to override this one - this is the root node
  visitScript(ctx) {
    super.visitScript(ctx);
    return ctx;
  }

  //////////////////////////////////////
  /////////////// commands /////////////
  //////////////////////////////////////

  // set a variable to the result of an expression
  visitSET_TO_COM(ctx) {
    // get the var name
    const name = ctx.variable().getText();
    // if its z - we want to reset not re initalize
    if (name == "z") {
      this.output += name + " = ";
      this.visit(ctx.expression());
      this.output += ";\n";
      // otherwise initalize a new variable
    } else {
      this.output += "std::complex<double> " + ctx.variable().getText() + "(";
      // visit the expressioin which will add the expression to output
      this.visit(ctx.expression());
      // close paren
      this.output += ");\n";
    }

    return ctx;
  }

  // this is the same as set but allows it to be "edited in params tab in setting window"
  // TODO
  visitDEFAULT_TO_COM(ctx) {
    return ctx; // visitChildren(ctx);
  }

  // only evalute if drawing paramter space
  visitPAR_COM(ctx) {
    // never param space for orbit
    if (this.orbit) {
      return ctx;
    }
    // if the type is 0, do command
    this.output += "if (type == 0) {\n";
    this.visit(ctx.command());
    this.output += "}\n";

    return ctx;
  }
  // only evalte if drawing dynamic space
  visitDYN_COM(ctx) {
    // always dyn space in orbit
    if (this.orbit) {
      this.visit(ctx.command());
      return ctx;
    }
    this.output += "if (type == 1) {\n";
    this.visit(ctx.command());
    this.output += "}\n";

    return ctx;
  }

  // block just works because it will visit all children
  // don't think I'll need to override any of the other command

  ////////////// end ///////////////////
  /////////////// commands /////////////
  //////////////////////////////////////

  //////////////////////////////////////
  /// atom, variable, constant /////////
  ///////////// numbers ////////////////

  // don't need to worry about atoms because we always jsut get text out of it, no need for override - never get visited

  // variable is like z or c or any other user defined varaible
  visitVariable(ctx) {
    // can chekc here if it is c, if so, we are drawing param, so set the global var of that
    if (ctx.getText() == "c") {
      this.param = true;
    }
    // add the varaible text to the output
    this.output += ctx.getText();
    return ctx;
  }

  // for pow expression and loop - I get the value a different way, so this is just for
  // complex numbers - n is just real part
  visitN(ctx) {
    let n = parseFlat(ctx.getText());
    // complex number with real part n - TODO probably don't need to cast here
    this.output += "std::complex<double>(" + n + ",0)";
    return ctx;
  }

  // real part of complex number
  visitCpx_number_re(ctx) {
    let n = parseFloat(ctx.getText());
    // output a complex number real part
    this.output += "std::complex<double>(" + n + ",0)";
    return ctx;
  }

  // DONE
  visitCpx_number_im(ctx) {
    let txt = ctx.getText();
    // jsut i so 1
    if (txt.length() == 1) {
      this.output += "std::complex<double>(0,1)";
      return ctx;
    } else {
      // take off i
      txt.slice(0, -1);
      let n = parseFloat(txt);
      // cpx number that is just imag part
      this.output += "std::complex<double>(0," + n + ")";
      return ctx;
    }
  }

  ////////////// end ///////////////////
  /// atom, variable, constant /////////
  //////////// numbers /////////////////

  //////////////////////////////////////
  //////////  EXPRESSIONS //////////////
  //////////////////////////////////////

  /*
 This is either a constant or a variable 
 */
  visitSIGNED_ATOM_EXP(ctx) {
    // if there is a minus - need to append a minus smbol to the atom
    if (ctx.MINUS()) {
      this.output += "-";
    }
    // this will add the atom to the output
    this.visitChildren(ctx);
    return ctx;
  }

  // (expression)
  visitPAREN_EXP(ctx) {
    // output open paren, then visit expression which will add it to output, then close
    this.output += "(";
    this.visit(ctx.expression());
    this.output += ")";
    return ctx;
  }

  // this is only allowed for z^n when n is a positive integer which is error checked in lexer
  visitPOW_EXP(ctx) {
    // get n text
    let n = parseInt(ctx.n().getText());
    // z^0 = 1
    if (n === 0) {
      this.output += "1";
    }
    // using pow(z,4) slows it down tremendously vs ust many multipliers - like 10x slower
    for (let i = 0; i < n; i++) {
      if (i !== 0) {
        this.output += "*";
      }
      // visit the exression that we are powing
      this.visit(ctx.expression());
    }
    return ctx;
  }

  // exp + exp
  visitPLUS_EXP(ctx) {
    // output left
    this.visit(ctx.expression(0));
    // plus
    this.output += "+";
    // output right
    this.visit(ctx.expression(1));
    return ctx;
  }

  visitTIMES_EXP(ctx) {
    this.visit(ctx.expression(0));
    this.output += "*";
    this.visit(ctx.expression(1));
    return ctx;
  }

  visitDIVIDE_EXP(ctx) {
    this.visit(ctx.expression(0));
    this.output += "/";
    this.visit(ctx.expression(1));
    return ctx;
  }

  visitMINUS_EXP(ctx) {
    this.visit(ctx.expression(0));
    this.output += "-";
    this.visit(ctx.expression(1));
    return ctx;
  }
  // THIS IS REALS ONLY - SO NOT FOR NOW
  visitREDUCE_MOD_EXP(ctx) {
    return ctx; // visitChildren(ctx);
  }

  // REALS ONLY
  visitRE_FCN_EXP(ctx) {
    return ctx; // visitChildren(ctx);
  }
  // cos(exp) etc
  visitCPX_FCN_EXP(ctx) {
    // using the cpp cpx math fcns that alreadly have these cpx fcns built in
    // https://en.cppreference.com/w/c/numeric/complex

    if (ctx.cpx_function().EXP()) {
      this.output += "exp(";
    } else if (ctx.cpx_function().COS()) {
      this.output += "cos(";
    } else if (ctx.cpx_function().SIN()) {
      this.output += "sin(";
    } else if (ctx.cpx_function().TAN()) {
      this.output += "tan(";
    } else if (ctx.cpx_function().COSH()) {
      this.output += "cosh(";
    } else if (ctx.cpx_function().SINH()) {
      this.output += "sinh(";
    } else if (ctx.cpx_function().TANH()) {
      this.output += "tanh(";
    } else if (ctx.cpx_function().RE()) {
      this.output += "real(";
    } else if (ctx.cpx_function().IM()) {
      this.output += "imag(";
    } else if (ctx.cpx_function().BAR()) {
      this.output += "conj(";
    } else if (ctx.cpx_function().ARG()) {
      this.output += "arg(";
    } else if (ctx.cpx_function().LOG()) {
      this.output += "log(";
    } else if (ctx.cpx_function().SQRT()) {
      this.output += "sqrt(";
    }
    this.visit(ctx.expression());
    this.output += ")";

    return ctx;
  }

  /////////////// end //////////////////
  //////////  EXPRESSIONS //////////////
  //////////////////////////////////////

  //////////////////////////////////////
  /////////// CONDITIONS ///////////////
  //////////////////////////////////////

  // this one is tricky - if the var we are iterating is less than epislon from the previous pass thorugh loop it is true
  visitSTOPS_COND(ctx) {
    // on first pass
    if (!this.stopsSecond) {
      // difference between previous and current (in expression)
      this.output += "abs(abs(prev) - abs( ";
      this.visit(ctx.expression());
      // less than epsilon
      this.output += ")) < epsilon";
    } else {
      // on second pass, just give back expression
      this.visit(ctx.expression());
    }
    // return true which means we have a stops conditon
    return true;
  }

  // equals or <= etc ,,,,, exp COND exp
  visitCOMP_COND(ctx) {
    // usings abs to get the norm of the complex number

    // if there it is just an equals - TODO thing should probably not be first but don't want to mess with it for now
    if (ctx.EQUALS()) {
      this.output += "abs(";
      this.output += "abs(";
      // will output expression on left
      this.visit(ctx.expression(0));
      this.output += ")";
      this.output += "-abs(";
      this.visit(ctx.expression(1));
      this.output += "))";
      this.output += " < epsilon";
      // not a stops conditin
      return false;
    }

    // always output aboslute value of left
    this.output += "abs(";
    this.visit(ctx.expression(0));
    this.output += ")";

    // this works assuming everything is a complex number, which we are for now
    // output condition
    if (ctx.GT() && ctx.EQUALS()) {
      this.output += ">=";
    } else if (ctx.LT() && ctx.EQUALS()) {
      this.output += "<=";
    } else if (ctx.GT()) {
      this.output += ">";
    } else if (ctx.LT()) {
      this.output += "<";
    } else {
    }

    // value of right side
    this.output += "abs(";
    this.visit(ctx.expression(1));
    this.output += ")";

    return false;
  }

  // exp becomes 0 , or less than min radius
  visitVANISHES_COND(ctx) {
    // abs of expr < minRad
    this.output += "abs(";
    this.visit(ctx.expression());
    this.output += ") < minRadius";
    // not stops
    return false;
  }

  // exp becomes infinately , or more than maxRadius
  visitESCAPES_COND(ctx) {
    // abs of expr > maxRad
    this.output += "abs(";
    this.visit(ctx.expression());
    this.output += ") > maxRadius";

    return false;
  }

  // combinataions of conditions
  visitCOMB_COND(ctx) {
    // exclusive or - output logic for that
    if (ctx.XOR()) {
      this.output += "((";
      this.visit(ctx.condition(0));
      this.output += " || ";
      this.visit(ctx.condition(1));
      this.output += ") && !(";
      this.visit(ctx.condition(0));
      this.output += " && ";
      this.visit(ctx.condition(1));
      this.output += "))";
      // or
    } else if (ctx.OR()) {
      this.visit(ctx.condition(0));
      this.output += " || ";
      this.visit(ctx.condition(1));
      // and
    } else if (ctx.AND()) {
      this.visit(ctx.condition(0));
      this.output += " && ";
      this.visit(ctx.condition(1));
    } else {
    }

    return false;
  }

  ////////////// end ///////////////////
  /////////// CONDITIONS ///////////////
  //////////////////////////////////////

  ////////////////////////////////////
  ////////////  LOOPS ////////////////
  ////////////////////////////////////

  // do (commands) until cond
  visitLoopDo(ctx) {
    // copy output and delete current
    let oldOut = this.output;
    this.output = "";

    // create tmp string stream
    // old stuff
    let tmp = "for(int i = 1; i < maxIters; i++) {\n";
    if (this.orbit) {
      // TODO probably wrong but I think this will always be z
      tmp += "ptr[i*2-2] = real(z);\nptr[i*2-1] = imag(z);\n";
    }
    // visit commands
    let i = 0;
    while (ctx.command(i)) {
      this.visit(ctx.command(i));
      i++;
    }

    // get condition
    tmp += this.output;
    this.output = "";
    tmp += ";\n";
    tmp += "if(";

    // get if it is a stops
    let stops = this.visit(ctx.condition());
    // save output and delete
    tmp += this.output;
    tmp += ") {\n";
    this.output = "";

    // deal with the nested for loops later TODO
    if (this.orbit) {
      tmp += "break;\n}\n";
    } else {
      tmp += "return i;\n}\n";
    }

    // if it is a stops - do stops stuff
    if (stops) {
      this.stopsSecond = true;
      tmp += "prev = ";
      this.visit(ctx.condition());
      tmp += this.output + ";\n";
      this.output = "";
    }

    tmp += "}\n";

    // stops stuff
    if (stops) {
      this.output += "std::complex<double>prev(";
      this.visit(ctx.condition());
      this.output += ");\n";
      oldOut += this.output;
      this.output = "";
    }

    oldOut += tmp;

    this.output += oldOut;

    return ctx;
  }

  // iterate expr on var until comd
  visitLoopIterateOn(ctx) {
    // copy output and delete current
    let oldOut = this.output;
    this.output = "";

    // create tmp string stream
    // old stuff
    let tmp = "for(int i = 1; i < maxIters; i++) {\n";

    // get var str
    let thisVar = ctx.variable().getText();

    if (this.orbit) {
      tmp +=
        "ptr[i*2-2] = real(" +
        thisVar +
        ");\nptr[i*2-1] = imag(" +
        thisVar +
        ");\n";
    }
    tmp += thisVar + " = ";
    this.visit(ctx.expression());
    // take out putput and clear
    tmp += this.output;
    this.output = "";

    tmp += ";\n";
    tmp += "if(";

    // get if it is a stops
    let stops = this.visit(ctx.condition());
    // save output and delete
    tmp += this.output;
    tmp += ") {\n";
    this.output = "";

    // deal with the nested for loops later TODO
    if (this.orbit) {
      tmp += "break;\n}\n";
    } else {
      tmp += "return i;\n}\n";
    }

    // if it is a stops - do stops stuff
    if (stops) {
      this.stopsSecond = true;
      tmp += "prev = ";
      this.visit(ctx.condition());
      tmp += this.output + ";\n";
      this.output = "";
    }

    tmp += "}\n";

    if (stops) {
      this.output += "std::complex<double>prev(";
      this.visit(ctx.condition());
      this.output += ");\n";
      oldOut += this.output;
      this.output = "";
    }

    oldOut += tmp;

    this.output += oldOut;

    return ctx;
  }

  // ITERATE expression 'until' condition - var taken to be z
  visitLoopIterateEmpty(ctx) {
    // copy output and delete current
    let oldOut = this.output;
    this.output = "";

    // create tmp string stream
    // old stuff
    let tmp = "for(int i = 1; i < maxIters; i++) {\n";
    if (this.orbit) {
      tmp += "ptr[i*2-2] = real(z);\nptr[i*2-1] = imag(z);\n";
    }
    tmp += "z = ";
    this.visit(ctx.expression());
    // take out putput and clear
    tmp += this.output;
    this.output = "";

    tmp += ";\n";
    tmp += "if(";

    // get if it is a stops
    let stops = this.visit(ctx.condition());
    // save output and delete
    tmp += this.output;
    tmp += ") {\n";
    this.output = "";

    // deal with the nested for loops later TODO
    if (this.orbit) {
      tmp += "break;\n}\n";
    } else {
      tmp += "return i;\n}\n";
    }

    // if it is a stops - do stops stuff
    if (stops) {
      this.stopsSecond = true;
      tmp += "prev = ";
      this.visit(ctx.condition());
      tmp += this.output + ";\n";
      this.output = "";
    }

    tmp += "}\n";

    if (stops) {
      this.output += "std::complex<double>prev(";
      this.visit(ctx.condition());
      this.output += ");\n";
      oldOut += this.output;
      this.output = "";
    }

    oldOut += tmp;

    this.output += oldOut;

    return ctx;
  }

  // reapeat n times command - n must be positivie integer  TODO
  visitLoopRepeat(ctx) {
    return ctx;
  }

  //////////////// end /////////////////
  //////////////  LOOPS ////////////////
  //////////////////////////////////////

  //////////////////////////////////////
  //////////////  IFS //////////////////
  //////////////////////////////////////

  visitIF_THEN(ctx) {
    // if cond run command - adds to outpu

    this.output += "if(";
    this.visit(ctx.condition());
    this.output += ") {\n";
    this.visit(ctx.command());
    this.output += "}\n";

    return ctx;
  }

  visitIF_THEN_ELSE(ctx) {
    // if conditno run command 0, else run command 2 in this context

    this.output += "if(";
    this.visit(ctx.condition());
    this.output += ") {\n";
    this.visit(ctx.command(0));
    this.output += "} else {\n";
    this.visit(ctx.command(1));
    this.output += "}\n";

    return ctx;
  }

  ////////////// end ///////////////////
  //////////////  IFS //////////////////
  //////////////////////////////////////
}
