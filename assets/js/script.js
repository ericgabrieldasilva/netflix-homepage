getSlideIndex()

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  mousewheel: false,
  allowTouchMove: false,
  keyboard: true,
  speed: 1000,
  loop: true,
  breakpoints: {
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})
openAndCloseInputSearch()
openAndCloseMenuMobile()

const btnPrev = document.querySelector(".button-prev")
const btnNext = document.querySelector(".button-next")

//
btnPrev.addEventListener("click", function () {
  swiper.slidePrev()
  getSlideIndex()
})

btnNext.addEventListener("click", function () {
  swiper.slideNext()
  getSlideIndex()
})

function getSlideIndex() {
  const activeSlide = document.querySelector(".swiper-slide-active")
  const slideIndex = activeSlide.getAttribute("data-swiper-slide-index")
  const descriptions = document.querySelectorAll(".description-single")
  const backgroundHome = document.querySelectorAll(".bg-home")

  // Hiding all descriptions
  descriptions.forEach((desc) => {
    desc.style.display = "none"
  })

  // Hiding all backgrounds images
  backgroundHome.forEach((bg) => {
    bg.classList.remove("show")
  })

  // Show background image
  for (let i = 0; i < backgroundHome.length; i++) {
    backgroundHome[slideIndex].classList.add("show")
  }

  // Show description
  for (let i = 0; i < descriptions.length; i++) {
    descriptions[slideIndex].style.display = "block"
  }
}

function openAndCloseInputSearch() {
  const buttonSearch = document.getElementById("btn-search")
  const inputSearch = document.querySelector("li.search input")
  let isOpen

  // Opening the input search
  buttonSearch.addEventListener("click", function () {
    if (isOpen) {
      inputSearch.style.transform = "scaleX(0)"
      isOpen = false
    } else {
      inputSearch.style.transform = "scaleX(1)"
      isOpen = true
    }
  })
}

function openAndCloseMenuMobile() {
  const menuMobile = document.querySelector(".menu-mobile ul")
  const btnOpenMenu = document.querySelector(".icon-menu")
  const btnClose = document.querySelector(".icon-close")
  const body = document.querySelector("body")

  menuMobile.addEventListener("click", function (event) {
    event.stopPropagation()
  })

  // Open the menu
  btnOpenMenu.addEventListener("click", function (event) {
    event.stopPropagation()
    menuMobile.classList.add("show-menu-mobile")
    body.style.overflowY = "hidden"
  })

  // Closing the menu
  btnClose.addEventListener("click", function () {
    menuMobile.classList.remove("show-menu-mobile")
    body.style.overflowY = "visible"
  })

  // Closes the menu when you click outside the menu
  body.addEventListener("click", function () {
    menuMobile.classList.remove("show-menu-mobile")
    body.style.overflowY = "visible"
  })
}
