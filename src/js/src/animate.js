import locomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  // Init Locomotive Scroll
  const scroller = new locomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  })

  // Update ScrollTrigger on Locomotive scroll
  scroller.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy('body', {
    scrollTop(value) {
      return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
  })

  // Scroll button click event
  document.querySelector('.button--scroll').addEventListener('click', (e) => {
    e.preventDefault()
    scroller.scrollTo('#jobs')
  })

  // Work image event
  const sliderPics = document.querySelectorAll('.work__list-pic')
  sliderPics.forEach((sliderPic) => {
    sliderPic.addEventListener('click', (e) => {
      e.preventDefault()
      const elt = e.currentTarget
      const colorClass = elt.getAttribute('data-color-background')
      const animationStatus = elt.getAttribute('data-animation')
      elt
        .closest('.section')
        .classList.remove('section--blue', 'section--white', 'section--animated-off', 'section--animated-on')
      elt.closest('.section').classList.add('section--' + colorClass, 'section--animated-' + animationStatus)
    })
  })

  // Timeline animation
  const tl = gsap.timeline()
  const sections = gsap.utils.toArray('.animate__section')

  sections.forEach((section) => {
    tl.from(section.querySelectorAll('.animate__img-h'), {
      scrollTrigger: {
        trigger: '.animate__img-h',
        start: 'top bottom',
      },
      autoAlpha: 0,
      x: 150,
      ease: 'expo.InOut',
      duration: 0.6,
      stagger: {
        each: 0.2,
      },
    })
      .from(section.querySelectorAll('.animate__frombottom'), {
        scrollTrigger: {
          trigger: '.animate__frombottom',
          start: 'top bottom',
        },
        autoAlpha: 0,
        y: 50,
        ease: 'expo.InOut',
        duration: 0.6,
        stagger: {
          each: 0.2,
        },
      })
      .from(section.querySelectorAll('.animate__icon'), {
        scrollTrigger: {
          trigger: '.animate__icon',
          start: 'top bottom',
        },
        autoAlpha: 0,
        x: -20,
        ease: 'expo.InOut',
        duration: 0.2,
        stagger: {
          each: 0.4,
        },
      })
      .from(
        section.querySelectorAll('.animate__fromright'),
        {
          scrollTrigger: {
            trigger: '.animate__fromright',
            start: 'top bottom',
          },
          autoAlpha: 0,
          x: 70,
          ease: 'expo.InOut',
          duration: 0.6,
          stagger: {
            each: 0.2,
          },
        },
        '-=0.8'
      )
  })

  // Section Keyfigures
  gsap.from('.keyfigures__list-countup', {
    scrollTrigger: '.section--keyfigures',
    textContent: 0,
    duration: 1,
    ease: 'expo.InOut',
    snap: { textContent: 1 },
    stagger: {
      each: 0.6,
      onUpdate: function () {
        this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent)
      },
    },
  })

  ScrollTrigger.addEventListener('refresh', () => scroller.update())

  ScrollTrigger.refresh()
})
