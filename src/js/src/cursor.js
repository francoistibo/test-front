'use strict';

// GLOBAL VARS
var x, y, dx, dy, mouseFollowKey, mouseX, mouseY, xPos, yPos = 0;

// SELECTOR VARS
var cursor = document.querySelector(".cursor");
var blueSection = document.querySelectorAll(".section--blue, .section__map, img:not(.img--white):not(.social__icon)");
var link = document.querySelectorAll(".button, .social__link, .burger, a");

// FPS VARS
var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

// FUNCTION : SET MOUSE POSITION
function setMousePosition(e) {
  mouseX = e.clientX || e.pageX;
  mouseY = e.clientY || e.pageY;
}

// FUNCTION : MOUSE CURSOR FOLLOW
function followMouse() {
  now = Date.now();
  delta = now - then;

  if (delta > interval) {
    then = now - (delta % interval);

    if (!x || !y) {
      x = mouseX;
      y = mouseY;
    } else {
      dx = (mouseX - x) * 0.5;
      dy = (mouseY - y) * 0.5;

      if (Math.abs(dx) + Math.abs(dy) < .1) {
        x = mouseX;
        y = mouseY;
      } else {
        x += dx;
        y += dy;
      }
    }

    cursor.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
  }

  requestAnimationFrame(followMouse);
}

// FUNCTION : MOUSE CURSOR DISAPPEAR
function cursorBehavior() {
  followMouse();

  for (var i = 0 ; i < blueSection.length ; i++) {
    blueSection[i].addEventListener("mouseover", function(){
      cursor.classList.add("cursor--alt");
    }, false);

    blueSection[i].addEventListener("mouseleave", function(){
      cursor.classList.remove("cursor--alt");
    }, false);
  }

  for (var i = 0 ; i < link.length ; i++) {
    link[i].addEventListener("mouseover", function(){
      cursor.classList.add("cursor--hover");
    }, false);

    link[i].addEventListener("mouseleave", function(){
      cursor.classList.remove("cursor--hover");
    }, false);
  }
}

// FUNCTION : INIT
function init() {
  cursorBehavior();
}

// LISTENER : MOUSE MOVE
window.addEventListener("mousemove", setMousePosition, false);

// LISTENER : DOCUMENT LOADED
document.addEventListener('DOMContentLoaded', function() {
  init();
});
