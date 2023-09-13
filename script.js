function smooth_src() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
}
smooth_src();

// var tl = gsap.timeline(".main",{
//   x:500,
//   opacity:0,
//   ScrollTrigger:{
//     trigger:".page1 h2",
//     scroller:".main",
//     start:"top -110%",
//     end:"top -130%",
//     scrub:3
//   }
// })

gsap.from(".navbar",{
  y:200,
  opacity:0,
  duration:.5,
  scrub:4,
  delay:.5
})
gsap.from(".page1-text",{
  x:400,
  opacity:0,
  duration:.5,
  scrub:4,
  delay:.5
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top 110",
    end:"top 0",
    scrub:2
  }
})

tl.to(".page1 h1",{
  x:-80,
  opacity:.3
},"hi")
tl.to(".page1 h2",{
  x:80,
  opacity:.3
},"hi")
tl.to("video",{
  width:"80vw"
},"hi")


var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1",
    scroller:".main",
    // markers:true,
    start:"bottom 60%",
    end:"bottom 80%",
    scrub:4
  }
})

tl2.to(".main",{
  backgroundColor:"white"
})

// page4 animations
var hov = document.querySelector(".page4_text")
hov.addEventListener("mouseenter",function() {
  document.querySelector(".page4 .firstimg").style.opacity=1
  document.querySelector(".page4 .secimg").style.opacity=1
})
hov.addEventListener("mouseleave",function() {
  document.querySelector(".page4 .firstimg").style.opacity=0
  document.querySelector(".page4 .secimg").style.opacity=0
})

var thr = gsap.timeline({
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    start: "top 50%",
    end:"top 20%",
    scrub:4,
    // markers:true
  }
})
thr.to(".main",{
  // color:
  backgroundColor:"black"
})


// page5 
var div = document.querySelectorAll(".p5div")
var img = document.querySelectorAll(".page5 img")

document.querySelector(".p5div").addEventListener('mousemove' , function(dets) {
  div.forEach((ele) =>{
    ele.addEventListener("mouseenter",function() {
      ele.children[1].style.opacity=1;
      // ele.children[1].style.left=dets.x+"px";
      // ele.children[1].style.top=dets.y+"px";
    })
    ele.addEventListener("mouseleave",function() {
      ele.children[1].style.opacity=0;
    })
  })
})

