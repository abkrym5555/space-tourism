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
