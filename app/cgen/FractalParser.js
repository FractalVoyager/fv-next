// Generated from Fractal.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FractalVisitor from './FractalVisitor.js';

const serializedATN = [4,1,80,275,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,4,0,44,8,0,11,0,12,0,45,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,4,1,60,8,1,11,1,12,1,61,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,
1,73,8,1,1,2,1,2,1,3,1,3,1,3,3,3,80,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,
3,7,90,8,7,1,8,1,8,1,9,1,9,1,10,1,10,3,10,98,8,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,3,10,120,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,5,10,137,8,10,10,10,12,10,140,9,10,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,3,11,151,8,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,3,11,164,8,11,1,11,1,11,1,11,5,11,169,8,11,10,11,
12,11,172,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,3,12,186,8,12,1,13,1,13,4,13,190,8,13,11,13,12,13,191,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,3,13,214,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,246,8,16,1,17,1,17,1,18,1,18,1,18,
1,18,4,18,254,8,18,11,18,12,18,255,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,255,2,20,22,20,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,8,1,0,5,6,1,0,49,
61,1,0,62,64,1,0,66,67,1,0,73,75,1,0,22,24,1,0,25,32,1,0,37,38,294,0,43,
1,0,0,0,2,72,1,0,0,0,4,74,1,0,0,0,6,79,1,0,0,0,8,81,1,0,0,0,10,83,1,0,0,
0,12,85,1,0,0,0,14,89,1,0,0,0,16,91,1,0,0,0,18,93,1,0,0,0,20,119,1,0,0,0,
22,163,1,0,0,0,24,185,1,0,0,0,26,213,1,0,0,0,28,215,1,0,0,0,30,217,1,0,0,
0,32,245,1,0,0,0,34,247,1,0,0,0,36,249,1,0,0,0,38,267,1,0,0,0,40,41,3,2,
1,0,41,42,5,1,0,0,42,44,1,0,0,0,43,40,1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,
0,45,46,1,0,0,0,46,1,1,0,0,0,47,48,5,2,0,0,48,49,3,8,4,0,49,50,5,3,0,0,50,
51,3,20,10,0,51,73,1,0,0,0,52,53,5,4,0,0,53,54,3,8,4,0,54,55,5,3,0,0,55,
56,3,20,10,0,56,73,1,0,0,0,57,59,7,0,0,0,58,60,3,2,1,0,59,58,1,0,0,0,60,
61,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,7,0,0,64,73,
1,0,0,0,65,73,3,32,16,0,66,67,5,8,0,0,67,73,3,2,1,0,68,69,5,9,0,0,69,73,
3,2,1,0,70,73,3,24,12,0,71,73,3,26,13,0,72,47,1,0,0,0,72,52,1,0,0,0,72,57,
1,0,0,0,72,65,1,0,0,0,72,66,1,0,0,0,72,68,1,0,0,0,72,70,1,0,0,0,72,71,1,
0,0,0,73,3,1,0,0,0,74,75,5,43,0,0,75,5,1,0,0,0,76,80,3,10,5,0,77,80,3,12,
6,0,78,80,3,4,2,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,7,1,0,0,0,
81,82,5,76,0,0,82,9,1,0,0,0,83,84,5,44,0,0,84,11,1,0,0,0,85,86,5,45,0,0,
86,13,1,0,0,0,87,90,3,6,3,0,88,90,3,8,4,0,89,87,1,0,0,0,89,88,1,0,0,0,90,
15,1,0,0,0,91,92,7,1,0,0,92,17,1,0,0,0,93,94,7,2,0,0,94,19,1,0,0,0,95,97,
6,10,-1,0,96,98,7,3,0,0,97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,120,
3,14,7,0,100,101,3,16,8,0,101,102,5,77,0,0,102,103,3,20,10,0,103,104,5,78,
0,0,104,120,1,0,0,0,105,106,3,18,9,0,106,107,5,77,0,0,107,108,3,20,10,0,
108,109,5,78,0,0,109,120,1,0,0,0,110,111,5,10,0,0,111,112,3,8,4,0,112,113,
5,11,0,0,113,114,3,20,10,2,114,120,1,0,0,0,115,116,5,77,0,0,116,117,3,20,
10,0,117,118,5,78,0,0,118,120,1,0,0,0,119,95,1,0,0,0,119,100,1,0,0,0,119,
105,1,0,0,0,119,110,1,0,0,0,119,115,1,0,0,0,120,138,1,0,0,0,121,122,10,8,
0,0,122,123,5,68,0,0,123,137,3,20,10,9,124,125,10,7,0,0,125,126,5,69,0,0,
126,137,3,20,10,8,127,128,10,6,0,0,128,129,5,66,0,0,129,137,3,20,10,7,130,
131,10,5,0,0,131,132,5,67,0,0,132,137,3,20,10,6,133,134,10,9,0,0,134,135,
5,65,0,0,135,137,3,4,2,0,136,121,1,0,0,0,136,124,1,0,0,0,136,127,1,0,0,0,
136,130,1,0,0,0,136,133,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,
1,0,0,0,139,21,1,0,0,0,140,138,1,0,0,0,141,142,6,11,-1,0,142,150,3,20,10,
0,143,151,5,71,0,0,144,151,5,72,0,0,145,146,5,71,0,0,146,151,5,70,0,0,147,
148,5,72,0,0,148,151,5,70,0,0,149,151,5,70,0,0,150,143,1,0,0,0,150,144,1,
0,0,0,150,145,1,0,0,0,150,147,1,0,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,
153,3,20,10,0,153,164,1,0,0,0,154,155,3,20,10,0,155,156,5,12,0,0,156,164,
1,0,0,0,157,158,3,20,10,0,158,159,5,13,0,0,159,164,1,0,0,0,160,161,3,20,
10,0,161,162,5,46,0,0,162,164,1,0,0,0,163,141,1,0,0,0,163,154,1,0,0,0,163,
157,1,0,0,0,163,160,1,0,0,0,164,170,1,0,0,0,165,166,10,1,0,0,166,167,7,4,
0,0,167,169,3,22,11,2,168,165,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,
171,1,0,0,0,171,23,1,0,0,0,172,170,1,0,0,0,173,174,5,14,0,0,174,175,3,22,
11,0,175,176,5,15,0,0,176,177,3,2,1,0,177,186,1,0,0,0,178,179,5,14,0,0,179,
180,3,22,11,0,180,181,5,15,0,0,181,182,3,2,1,0,182,183,5,16,0,0,183,184,
3,2,1,0,184,186,1,0,0,0,185,173,1,0,0,0,185,178,1,0,0,0,186,25,1,0,0,0,187,
189,5,17,0,0,188,190,3,2,1,0,189,188,1,0,0,0,190,191,1,0,0,0,191,189,1,0,
0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,5,18,0,0,194,195,3,22,11,0,195,
214,1,0,0,0,196,197,5,48,0,0,197,198,3,20,10,0,198,199,5,19,0,0,199,200,
3,8,4,0,200,201,5,18,0,0,201,202,3,22,11,0,202,214,1,0,0,0,203,204,5,48,
0,0,204,205,3,20,10,0,205,206,5,18,0,0,206,207,3,22,11,0,207,214,1,0,0,0,
208,209,5,20,0,0,209,210,3,4,2,0,210,211,5,21,0,0,211,212,3,2,1,0,212,214,
1,0,0,0,213,187,1,0,0,0,213,196,1,0,0,0,213,203,1,0,0,0,213,208,1,0,0,0,
214,27,1,0,0,0,215,216,7,5,0,0,216,29,1,0,0,0,217,218,7,6,0,0,218,31,1,0,
0,0,219,220,5,33,0,0,220,221,3,28,14,0,221,222,5,34,0,0,222,223,3,30,15,
0,223,224,5,35,0,0,224,246,1,0,0,0,225,226,5,33,0,0,226,227,3,28,14,0,227,
228,5,35,0,0,228,246,1,0,0,0,229,230,5,33,0,0,230,231,3,8,4,0,231,232,5,
36,0,0,232,233,3,30,15,0,233,234,5,35,0,0,234,246,1,0,0,0,235,236,5,33,0,
0,236,237,3,8,4,0,237,238,5,36,0,0,238,239,3,4,2,0,239,240,5,35,0,0,240,
246,1,0,0,0,241,242,5,33,0,0,242,243,3,30,15,0,243,244,5,35,0,0,244,246,
1,0,0,0,245,219,1,0,0,0,245,225,1,0,0,0,245,229,1,0,0,0,245,235,1,0,0,0,
245,241,1,0,0,0,246,33,1,0,0,0,247,248,7,7,0,0,248,35,1,0,0,0,249,250,5,
39,0,0,250,251,3,34,17,0,251,253,5,40,0,0,252,254,9,0,0,0,253,252,1,0,0,
0,254,255,1,0,0,0,255,256,1,0,0,0,255,253,1,0,0,0,256,257,1,0,0,0,257,258,
5,40,0,0,258,259,1,0,0,0,259,260,5,6,0,0,260,261,3,2,1,0,261,262,5,41,0,
0,262,263,3,8,4,0,263,264,5,1,0,0,264,265,5,7,0,0,265,266,5,1,0,0,266,37,
1,0,0,0,267,268,3,8,4,0,268,269,5,70,0,0,269,270,5,42,0,0,270,271,5,77,0,
0,271,272,3,20,10,0,272,273,5,78,0,0,273,39,1,0,0,0,17,45,61,72,79,89,97,
119,136,138,150,163,170,185,191,213,245,255];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FractalParser extends antlr4.Parser {

    static grammarFileName = "Fractal.g4";
    static literalNames = [ null, "'.'", "'set'", "'to'", "'default'", "'block'", 
                            "':'", "'end'", "'par'", "'dyn'", "'reduce'", 
                            "'mod'", "'escapes'", "'vanishes'", "'if'", 
                            "'then'", "'else'", "'do'", "'until'", "'on'", 
                            "'repeat'", "'times'", "'checkered'", "'disc'", 
                            "'period 3 cycle'", "'red'", "'green'", "'blue'", 
                            "'omega'", "'omegabar'", "'Purple'", "'White'", 
                            "'Orange'", "'['", "'|'", "']'", "'is'", "'real'", 
                            "'integer'", "'probe'", "'\"'", "'report'", 
                            "'\\u2206'", null, null, null, "'stops'", "'pixel'", 
                            "'iterate'", "'exp'", "'cos'", "'sin'", "'tan'", 
                            "'cosh'", "'sinh'", "'tanh'", "'re'", "'im'", 
                            "'bar'", "'arg'", "'log'", "'sqrt'", "'arccos'", 
                            "'arcsin'", "'arctan'", "'^'", "'+'", "'-'", 
                            "'*'", "'/'", "'='", "'>'", "'<'", "'or'", "'and'", 
                            "'xor'", null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "POS_INT", "NUMBER", "CPX_NUMBER_IM", 
                             "STOPS", "PIXEL", "ITERATE", "EXP", "COS", 
                             "SIN", "TAN", "COSH", "SINH", "TANH", "RE", 
                             "IM", "BAR", "ARG", "LOG", "SQRT", "ARCCOS", 
                             "ARCSIN", "ARCTAN", "POW", "PLUS", "MINUS", 
                             "TIMES", "DIVIDE", "EQUALS", "GT", "LT", "OR", 
                             "AND", "XOR", "VARIABLE", "LPAREN", "RPAREN", 
                             "WS", "COMMENT" ];
    static ruleNames = [ "script", "command", "n", "constant", "variable", 
                         "cpx_number_re", "cpx_number_im", "atom", "cpx_function", 
                         "real_function", "expression", "condition", "if_then", 
                         "loop", "flagname", "color", "color_command", "num_type", 
                         "probe_command", "saddle_drop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FractalParser.ruleNames;
        this.literalNames = FractalParser.literalNames;
        this.symbolicNames = FractalParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 11:
    	    		return this.condition_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    condition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FractalParser.RULE_script);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 40;
	            this.command();
	            this.state = 41;
	            this.match(FractalParser.T__0);
	            this.state = 45; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1196916) !== 0) || _la===33 || _la===48);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FractalParser.RULE_command);
	    var _la = 0;
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            localctx = new SET_TO_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(FractalParser.T__1);
	            this.state = 48;
	            this.variable();
	            this.state = 49;
	            this.match(FractalParser.T__2);
	            this.state = 50;
	            this.expression(0);
	            break;
	        case 4:
	            localctx = new DEFAULT_TO_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(FractalParser.T__3);
	            this.state = 53;
	            this.variable();
	            this.state = 54;
	            this.match(FractalParser.T__2);
	            this.state = 55;
	            this.expression(0);
	            break;
	        case 5:
	        case 6:
	            localctx = new BLOCK_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            _la = this._input.LA(1);
	            if(!(_la===5 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 58;
	                this.command();
	                this.state = 61; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1196916) !== 0) || _la===33 || _la===48);
	            this.state = 63;
	            this.match(FractalParser.T__6);
	            break;
	        case 33:
	            localctx = new COLOR_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 65;
	            this.color_command();
	            break;
	        case 8:
	            localctx = new PAR_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 66;
	            this.match(FractalParser.T__7);
	            this.state = 67;
	            this.command();
	            break;
	        case 9:
	            localctx = new DYN_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 68;
	            this.match(FractalParser.T__8);
	            this.state = 69;
	            this.command();
	            break;
	        case 14:
	            localctx = new IF_THEN_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 70;
	            this.if_then();
	            break;
	        case 17:
	        case 20:
	        case 48:
	            localctx = new LOOP_COMContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 71;
	            this.loop();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	n() {
	    let localctx = new NContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FractalParser.RULE_n);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(FractalParser.POS_INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FractalParser.RULE_constant);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.cpx_number_re();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.cpx_number_im();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.n();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FractalParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(FractalParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cpx_number_re() {
	    let localctx = new Cpx_number_reContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FractalParser.RULE_cpx_number_re);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(FractalParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cpx_number_im() {
	    let localctx = new Cpx_number_imContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FractalParser.RULE_cpx_number_im);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(FractalParser.CPX_NUMBER_IM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FractalParser.RULE_atom);
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	        case 44:
	        case 45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.constant();
	            break;
	        case 76:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cpx_function() {
	    let localctx = new Cpx_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FractalParser.RULE_cpx_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        _la = this._input.LA(1);
	        if(!(((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 8191) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	real_function() {
	    let localctx = new Real_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FractalParser.RULE_real_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        _la = this._input.LA(1);
	        if(!(((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, FractalParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	        case 44:
	        case 45:
	        case 66:
	        case 67:
	        case 76:
	            localctx = new SIGNED_ATOM_EXPContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===66 || _la===67) {
	                this.state = 96;
	                _la = this._input.LA(1);
	                if(!(_la===66 || _la===67)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 99;
	            this.atom();
	            break;
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	            localctx = new CPX_FCN_EXPContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 100;
	            this.cpx_function();
	            this.state = 101;
	            this.match(FractalParser.LPAREN);
	            this.state = 102;
	            this.expression(0);
	            this.state = 103;
	            this.match(FractalParser.RPAREN);
	            break;
	        case 62:
	        case 63:
	        case 64:
	            localctx = new RE_FCN_EXPContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 105;
	            this.real_function();
	            this.state = 106;
	            this.match(FractalParser.LPAREN);
	            this.state = 107;
	            this.expression(0);
	            this.state = 108;
	            this.match(FractalParser.RPAREN);
	            break;
	        case 10:
	            localctx = new REDUCE_MOD_EXPContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 110;
	            this.match(FractalParser.T__9);
	            this.state = 111;
	            this.variable();
	            this.state = 112;
	            this.match(FractalParser.T__10);
	            this.state = 113;
	            this.expression(2);
	            break;
	        case 77:
	            localctx = new PAREN_EXPContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 115;
	            this.match(FractalParser.LPAREN);
	            this.state = 116;
	            this.expression(0);
	            this.state = 117;
	            this.match(FractalParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TIMES_EXPContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FractalParser.RULE_expression);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 122;
	                    this.match(FractalParser.TIMES);
	                    this.state = 123;
	                    this.expression(9);
	                    break;

	                case 2:
	                    localctx = new DIVIDE_EXPContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FractalParser.RULE_expression);
	                    this.state = 124;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 125;
	                    this.match(FractalParser.DIVIDE);
	                    this.state = 126;
	                    this.expression(8);
	                    break;

	                case 3:
	                    localctx = new PLUS_EXPContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, FractalParser.RULE_expression);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 128;
	                    this.match(FractalParser.PLUS);
	                    this.state = 129;
	                    localctx.right = this.expression(7);
	                    break;

	                case 4:
	                    localctx = new MINUS_EXPContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FractalParser.RULE_expression);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 131;
	                    this.match(FractalParser.MINUS);
	                    this.state = 132;
	                    this.expression(6);
	                    break;

	                case 5:
	                    localctx = new POW_EXPContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FractalParser.RULE_expression);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 134;
	                    this.match(FractalParser.POW);
	                    this.state = 135;
	                    this.n();
	                    break;

	                } 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	condition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ConditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, FractalParser.RULE_condition, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new COMP_CONDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 142;
	            this.expression(0);
	            this.state = 150;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 143;
	                this.match(FractalParser.GT);
	                break;

	            case 2:
	                this.state = 144;
	                this.match(FractalParser.LT);
	                break;

	            case 3:
	                this.state = 145;
	                this.match(FractalParser.GT);
	                this.state = 146;
	                this.match(FractalParser.EQUALS);
	                break;

	            case 4:
	                this.state = 147;
	                this.match(FractalParser.LT);
	                this.state = 148;
	                this.match(FractalParser.EQUALS);
	                break;

	            case 5:
	                this.state = 149;
	                this.match(FractalParser.EQUALS);
	                break;

	            }
	            this.state = 152;
	            this.expression(0);
	            break;

	        case 2:
	            localctx = new ESCAPES_CONDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 154;
	            this.expression(0);
	            this.state = 155;
	            this.match(FractalParser.T__11);
	            break;

	        case 3:
	            localctx = new VANISHES_CONDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 157;
	            this.expression(0);
	            this.state = 158;
	            this.match(FractalParser.T__12);
	            break;

	        case 4:
	            localctx = new STOPS_CONDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 160;
	            this.expression(0);

	            this.state = 161;
	            this.match(FractalParser.STOPS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new COMB_CONDContext(this, new ConditionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, FractalParser.RULE_condition);
	                this.state = 165;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 166;
	                _la = this._input.LA(1);
	                if(!(((((_la - 73)) & ~0x1f) === 0 && ((1 << (_la - 73)) & 7) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 167;
	                this.condition(2); 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	if_then() {
	    let localctx = new If_thenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FractalParser.RULE_if_then);
	    try {
	        this.state = 185;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IF_THENContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            this.match(FractalParser.T__13);
	            this.state = 174;
	            this.condition(0);
	            this.state = 175;
	            this.match(FractalParser.T__14);
	            this.state = 176;
	            this.command();
	            break;

	        case 2:
	            localctx = new IF_THEN_ELSEContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(FractalParser.T__13);
	            this.state = 179;
	            this.condition(0);
	            this.state = 180;
	            this.match(FractalParser.T__14);
	            this.state = 181;
	            this.command();
	            this.state = 182;
	            this.match(FractalParser.T__15);
	            this.state = 183;
	            this.command();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FractalParser.RULE_loop);
	    var _la = 0;
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LoopDoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.match(FractalParser.T__16);
	            this.state = 189; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 188;
	                this.command();
	                this.state = 191; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1196916) !== 0) || _la===33 || _la===48);
	            this.state = 193;
	            this.match(FractalParser.T__17);
	            this.state = 194;
	            this.condition(0);
	            break;

	        case 2:
	            localctx = new LoopIterateOnContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            this.match(FractalParser.ITERATE);
	            this.state = 197;
	            this.expression(0);
	            this.state = 198;
	            this.match(FractalParser.T__18);
	            this.state = 199;
	            this.variable();
	            this.state = 200;
	            this.match(FractalParser.T__17);
	            this.state = 201;
	            this.condition(0);
	            break;

	        case 3:
	            localctx = new LoopIterateEmptyContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 203;
	            this.match(FractalParser.ITERATE);
	            this.state = 204;
	            this.expression(0);
	            this.state = 205;
	            this.match(FractalParser.T__17);
	            this.state = 206;
	            this.condition(0);
	            break;

	        case 4:
	            localctx = new LoopRepeatContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 208;
	            this.match(FractalParser.T__19);
	            this.state = 209;
	            this.n();
	            this.state = 210;
	            this.match(FractalParser.T__20);
	            this.state = 211;
	            this.command();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flagname() {
	    let localctx = new FlagnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FractalParser.RULE_flagname);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360128) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	color() {
	    let localctx = new ColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FractalParser.RULE_color);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        _la = this._input.LA(1);
	        if(!(((((_la - 25)) & ~0x1f) === 0 && ((1 << (_la - 25)) & 255) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	color_command() {
	    let localctx = new Color_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FractalParser.RULE_color_command);
	    try {
	        this.state = 245;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 219;
	            this.match(FractalParser.T__32);
	            this.state = 220;
	            this.flagname();
	            this.state = 221;
	            this.match(FractalParser.T__33);
	            this.state = 222;
	            this.color();
	            this.state = 223;
	            this.match(FractalParser.T__34);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 225;
	            this.match(FractalParser.T__32);
	            this.state = 226;
	            this.flagname();
	            this.state = 227;
	            this.match(FractalParser.T__34);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 229;
	            this.match(FractalParser.T__32);
	            this.state = 230;
	            this.variable();
	            this.state = 231;
	            this.match(FractalParser.T__35);
	            this.state = 232;
	            this.color();
	            this.state = 233;
	            this.match(FractalParser.T__34);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 235;
	            this.match(FractalParser.T__32);
	            this.state = 236;
	            this.variable();
	            this.state = 237;
	            this.match(FractalParser.T__35);
	            this.state = 238;
	            this.n();
	            this.state = 239;
	            this.match(FractalParser.T__34);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 241;
	            this.match(FractalParser.T__32);
	            this.state = 242;
	            this.color();
	            this.state = 243;
	            this.match(FractalParser.T__34);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num_type() {
	    let localctx = new Num_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FractalParser.RULE_num_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        _la = this._input.LA(1);
	        if(!(_la===37 || _la===38)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	probe_command() {
	    let localctx = new Probe_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FractalParser.RULE_probe_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(FractalParser.T__38);
	        this.state = 250;
	        this.num_type();

	        this.state = 251;
	        this.match(FractalParser.T__39);
	        this.state = 253; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 252;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 255; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 257;
	        this.match(FractalParser.T__39);
	        this.state = 259;
	        this.match(FractalParser.T__5);
	        this.state = 260;
	        this.command();
	        this.state = 261;
	        this.match(FractalParser.T__40);
	        this.state = 262;
	        this.variable();
	        this.state = 263;
	        this.match(FractalParser.T__0);
	        this.state = 264;
	        this.match(FractalParser.T__6);
	        this.state = 265;
	        this.match(FractalParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saddle_drop() {
	    let localctx = new Saddle_dropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FractalParser.RULE_saddle_drop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.variable();
	        this.state = 268;
	        this.match(FractalParser.EQUALS);
	        this.state = 269;
	        this.match(FractalParser.T__41);
	        this.state = 270;
	        this.match(FractalParser.LPAREN);
	        this.state = 271;
	        this.expression(0);
	        this.state = 272;
	        this.match(FractalParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FractalParser.EOF = antlr4.Token.EOF;
FractalParser.T__0 = 1;
FractalParser.T__1 = 2;
FractalParser.T__2 = 3;
FractalParser.T__3 = 4;
FractalParser.T__4 = 5;
FractalParser.T__5 = 6;
FractalParser.T__6 = 7;
FractalParser.T__7 = 8;
FractalParser.T__8 = 9;
FractalParser.T__9 = 10;
FractalParser.T__10 = 11;
FractalParser.T__11 = 12;
FractalParser.T__12 = 13;
FractalParser.T__13 = 14;
FractalParser.T__14 = 15;
FractalParser.T__15 = 16;
FractalParser.T__16 = 17;
FractalParser.T__17 = 18;
FractalParser.T__18 = 19;
FractalParser.T__19 = 20;
FractalParser.T__20 = 21;
FractalParser.T__21 = 22;
FractalParser.T__22 = 23;
FractalParser.T__23 = 24;
FractalParser.T__24 = 25;
FractalParser.T__25 = 26;
FractalParser.T__26 = 27;
FractalParser.T__27 = 28;
FractalParser.T__28 = 29;
FractalParser.T__29 = 30;
FractalParser.T__30 = 31;
FractalParser.T__31 = 32;
FractalParser.T__32 = 33;
FractalParser.T__33 = 34;
FractalParser.T__34 = 35;
FractalParser.T__35 = 36;
FractalParser.T__36 = 37;
FractalParser.T__37 = 38;
FractalParser.T__38 = 39;
FractalParser.T__39 = 40;
FractalParser.T__40 = 41;
FractalParser.T__41 = 42;
FractalParser.POS_INT = 43;
FractalParser.NUMBER = 44;
FractalParser.CPX_NUMBER_IM = 45;
FractalParser.STOPS = 46;
FractalParser.PIXEL = 47;
FractalParser.ITERATE = 48;
FractalParser.EXP = 49;
FractalParser.COS = 50;
FractalParser.SIN = 51;
FractalParser.TAN = 52;
FractalParser.COSH = 53;
FractalParser.SINH = 54;
FractalParser.TANH = 55;
FractalParser.RE = 56;
FractalParser.IM = 57;
FractalParser.BAR = 58;
FractalParser.ARG = 59;
FractalParser.LOG = 60;
FractalParser.SQRT = 61;
FractalParser.ARCCOS = 62;
FractalParser.ARCSIN = 63;
FractalParser.ARCTAN = 64;
FractalParser.POW = 65;
FractalParser.PLUS = 66;
FractalParser.MINUS = 67;
FractalParser.TIMES = 68;
FractalParser.DIVIDE = 69;
FractalParser.EQUALS = 70;
FractalParser.GT = 71;
FractalParser.LT = 72;
FractalParser.OR = 73;
FractalParser.AND = 74;
FractalParser.XOR = 75;
FractalParser.VARIABLE = 76;
FractalParser.LPAREN = 77;
FractalParser.RPAREN = 78;
FractalParser.WS = 79;
FractalParser.COMMENT = 80;

FractalParser.RULE_script = 0;
FractalParser.RULE_command = 1;
FractalParser.RULE_n = 2;
FractalParser.RULE_constant = 3;
FractalParser.RULE_variable = 4;
FractalParser.RULE_cpx_number_re = 5;
FractalParser.RULE_cpx_number_im = 6;
FractalParser.RULE_atom = 7;
FractalParser.RULE_cpx_function = 8;
FractalParser.RULE_real_function = 9;
FractalParser.RULE_expression = 10;
FractalParser.RULE_condition = 11;
FractalParser.RULE_if_then = 12;
FractalParser.RULE_loop = 13;
FractalParser.RULE_flagname = 14;
FractalParser.RULE_color = 15;
FractalParser.RULE_color_command = 16;
FractalParser.RULE_num_type = 17;
FractalParser.RULE_probe_command = 18;
FractalParser.RULE_saddle_drop = 19;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_script;
    }

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_command;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BLOCK_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitBLOCK_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.BLOCK_COMContext = BLOCK_COMContext;

class DYN_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitDYN_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.DYN_COMContext = DYN_COMContext;

class SET_TO_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitSET_TO_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.SET_TO_COMContext = SET_TO_COMContext;

class DEFAULT_TO_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitDEFAULT_TO_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.DEFAULT_TO_COMContext = DEFAULT_TO_COMContext;

class COLOR_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	color_command() {
	    return this.getTypedRuleContext(Color_commandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCOLOR_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.COLOR_COMContext = COLOR_COMContext;

class IF_THEN_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	if_then() {
	    return this.getTypedRuleContext(If_thenContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitIF_THEN_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.IF_THEN_COMContext = IF_THEN_COMContext;

class PAR_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitPAR_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.PAR_COMContext = PAR_COMContext;

class LOOP_COMContext extends CommandContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitLOOP_COM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.LOOP_COMContext = LOOP_COMContext;

class NContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_n;
    }

	POS_INT() {
	    return this.getToken(FractalParser.POS_INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitN(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_constant;
    }

	cpx_number_re() {
	    return this.getTypedRuleContext(Cpx_number_reContext,0);
	};

	cpx_number_im() {
	    return this.getTypedRuleContext(Cpx_number_imContext,0);
	};

	n() {
	    return this.getTypedRuleContext(NContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(FractalParser.VARIABLE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Cpx_number_reContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_cpx_number_re;
    }

	NUMBER() {
	    return this.getToken(FractalParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCpx_number_re(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Cpx_number_imContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_cpx_number_im;
    }

	CPX_NUMBER_IM() {
	    return this.getToken(FractalParser.CPX_NUMBER_IM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCpx_number_im(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_atom;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Cpx_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_cpx_function;
    }

	EXP() {
	    return this.getToken(FractalParser.EXP, 0);
	};

	COS() {
	    return this.getToken(FractalParser.COS, 0);
	};

	SIN() {
	    return this.getToken(FractalParser.SIN, 0);
	};

	TAN() {
	    return this.getToken(FractalParser.TAN, 0);
	};

	COSH() {
	    return this.getToken(FractalParser.COSH, 0);
	};

	SINH() {
	    return this.getToken(FractalParser.SINH, 0);
	};

	TANH() {
	    return this.getToken(FractalParser.TANH, 0);
	};

	RE() {
	    return this.getToken(FractalParser.RE, 0);
	};

	IM() {
	    return this.getToken(FractalParser.IM, 0);
	};

	BAR() {
	    return this.getToken(FractalParser.BAR, 0);
	};

	ARG() {
	    return this.getToken(FractalParser.ARG, 0);
	};

	LOG() {
	    return this.getToken(FractalParser.LOG, 0);
	};

	SQRT() {
	    return this.getToken(FractalParser.SQRT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCpx_function(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Real_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_real_function;
    }

	ARCCOS() {
	    return this.getToken(FractalParser.ARCCOS, 0);
	};

	ARCSIN() {
	    return this.getToken(FractalParser.ARCSIN, 0);
	};

	ARCTAN() {
	    return this.getToken(FractalParser.ARCTAN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitReal_function(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class POW_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	POW() {
	    return this.getToken(FractalParser.POW, 0);
	};

	n() {
	    return this.getTypedRuleContext(NContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitPOW_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.POW_EXPContext = POW_EXPContext;

class TIMES_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	TIMES() {
	    return this.getToken(FractalParser.TIMES, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitTIMES_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.TIMES_EXPContext = TIMES_EXPContext;

class DIVIDE_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIVIDE() {
	    return this.getToken(FractalParser.DIVIDE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitDIVIDE_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.DIVIDE_EXPContext = DIVIDE_EXPContext;

class MINUS_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(FractalParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitMINUS_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.MINUS_EXPContext = MINUS_EXPContext;

class SIGNED_ATOM_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	PLUS() {
	    return this.getToken(FractalParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(FractalParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitSIGNED_ATOM_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.SIGNED_ATOM_EXPContext = SIGNED_ATOM_EXPContext;

class PLUS_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	PLUS() {
	    return this.getToken(FractalParser.PLUS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitPLUS_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.PLUS_EXPContext = PLUS_EXPContext;

class REDUCE_MOD_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitREDUCE_MOD_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.REDUCE_MOD_EXPContext = REDUCE_MOD_EXPContext;

class RE_FCN_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	real_function() {
	    return this.getTypedRuleContext(Real_functionContext,0);
	};

	LPAREN() {
	    return this.getToken(FractalParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(FractalParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitRE_FCN_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.RE_FCN_EXPContext = RE_FCN_EXPContext;

class PAREN_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(FractalParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(FractalParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitPAREN_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.PAREN_EXPContext = PAREN_EXPContext;

class CPX_FCN_EXPContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cpx_function() {
	    return this.getTypedRuleContext(Cpx_functionContext,0);
	};

	LPAREN() {
	    return this.getToken(FractalParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(FractalParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCPX_FCN_EXP(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.CPX_FCN_EXPContext = CPX_FCN_EXPContext;

class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_condition;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class STOPS_CONDContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	STOPS() {
	    return this.getToken(FractalParser.STOPS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitSTOPS_COND(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.STOPS_CONDContext = STOPS_CONDContext;

class COMP_CONDContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GT() {
	    return this.getToken(FractalParser.GT, 0);
	};

	LT() {
	    return this.getToken(FractalParser.LT, 0);
	};

	EQUALS() {
	    return this.getToken(FractalParser.EQUALS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCOMP_COND(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.COMP_CONDContext = COMP_CONDContext;

class VANISHES_CONDContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitVANISHES_COND(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.VANISHES_CONDContext = VANISHES_CONDContext;

class ESCAPES_CONDContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitESCAPES_COND(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.ESCAPES_CONDContext = ESCAPES_CONDContext;

class COMB_CONDContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	OR() {
	    return this.getToken(FractalParser.OR, 0);
	};

	AND() {
	    return this.getToken(FractalParser.AND, 0);
	};

	XOR() {
	    return this.getToken(FractalParser.XOR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitCOMB_COND(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.COMB_CONDContext = COMB_CONDContext;

class If_thenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_if_then;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IF_THENContext extends If_thenContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitIF_THEN(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.IF_THENContext = IF_THENContext;

class IF_THEN_ELSEContext extends If_thenContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitIF_THEN_ELSE(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.IF_THEN_ELSEContext = IF_THEN_ELSEContext;

class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_loop;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LoopRepeatContext extends LoopContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	n() {
	    return this.getTypedRuleContext(NContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitLoopRepeat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.LoopRepeatContext = LoopRepeatContext;

class LoopIterateOnContext extends LoopContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ITERATE() {
	    return this.getToken(FractalParser.ITERATE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitLoopIterateOn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.LoopIterateOnContext = LoopIterateOnContext;

class LoopDoContext extends LoopContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitLoopDo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.LoopDoContext = LoopDoContext;

class LoopIterateEmptyContext extends LoopContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ITERATE() {
	    return this.getToken(FractalParser.ITERATE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitLoopIterateEmpty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FractalParser.LoopIterateEmptyContext = LoopIterateEmptyContext;

class FlagnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_flagname;
    }


	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitFlagname(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_color;
    }


	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitColor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Color_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_color_command;
    }

	flagname() {
	    return this.getTypedRuleContext(FlagnameContext,0);
	};

	color() {
	    return this.getTypedRuleContext(ColorContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	n() {
	    return this.getTypedRuleContext(NContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitColor_command(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Num_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_num_type;
    }


	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitNum_type(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Probe_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_probe_command;
    }

	num_type() {
	    return this.getTypedRuleContext(Num_typeContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitProbe_command(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Saddle_dropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FractalParser.RULE_saddle_drop;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	EQUALS() {
	    return this.getToken(FractalParser.EQUALS, 0);
	};

	LPAREN() {
	    return this.getToken(FractalParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(FractalParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FractalVisitor ) {
	        return visitor.visitSaddle_drop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FractalParser.ScriptContext = ScriptContext; 
FractalParser.CommandContext = CommandContext; 
FractalParser.NContext = NContext; 
FractalParser.ConstantContext = ConstantContext; 
FractalParser.VariableContext = VariableContext; 
FractalParser.Cpx_number_reContext = Cpx_number_reContext; 
FractalParser.Cpx_number_imContext = Cpx_number_imContext; 
FractalParser.AtomContext = AtomContext; 
FractalParser.Cpx_functionContext = Cpx_functionContext; 
FractalParser.Real_functionContext = Real_functionContext; 
FractalParser.ExpressionContext = ExpressionContext; 
FractalParser.ConditionContext = ConditionContext; 
FractalParser.If_thenContext = If_thenContext; 
FractalParser.LoopContext = LoopContext; 
FractalParser.FlagnameContext = FlagnameContext; 
FractalParser.ColorContext = ColorContext; 
FractalParser.Color_commandContext = Color_commandContext; 
FractalParser.Num_typeContext = Num_typeContext; 
FractalParser.Probe_commandContext = Probe_commandContext; 
FractalParser.Saddle_dropContext = Saddle_dropContext; 
