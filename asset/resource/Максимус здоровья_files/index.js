"use strict"

const nextRead = document.querySelectorAll(".button__next");
const nextReadPopup1 = document.getElementById("popup__text1");
const nextReadPopup2 = document.getElementById("popup__text2");
const nextReadPopup3 = document.getElementById("popup__text3");
const nextReadPopup4 = document.getElementById("popup__text4");
const nextReadPopup5 = document.getElementById("popup__text5");
const nextReadPopup6 = document.getElementById("popup__text6");
const nextReadPopup7 = document.getElementById("popup__text7");
const nextReadPopup8 = document.getElementById("popup__text8");

nextRead.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.target.classList.add('active');
        console.log(e.classList);
    });
});

