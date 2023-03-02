"use strict";

// TODO: delay before slide change
var swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  // preventClicks: true,
  // preventClicksPropagation: true,
  // slideToClickedSlide: true,
  lazy: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["0%", 0, -1],
      opacity: 0
    },
    next: {
      translate: ["100%", 0, 0]
    }
  }
});

// faq accordion 
var accordions = document.querySelectorAll(".accordion__item");
var openAccordion = function openAccordion(accordion) {
  var content = accordion.querySelector(".accordion__panel");
  accordion.classList.add("active");
  content.style.maxHeight = content.scrollHeight + "px";
  content.style.opacity = 1;
};
var closeAccordion = function closeAccordion(accordion) {
  var content = accordion.querySelector(".accordion__panel");
  accordion.classList.remove("active");
  content.style.maxHeight = null;
  content.style.opacity = 0;
};
accordions.forEach(function (accordion) {
  var intro = accordion.querySelector(".accordion__btn");
  var content = accordion.querySelector(".accordion__panel");
  intro.onclick = function () {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach(function (accordion) {
        return closeAccordion(accordion);
      });
      openAccordion(accordion);
    }
  };
});
var showMoreText = function showMoreText() {
  var buttons = document.querySelectorAll('.btn-more');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      console.log('show');
      button.classList.toggle('active');
      var text = button.parentElement.previousElementSibling;
      if (text.style.maxHeight) {
        text.style.maxHeight = null;
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      }
    });
  });
};
showMoreText();
// // run for sprite svg support 
svg4everybody();