# TODO for julia set 3d thing:

1.  create new wasm fcn that just returns an array that is [0,1,0,1,...] for if a pixel is black or white
    1.1 - change the julia set viewing to use new data type, how to do this in the new3d repo
    1.2 - change the export to binary files to be [],[],[],[] where each array is 0 or 1 for if it is black or white
    1.3 - add a check that it must always be square to do the julia set thing
2.  2.2 allow user to specify how many points along the line there are if go with option to paramterize, default to min amount in terms of pixels (all connected)
    2.3 pass line back to redraw the line

## Fractal Voyager

To regenerate ANTLR parser/grammar (and associated files), run the following commands after antlr v4.7.1 is installed:
export CLASSPATH=".:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH"
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
antlr4 -Dlanguage=Cpp Fractal.g4 -visitor -no-listener

Note that this will override FractalVisitor.h and FractalBaseVisitor.h which we altered to change return types, so save these files before or remember to change them again (only a few bools returned overides)

To compile the cgen to wasm, run "make" in the root of the cgen folder.

To run the app, run "npm start" it may not work the first time if cgen was freshly compiled, but will eventually.

# bug fixes

refer to SYE final paper section 6 for further explanations (p. 55)

- terminal output consistency (0.3)
  - log everything
  - log at the correct time
- stuff starts to break after lots of actions (0.6)
  - cleanup useffects??? ... research
- seperate state for orbits from pixles (0.7)
  - would make updates work when in orbit, (weird because some stuff is for orbit)
- make the chunks of the controls componenets - can pass down setStates (0.8)
- fix small styling issues, all in the controls componenet (0.9)
  - the color displayer updates late or not at all sometimes on resize (ex. terminal minimize), causing a scroll bar
  - the whole control component container doesn't quite go over far enough sometimes, this is related to above, for both, when you do an action in control component it rerenders and fixes

# features

- better errror handling if malformed script entered (2.8)
- pop up c++ editor to pass to emception (2.9)
- automatic cycle detection (2.10)
- multiple colors... stops near 1 vs stops near 2 (2.11)
- draw a line across canvas in paramter plane... get julia set fractals out of it (2.12)

# Done

- click and drag outside of fractal registers as click on fractal (1)
- panning and zooming bug fixes (2)
  - after box zoom still pan and zoom correctly and vise versa DONE
  - after pan or zoom, box zoom correctly DONE
  - zoom correctly when not centered at the origin DONE
  - panning always consistent, go across halfway DONE
  - zoom doesnt work after entered numbers DONE
- host somewhere (7)
  - github pages?
- once orbit is drawn, cannot pan or anything like that (5)
  - disallow these
- styling (4)
  - terminal
    - minimize option
    - set a max height
  - make it so viewer container is the width of the calcuated width of the pixle area
    - then make it so the controls take the rest of the possible width
  - on terminal resize (or screen resize)... update sizes of cans
  - shrink text boxes horizontally
  - fix error that everything fails if screen is a square "or less" canvcomponent line 54
  - when extra horizontal space... either max options longer, or keep download button to the left
  - when height of options will overflow screen size.... popup modals S
  - for the width... when the min width is reached, they start pushing up the viewer, at this point, make pop up modals so viewer never gets pushed up
  - refactored control componenet and broke into many compomenents and abstracted some stuff
  - switched to next.js react instead of create-react-app

###### new

# Refactor

- create-react-app (the build tool used) is no longer maintained. I have been using next.js (a build tool and framework for react) instead recently. Switching to next.js I beleive is needed.
- the cgen to generate the c++ is currently written in c++ and needs to be compiled to wasm. I am more comfortable with js, and since we are compiling instead of interpreting, the performance hit of switching to js would be miniscule. I think it would also make changes to the cgen code easier and easier to intergrate, along with simplying the flow of the applicaiton.
- Instead of using global store, I could pass down state setting variables. Lately, I have only been using global store for multiple page application. Might be nice to have the option to easilly make this multi page though.

In this branch, I plan to refactor the project to next.js and the js runtime for antlr4

# Notes

- go through and try to abstract all of the state away from Control Componenet I can
- also see where the store is really nessecary (global state - commenented on them)
- abstract updateParams funciton

# new TODOs

- clean up global state (1.1)
- switch cgen to antlr js runtime instead of c++ compiled to wasm to simplify flow (1.2) DONE ON STAGE
- refactor viewer componenet (1.3)
- create a nice language doccumentation and walkthrough - use paper (1.4)
- investigate using webpack to bundle the antlr4 code (1.5)
- further abstract control compoenent for modals - maybe - or see if its worth it(1.6)
