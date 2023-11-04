

function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

init()

var cry= document.querySelector(".cry>h1").textContent.split("");
var clutter="";
cry.forEach(elem => {
    clutter += `<span>${elem}</span>`
});
document.querySelector('.cry>h1').innerHTML=clutter;

document.querySelectorAll("span").forEach(function(elem,index){
   elem.style.transform=`rotate(${index * 10}deg)`;
})



var cry2= document.querySelector(".cry2>h1").textContent.split("");
var clutter="";
cry2.forEach(elem => {
    clutter += `<span>${elem}</span>`
});
document.querySelector('.cry2>h1').innerHTML=clutter;

document.querySelectorAll("span").forEach(function(elem,index){
   elem.style.transform=`rotate(${index * 10}deg)`;
})


gsap.registerPlugin()

var t1=gsap.timeline({
 
})




 var lastScrollTop=0;
  nav=document.getElementById("nav");
 window.addEventListener("scroll",function(){
     var scrollTop=window.pageYOffset||document.documentElement.scrollTop;
     if(scrollTop > lastScrollTop){
         nav.style.top="-20vh";
     }
     else{
         nav.style.top="0";
     }
     lastScrollTop = scrollTop; 
    })

const body=document.body;
let lastScroll=0;
window.addEventListener("#nav",function(){
    const currentScroll=this.window.pageYOffset
    if(currentScroll<= 0){
        body.classList.remove("scroll-up")
       
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
        }
        
    lastScroll=currentScroll; 
})



var loder=document.querySelectorAll(".loder-img>img")

t1.to(".loder-img>img",{
    opacity:1,
    ease: Expo.easeInOut,
    stagger:0.3,
    duraction:1
 })  
 
t1.to("#slider",{
    y:"-100%",
    duraction:3,
})

t1.to("#page1>h1",{
    opacity:1,
    onStart: function () {
        $('#page1>h1').textillate({ in: { effect: 'fadeInUp' } });
    },
})

// $('#page1>h1').textillate({ in: { effect: 'fadeInUp', delay:500, } });



gsap.to("#page3>h1",{
    onStart: function () {
        $('#page3>h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.5, } });
    },
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3 h1",
        scrub:true,
        start:"top 75%",
        end:"top 30%",
       
    }
})

gsap.to("#page8>h1",{
    toStart: function () {
        $('#page8>h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.5, } });
    },
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page8>h1",
        scrub:true,
        start:"top 90%",
        end:"top 90%",
      
    }
})

gsap.to("#page2>video",{
    width:"100%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2>video",
        scrub:true,
        start:"top 100%",
        end:"top 40%",
        
    }
})

var cur=document.querySelector(".cursor");
var overlay1=document.querySelector(".u2");



    overlay1.addEventListener("mouseenter",function(elem){
        cur.style.scale=1
    })
    overlay1.addEventListener("mouseleave",function(elem){
        cur.style.scale=0
    })
    overlay1.addEventListener("mousemove",function(elem){
        cur.style.left= elem.x+"px"
        cur.style.top= elem.y+"px"
        cur.style.scale=1
    })

    
var overlay2=document.querySelector(".ui2");
var cur2=document.querySelector(".cursor2");


overlay2.addEventListener("mouseenter",function(elem){
    cur2.style.scale=1
})
overlay2.addEventListener("mouseleave",function(elem){
    cur2.style.scale=0
})
overlay2.addEventListener("mousemove",function(elem){
    cur2.style.left= elem.x -20+"px"
    cur2.style.top= elem.y-30+"px"
    cur2.style.scale=1
})
    
var overlay3=document.querySelector(".ui3");
var cur3=document.querySelector(".cursor3");


overlay3.addEventListener("mouseenter",function(elem){
    cur3.style.scale=1
})
overlay3.addEventListener("mouseleave",function(elem){
    cur3.style.scale=0
})
overlay3.addEventListener("mousemove",function(elem){
    cur3.style.left= elem.x -80+"px"
    cur3.style.top= elem.y -80+"px"
    cur3.style.scale=1
})
    

var overlay4=document.querySelector(".ui4");
var cur4=document.querySelector(".cursor4");


overlay4.addEventListener("mouseenter",function(elem){
    cur4.style.scale=1
})
overlay4.addEventListener("mouseleave",function(elem){
    cur4.style.scale=0
})
overlay4.addEventListener("mousemove",function(elem){
    cur4.style.left= elem.x +"px"
    cur4.style.top=  elem.y +"px"
    cur4.style.scale=1
})
    


gsap.to(".h1-6>h1",{
    right:`${5}}vw`,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page6",
      start:"top 0%",
      end:"top -800%",
      scrub:3,
      pin:true
    },
   
  })

  
  
//   $('#page1>h1').textillate({ in: { effect: 'fadeInUp' } });