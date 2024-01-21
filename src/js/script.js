//Init Scrollbar

jarallax(document.querySelectorAll('.jarallax'), {
  speed: -0.5,
});

const isMobile = window.innerWidth < 1280;
if (!isMobile) {
  let $app = document.querySelector('.global-wrapper');

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
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.refresh();
}
let scrollTopPos = 0;

if (!isMobile) {
  window.appScrollBar.addListener(() => {
    scrollTopPos = window.appScrollBar.scrollTop;
  });
} else {
  scrollTopPos = window.scrollY;

  document.addEventListener('scroll', () => {
    scrollTopPos = window.scrollY;
  });
}

// in-view detect
!(function () {
  setTimeout(() => {
    const blocks = document.querySelectorAll('.in-view-detect');

    [].forEach.call(blocks, ($item) => {
      function onScroll() {
        if (
          $item.getBoundingClientRect().top - window.innerHeight <=
            ($item.offsetHeight * -1) / 4 &&
          !$item.classList.contains('in-view')
        ) {
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
})();

let swiper = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  lazy: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ['0%', 0, -1],
      opacity: 0,
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});

// faq accordion
const accordions = document.querySelectorAll('.accordion__item');

const openAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__panel');
  accordion.classList.add('active');
  content.style.maxHeight = content.scrollHeight + 'px';
  content.style.opacity = 1;
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__panel');
  accordion.classList.remove('active');
  content.style.maxHeight = null;
  content.style.opacity = 0;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector('.accordion__btn');
  const content = accordion.querySelector('.accordion__panel');

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});

const showMoreText = () => {
  let buttons = document.querySelectorAll('.btn-more');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      let text = button.parentElement.previousElementSibling;
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
  let i, tabContent, tabLinks;
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

const tabBtns = document.querySelectorAll('.firstTab .tab__link');
const toggleTabFirst = () => {
  tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener('click', (e) => {
      let target = e.target.getAttribute('data-href');
      openTabFirst(e, target);
    });
  });
};
toggleTabFirst();

function openTabSecond(evt, cityName) {
  let i, tabContent, tabLinks;
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

const tabBtnsSecond = document.querySelectorAll('.secondTab .tab__link');
const toggleTabSecond = () => {
  tabBtnsSecond.forEach((tabBtn) => {
    tabBtn.addEventListener('click', (e) => {
      let target = e.target.getAttribute('data-href-sec');
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
