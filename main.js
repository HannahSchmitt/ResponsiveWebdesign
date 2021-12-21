
const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click',() => {
  selectElement('header').classList.toggle('active');
});





const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelectorAll("h1, h3");
//END SECTION
const secondsection = document.querySelector(".secondsection");
const end = secondsection.querySelectorAll("h1, h3");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 18000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 4500,
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
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

/*
//Secondsection

const secondsection = document.querySelector(".secondsection");
const video = secondsection.querySelector("video");
const text = secondsection.querySelectorAll("h1, h3");
//END SECTION
const soursection = document.querySelector(".soursection");
const end = soursection.querySelectorAll("h1, h3, h4");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scenesecondsection = new ScrollMagic.Scenesecondsection({
  duration: 18000,
  triggerElement: secondsection,
  triggerHook: 0
})
  .addIndicators()
  .setPin(secondsection)
  .addTo(controller);


/*Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scenesecondsection2 = new ScrollMagic.Scenesecondsection2({
  duration: 3000,
  triggerElement: secondsection,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);
  */
 /*

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
}, 33.3);*/