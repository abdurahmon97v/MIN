let elHeaderMenu = document.querySelector(".header__menu");
let elLinethird = document.querySelector(".line2");
let elLineOne = document.querySelector(".line1");
let elLineThree = document.querySelector(".line3");
let elNav = document.querySelector(".nav");
elHeaderMenu.addEventListener("click",function(){
    elNav.classList.toggle("open-nav");
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1");
    elLineThree.classList.toggle("rotate-line3");
})