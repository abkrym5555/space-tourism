"use strict";
const openNav = document.querySelector("#opennav");
const closeNav = document.querySelector("#close");
const mobilenav = document.querySelector("#mobilenav");
const labnav = document.querySelector("#labnav");
const smNavLists = mobilenav.querySelectorAll("li");
const bgNavLists = labnav.querySelectorAll("li");

openNav.addEventListener("click", (e) => {
  console.log(mobilenav);
  mobilenav.classList.remove("hiddennav");
});

closeNav.addEventListener("click", () => {
  mobilenav.classList.add("hiddennav");
});

smNavLists.forEach((lis) => {
  lis.addEventListener("click", (e) => {
    smNavLists.forEach((li) => li.classList.remove("activesm"));
    lis.classList.add("activesm");
  });
});

bgNavLists.forEach((lis) => {
  lis.addEventListener("click", (e) => {
    bgNavLists.forEach((li) => li.classList.remove("activebg"));
    lis.classList.add("activebg");
  });
});

//////////////////////////////////
//animation to home page
//////////////////////////
const travelToOptions = {
  delay: 300,
  origin: "left",
  distance: "500px",
  easing: "ease",
  duration: 1000,
  mobile: false,
};
const explorOptions = {
  delay: 800,
  origin: "right",
  distance: "500px",
  easing: "ease",
  duration: 1000,
  mobile: false,
};
const pragrphOptions = {
  delay: 1500,
  origin: "bottom",
  distance: "500px",
  easing: "ease",
  duration: 1000,
  mobile: false,
};
ScrollReveal().reveal(".treaveltoanm", travelToOptions);
ScrollReveal().reveal(".exploranm", explorOptions);
ScrollReveal().reveal(".praghanm", pragrphOptions);
//////////////////////////////////
//animation to crew
//////////////////////////
const crewOptions = {
  delay: 300,
  origin: "right",
  distance: "500px",
  easing: "ease",
  mobile: false,
};
const crewInfo = {
  delay: 330,
  origin: "left",
  distance: "500px",
  easing: "ease",
  mobile: false,
};

ScrollReveal().reveal(".crewperson", crewOptions);
ScrollReveal().reveal(".crewinfo", crewInfo);
//////////////////////////////////////
//animation to destination
//////////////////////////
const plantOp = {
  delay: 300,
  origin: "left",
  distance: "900px",
  easing: "ease-in-out",
  duration: 1000,
  mobile: false,
  rotate: {
    z: -180,
  },
};
const statOp = {
  delay: 300,
  origin: "bottom",
  distance: "900px",
  easing: "ease-in-out",
  duration: 1200,
  mobile: false,
};

const explanOp = {
  delay: 300,
  origin: "right",
  distance: "900px",
  easing: "ease-in-out",
  duration: 1000,
  mobile: false,
};

ScrollReveal().reveal(".plantanm", plantOp);
ScrollReveal().reveal(".statanm", statOp);
ScrollReveal().reveal(".explananm", explanOp);
/////////////////////////////////////
//animation to technology
//////////////////////////

const techOp = {
  delay: 300,
  origin: "bottom",
  distance: "900px",
  easing: "ease-out",
  duration: 900,
  mobile: false,
};
const pagsOp = {
  delay: 300,
  origin: "bottom",
  distance: "900px",
  easing: "ease-in-out",
  duration: 1800,
  mobile: false,
};
const detailsOp = {
  delay: 300,
  origin: "left",
  distance: "900px",
  easing: "ease-in-out",
  duration: 1500,
  mobile: false,
};
ScrollReveal().reveal(".techanm", techOp);
ScrollReveal().reveal(".pagsanm", pagsOp);
ScrollReveal().reveal(".detailsanm", detailsOp);
