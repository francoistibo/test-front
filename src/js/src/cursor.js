// GLOBAL VARS
let x,
  y,
  dx,
  dy,
  mouseX,
  mouseY = 0

// SELECTOR VARS
const cursor = document.querySelector('.cursor')
const blueSection = document.querySelectorAll(
  '.section--blue, .section--location img, .footer__map, img:not(.img--white):not(.social__icon):not(.logo--main)'
)
const link = document.querySelectorAll('.button, .social__link, .burger, a')

// FPS VARS
let fps = 30
let now
let then = Date.now()
let interval = 1000 / fps
let delta

// FUNCTION : SET MOUSE POSITION
function setMousePosition(e) {
  mouseX = e.clientX || e.pageX
  mouseY = e.clientY || e.pageY
}

// FUNCTION : MOUSE CURSOR FOLLOW
function followMouse() {
  now = Date.now()
  delta = now - then

  if (delta > interval) {
    then = now - (delta % interval)

    if (!x || !y) {
      x = mouseX
      y = mouseY
    } else {
      dx = (mouseX - x) * 0.5
      dy = (mouseY - y) * 0.5

      if (Math.abs(dx) + Math.abs(dy) < 0.1) {
        x = mouseX
        y = mouseY
      } else {
        x += dx
        y += dy
      }
    }

    cursor.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)'
  }

  requestAnimationFrame(followMouse)
}

// FUNCTION : MOUSE CURSOR DISAPPEAR
function cursorBehavior() {
  followMouse()

  for (let i = 0; i < blueSection.length; i++) {
    blueSection[i].addEventListener(
      'mouseover',
      function () {
        cursor.classList.add('cursor--alt')
      },
      false
    )

    blueSection[i].addEventListener(
      'mouseleave',
      function () {
        cursor.classList.remove('cursor--alt')
      },
      false
    )
  }

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener(
      'mouseover',
      function () {
        cursor.classList.add('cursor--hover')
      },
      false
    )

    link[i].addEventListener(
      'mouseleave',
      function () {
        cursor.classList.remove('cursor--hover')
      },
      false
    )
  }
}

// FUNCTION : INIT
function init() {
  cursorBehavior()
}

// LISTENER : MOUSE MOVE
window.addEventListener('mousemove', setMousePosition, false)

// LISTENER : DOCUMENT LOADED
document.addEventListener('DOMContentLoaded', function () {
  init()
})
