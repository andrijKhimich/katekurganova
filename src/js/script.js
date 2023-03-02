// TODO: delay before slide change
let swiper = new Swiper(".testimonials-slider", {
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
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["0%", 0, -1],
      opacity: 0,
    },
    next: {
      translate: ["100%", 0, 0],
    },
  }
});


// faq accordion 
const accordions = document.querySelectorAll(".accordion__item");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__panel");
	accordion.classList.add("active");
	content.style.maxHeight = content.scrollHeight + "px";
	content.style.opacity = 1;
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__panel");
	accordion.classList.remove("active");
	content.style.maxHeight = null;
	content.style.opacity = 0;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__btn");
	const content = accordion.querySelector(".accordion__panel");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});


const showMoreText = () =>{
  let buttons = document.querySelectorAll('.btn-more');
  buttons.forEach(button => {
    button.addEventListener('click', ()=> {
      console.log('show');
      button.classList.toggle('active');
      let text = button.parentElement.previousElementSibling;
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