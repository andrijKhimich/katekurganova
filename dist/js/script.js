"use strict";

//Init Scrollbar

jarallax(document.querySelectorAll('.jarallax'), {
  speed: -0.5
});
var isMobile = window.innerWidth < 1280;
if (!isMobile) {
  var $app = document.querySelector('.global-wrapper');
  window.appScrollBar = Scrollbar.init($app);
  ScrollTrigger.scrollerProxy($app, {
    scrollTop: function scrollTop(value) {
      if (arguments.length) appScrollBar.scrollTop = value;
      return appScrollBar.scrollTop;
    },
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });
  ScrollTrigger.refresh();
}
var scrollTopPos = 0;
if (!isMobile) {
  window.appScrollBar.addListener(function () {
    scrollTopPos = window.appScrollBar.scrollTop;
  });
} else {
  scrollTopPos = window.scrollY;
  document.addEventListener('scroll', function () {
    scrollTopPos = window.scrollY;
  });
}

// in-view detect
!function () {
  setTimeout(function () {
    var blocks = document.querySelectorAll('.in-view-detect');
    [].forEach.call(blocks, function ($item) {
      function onScroll() {
        if ($item.getBoundingClientRect().top - window.innerHeight <= $item.offsetHeight * -1 / 4 && !$item.classList.contains('in-view')) {
          $item.classList.remove('in-view-detect');
          $item.classList.add('in-view');
        }
      }
      onScroll();
      if (!isMobile) {
        appScrollBar.addListener(onScroll);
      } else {
        document.addEventListener('scroll', onScroll);
      }
    });
  }, 1200);
}();
var swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
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