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
const accordion = () => {
  let buttons = document.querySelectorAll(".accordion__btn");
  // let i;

  const removeActiveClass = () => {
    buttons.forEach(button => {
      // let panel = button.nextElementSibling;
      button.classList.remove("active");
      console.log(button)
      // panel.style.maxHeight = null;
      // panel.style.opacity = 0;
    });
  }

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      let panel = button.nextElementSibling;
      if (button.classList.contains("active")) {
        console.log('remove');
        removeActiveClass();
        this.classList.add("active");
        // button.classList.remove("active");
        // panel.style.maxHeight = panel.scrollHeight + "px";
        // panel.style.opacity = 1;
      } else {
        console.log('add')
        button.classList.add("active");
        // removeActiveClass()
      }
    });
  });

}
accordion()
// // run for sprite svg support 
svg4everybody();