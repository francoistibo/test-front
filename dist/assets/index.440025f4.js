import{g as e,S as t,a as o}from"./vendor.c8f757b4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();e.registerPlugin(t),document.addEventListener("DOMContentLoaded",(function(){const r=new o({el:document.querySelector("[data-scroll-container]"),smooth:!0});r.on("scroll",t.update),t.scrollerProxy("body",{scrollTop(e){return arguments.length?r.scrollTo(e,0,0):r.scroll.instance.scroll.y},getBoundingClientRect:()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight})}),document.querySelector(".button--scroll").addEventListener("click",(e=>{e.preventDefault(),r.scrollTo("#jobs")}));document.querySelectorAll(".work__list-pic").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget,o=t.getAttribute("data-color-background"),r=t.getAttribute("data-animation");t.closest(".section").classList.remove("section--blue","section--white","section--animated-off","section--animated-on"),t.closest(".section").classList.add("section--"+o,"section--animated-"+r)}))}));const n=e.timeline();e.utils.toArray(".animate__section").forEach((e=>{n.from(e.querySelectorAll(".animate__img-h"),{scrollTrigger:{trigger:".animate__img-h",start:"top bottom"},autoAlpha:0,x:150,ease:"expo.InOut",duration:.6,stagger:{each:.2}}).from(e.querySelectorAll(".animate__frombottom"),{scrollTrigger:{trigger:".animate__frombottom",start:"top bottom"},autoAlpha:0,y:50,ease:"expo.InOut",duration:.6,stagger:{each:.2}}).from(e.querySelectorAll(".animate__icon"),{scrollTrigger:{trigger:".animate__icon",start:"top bottom"},autoAlpha:0,x:-20,ease:"expo.InOut",duration:.2,stagger:{each:.4}}).from(e.querySelectorAll(".animate__fromright"),{scrollTrigger:{trigger:".animate__fromright",start:"top bottom"},autoAlpha:0,x:70,ease:"expo.InOut",duration:.6,stagger:{each:.2}},"-=0.8")})),e.from(".keyfigures__list-countup",{scrollTrigger:".section--keyfigures",textContent:0,duration:1,ease:"expo.InOut",snap:{textContent:1},stagger:{each:.6,onUpdate:function(){this.targets()[0].innerHTML=Math.ceil(this.targets()[0].textContent)}}}),t.addEventListener("refresh",(()=>r.update())),t.refresh()}));let r,n,i,a,s,c=0;const l=document.querySelector(".cursor"),u=document.querySelectorAll(".section--blue, .section--location img, .footer__map, img:not(.img--white):not(.social__icon):not(.logo--main)"),d=document.querySelectorAll(".button, .social__link, .burger, a");let m,g,f=Date.now();function p(){m=Date.now(),g=m-f,g>33.333333333333336&&(f=m-g%33.333333333333336,r&&n?(i=.5*(s-r),a=.5*(c-n),Math.abs(i)+Math.abs(a)<.1?(r=s,n=c):(r+=i,n+=a)):(r=s,n=c),l.style.transform="translate3d("+r+"px, "+n+"px, 0)"),requestAnimationFrame(p)}function h(){!function(){p();for(let e=0;e<u.length;e++)u[e].addEventListener("mouseover",(function(){l.classList.add("cursor--alt")}),!1),u[e].addEventListener("mouseleave",(function(){l.classList.remove("cursor--alt")}),!1);for(let e=0;e<d.length;e++)d[e].addEventListener("mouseover",(function(){l.classList.add("cursor--hover")}),!1),d[e].addEventListener("mouseleave",(function(){l.classList.remove("cursor--hover")}),!1)}()}window.addEventListener("mousemove",(function(e){s=e.clientX||e.pageX,c=e.clientY||e.pageY}),!1),document.addEventListener("DOMContentLoaded",(function(){h()}));
