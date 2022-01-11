
const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click',() => {
  selectElement('header').classList.toggle('active');
});



const intro = document.querySelector(".intro");
let video;
if (window.outerWidth <= 750) {video = intro.querySelector("video#mobil");
} else if (window.outerWidth > 750) {video = intro.querySelector("video#desktop");}

console.log(video);

const text = intro.querySelectorAll("h1, h3");
//END SECTION
const secondsection = document.querySelector(".divide1");
const end = secondsection.querySelectorAll("h1, h3");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 20200, /*3400*/
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3400,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  console.log(e.scrollpos);
  scrollpos = e.scrollPos / 1000;
  console.log(e.scrollpos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

/********NEW SECTION*******/
  console.log("start");
/*Soursection*/
const soursection = document.querySelector(".soursection");
const handvideo = document.querySelector(".handvideo");

//END SECTION
const mgsection = document.querySelector(".mgsection");

//SCROLLMAGIC
const controller2 = new ScrollMagic.Controller();

//Scenes
let scenesoursection = new ScrollMagic.Scene({ /*Scene stehen lassen !! wird aus ScrollMagic genommen*/
  duration: 1000, /*(wieviele Pixel ich scrollen möchte)*/
  triggerElement: soursection,
  triggerHook: 0 /*Wann die Animation anfängt*/
})
  .addIndicators()
  .setPin(soursection)
  .addTo(controller2);



//Video Animation
let handaccelamount = 3.1; /*Am Schluss wird es sich noch ein bisschen bewegen*/
let handscrollpos = 0; /*handScrollPosition*/
let handdelay = 0; 

console.log(handscrollpos, handdelay);

scenesoursection.on("update", e => {
  console.log("startVideo2");
  handscrollpos = e.scrollPos / 1000;
  console.log(e.handscrollPos);
});

setInterval(() => {
  console.log("startVideo34");
  handdelay += (handscrollpos - handdelay) * handaccelamount; /* handDelay hinzufügen, wenn wir scrollen*/
  console.log(handscrollpos, handdelay);

  handvideo.currentTime = handdelay;
}, 33.3); /*100 / 30 (Frames) = 33.3 // oder // 1000 / 24 (Frames) = 41,6*/




//Secondsection
/*
const secondsection = document.querySelector(".secondsection");
const text = secondsection.querySelectorAll("h1, h3, h4");
//END SECTION
const soursection = document.querySelector(".soursection");
const end = soursection.querySelectorAll("h1, h3, h4");

//SCROLLMAGIC
const controller2 = new ScrollMagic.Controller();

//Scenes
let scenesecondsection = new ScrollMagic.Scene({
  duration: 18000,
  triggerElement: secondsection,
  triggerHook: 0
})
  .addIndicators()
  .setPin(secondsection)
  .addTo(controller2);


//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scenesecondsection2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: secondsection,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller2);
  
 

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scenesecondsection.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

*/