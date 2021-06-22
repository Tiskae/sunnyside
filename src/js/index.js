"use strict";
const btnToggleMobileMenu = document.querySelector(".header__menu--icon-box");
const mobileNav = document.querySelector(".mobile__menu");

const toggleMobileMenu = () => {
    mobileNav.classList.toggle("open");
};

btnToggleMobileMenu.addEventListener("click", toggleMobileMenu);
