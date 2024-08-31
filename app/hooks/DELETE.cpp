#include <math.h>
#include <cmath>
#include <stdint.h>
#include <complex.h>
#include<stdio.h>
#include <emscripten/emscripten.h>
int calcPixel(double z_re, double z_im, double c_re, double c_im, int maxIters, double minRadius, double maxRadius, int type, double epsilon);
int getIdx(int x, int y, int width, int color);
int getIdx(int x, int y, int width, int color){
int red = y * (width * 4) + x * 4;
return red + color;
}
int calcPixel(double z_re, double z_im, double c_re, double c_im, int maxIters, double minRadius, double maxRadius, int type, double epsilon) {
std::complex<double> z(z_re, z_im);
std::complex<double> c(c_re,c_im);
for(int i = 1; i < maxIters; i++) {
z = z*z+c;
if(abs(z) > maxRadius) {
return i;
}
}
return 0;
}
extern "C" {
EMSCRIPTEN_KEEPALIVE void genPixles(int type, double fixed_re, double fixed_im, 
int maxIters, double epsilon, double minRadius, double maxRadius, double startX, 
double startY, double newCanWidth, double newCanHeight, int width, int height, 
double widthScale, double heightScale, uint8_t *ptr, int numColors, uint8_t *redPtr, 
uint8_t *greenPtr, uint8_t *bluePtr)
{
for (int x = 0; x < floor(newCanWidth); x++){
for (int y = 0; y < floor(newCanHeight); y++){
 double screen_re = (((widthScale * x) + startX) - width / 2.) / (width  /2.);
double screen_im = -(((heightScale * y) + startY) - height /2.) / (height /2.);
int iterations;
if(type == 0) {
iterations = calcPixel(0.,0.,screen_re,screen_im, maxIters, minRadius, maxRadius, type, epsilon);
} else if(type == 1) {
iterations = calcPixel(screen_re, screen_im, fixed_re, fixed_im, maxIters, minRadius, maxRadius, type, epsilon);
}
int color = ceil((double)iterations*numColors/maxIters);
ptr[getIdx(x, y, width, 0)] = redPtr[color];
ptr[getIdx(x, y, width, 1)] = greenPtr[color];
ptr[getIdx(x, y, width, 2)] = bluePtr[color]; 
ptr[getIdx(x, y, width, 3)] = 255;
}
}
}
EMSCRIPTEN_KEEPALIVE void orbit(double fixed_re, double fixed_im, double clicked_re, double clicked_im, int maxIters, double minRadius, double maxRadius, double_t *ptr, double epsilon, int orbitNum){
std::complex<double> z(clicked_re, clicked_im);
std::complex<double> c(fixed_re,fixed_im);
for(int i = 1; i < maxIters; i++) {
ptr[i*2-2] = real(z);
ptr[i*2-1] = imag(z);
z = z*z+c;
if(abs(z) > maxRadius) {
break;
}
}
}
}


EMSCRIPTEN_KEEPALIVE void genOneJulia(double fixed_re, double fixed_im, int maxIters, double epsilon, double minRadius, double maxRadius, double startX, double startY, double newCanWidth, double newCanHeight, int width, int height, double widthScale, double heightScale, uint8_t *ptr) {
for (int x = 0; x < floor(newCanWidth); x++){
for (int y = 0; y < floor(newCanHeight); y++){
 double screen_re = (((widthScale * x) + startX) - width / 2.) / (width  /2.);
double screen_im = -(((heightScale * y) + startY) - height /2.) / (height /2.);
int iterations;
iterations = calcPixel(screen_re, screen_im, fixed_re, fixed_im, maxIters, minRadius, maxRadius, 1, epsilon);
int color;
if(iterations == 0) {
  color = 1;
} else {
  color = 0;
}
ptr[y * width + x] = color;

}
}
}