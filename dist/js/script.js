"use strict";

//Init Scrollbar
document.addEventListener('DOMContentLoaded', function (event) {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: -0.5
  });
  var $app = document.querySelector('.global-wrapper');
  var isMobile = window.innerWidth < 1280;
  var mainWrapper = document.querySelector('.main-wrapper');
  if (mainWrapper) {
    !function () {
      setTimeout(function () {
        var blocks = document.querySelectorAll('.in-view-detect');
        [].forEach.call(blocks, function (item) {
          function onScroll() {
            if (item.getBoundingClientRect().top - window.innerHeight <= item.offsetHeight * -1 / 16 && !item.classList.contains('in-view')) {
              item.classList.remove('in-view-detect');
              item.classList.add('in-view');
            }
          }
          onScroll();
          document.addEventListener('scroll', onScroll);
        });
      }, 700);
    }();
  }
  if ($app) {
    if (!isMobile) {
      var _$app = document.querySelector('.global-wrapper');
      window.appScrollBar = Scrollbar.init(_$app);
      ScrollTrigger.scrollerProxy(_$app, {
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
  }
  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    lazy: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ['0%', 0, -1],
        opacity: 0
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }
  });

  // faq accordion
  var accordions = document.querySelectorAll('.accordion__item');
  var openAccordion = function openAccordion(accordion) {
    var content = accordion.querySelector('.accordion__panel');
    accordion.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = 1;
  };
  var closeAccordion = function closeAccordion(accordion) {
    var content = accordion.querySelector('.accordion__panel');
    accordion.classList.remove('active');
    content.style.maxHeight = null;
    content.style.opacity = 0;
  };
  accordions.forEach(function (accordion) {
    var intro = accordion.querySelector('.accordion__btn');
    var content = accordion.querySelector('.accordion__panel');
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
        button.classList.toggle('active');
        var text = button.parentElement.previousElementSibling;
        if (text.style.maxHeight) {
          text.style.maxHeight = null;
        } else {
          text.style.maxHeight = text.scrollHeight + 'px';
        }
      });
    });
  };
  showMoreText();
  function openTabFirst(evt, cityName) {
    var i, tabContent, tabLinks;
    tabContent = document.querySelectorAll('.firstTab .tab__content');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('active');
    }
    tabLinks = document.querySelectorAll('.firstTab .tab__link');
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(cityName).classList.add('active');
    evt.currentTarget.className += ' active';
  }
  var tabBtns = document.querySelectorAll('.firstTab .tab__link');
  var toggleTabFirst = function toggleTabFirst() {
    tabBtns.forEach(function (tabBtn) {
      tabBtn.addEventListener('click', function (e) {
        var target = e.target.getAttribute('data-href');
        openTabFirst(e, target);
      });
    });
  };
  toggleTabFirst();
  function openTabSecond(evt, cityName) {
    var i, tabContent, tabLinks;
    tabContent = document.querySelectorAll('.secondTab .tab__content');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('active');
    }
    tabLinks = document.querySelectorAll('.secondTab .tab__link');
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(cityName).classList.add('active');
    evt.currentTarget.className += ' active';
  }
  var tabBtnsSecond = document.querySelectorAll('.secondTab .tab__link');
  var toggleTabSecond = function toggleTabSecond() {
    tabBtnsSecond.forEach(function (tabBtn) {
      tabBtn.addEventListener('click', function (e) {
        var target = e.target.getAttribute('data-href-sec');
        openTabSecond(e, target);
      });
    });
  };
  toggleTabSecond();
  // const tabs = document.querySelector('.product-card__footer');
  // const tabButton = document.querySelectorAll('.tab__link');
  // const contents = document.querySelectorAll('.tab__content');

  // tabs.onclick = (e) => {
  //   const id = e.target.dataset.id;
  //   if (id) {
  //     tabButton.forEach((btn) => {
  //       btn.classList.remove('active');
  //     });
  //     e.target.classList.add('active');

  //     contents.forEach((content) => {
  //       content.classList.remove('active');
  //     });
  //     const element = document.getElementById(id);
  //     element.classList.add('active');
  //   }
  // };
  // // run for sprite svg support
  svg4everybody();
});