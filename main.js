var a = new Typed(".text", {
  strings: ["Hello!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// menubar
let menubar_icon = document.querySelector(".menubar_icon");
let menubar_icon2 = document.querySelector("#menubar_icon2");
let opt = document.querySelectorAll(".option");
let menubar = document.querySelector(".menubar");

menubar_icon.addEventListener("click", () => {
  menubar_icon.style.display = "none";
  
  menubar.style.display = "block";
});
menubar_icon2.addEventListener("click", () => {
  menubar.style.display = "none";
  if (window.innerWidth < 700) {
  menubar_icon.style.display = "block";
  }
});

menubar.addEventListener("click", () => {
  menubar.style.display = "none";
  if (window.innerWidth < 700) {
    menubar_icon.style.display = "block";
  }
});
 window.onresize=function checkWindowSize() {
  if (window.innerWidth < 700 ) {
    menubar_icon.style.display = "block";
  } else {
    menubar_icon.style.display = "none";
  }}
   //or
//  window.addEventListener("resize", checkWindowSize);
