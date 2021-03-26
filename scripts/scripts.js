const selectCasting = document.querySelector(".select-casting");
const selectGander = document.querySelector(".select-gander");
const selectAge = document.querySelector(".select-age");
const menu = document.querySelector(".header__icon_menu");
const closeButton = document.querySelector(".header__icon_menu_active")
const popup = document.querySelector(".popup")

const menuToggle = () => {
  menu.addEventListener('click', ()=> {
    popup.classList.add("popup_active")
  })
  closeButton.addEventListener("click", ()=> {
    popup.classList.remove("popup_active")
  })
}

const select = (select) => {
  const selectHeader = select.querySelector(".select__header");
  const selectItem = select.querySelector(".select__item");
  const currentText = select.querySelector(".select__current");

  selectHeader.addEventListener("click", () => selectToggle(selectHeader));
  selectItem.addEventListener("click", () => selectItemToggle(selectItem));

  const selectItemToggle = (item) => {
    currentText.textContent = item.textContent;
    select.classList.remove("select_active");
  };

  const selectToggle = (item) => {
    select.classList.toggle("select_active");
    item.classList.toggle("select__header_active");
  };
};

const selectRange = (select) => {
  const selectHeader = select.querySelector(".select__header");

  selectHeader.addEventListener("click", () => selectToggle(selectHeader));

  const selectToggle = (item) => {
    select.classList.toggle("select_active");
    item.classList.toggle("select__header_active");
  };
};

select(selectCasting);
select(selectGander);
selectRange(selectAge);
menuToggle()

// Импут Рэндж

const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");

const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");

function setLeftValue() {
  const _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  const percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  const _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  const percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});

// Слайдер

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("casting-slides");
  var dots = document.getElementsByClassName("casting-slider__dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slider = tns({
  container: '.people__slider',
  gutter: 10,
  nav: false,
  mouseDrag: true,
  controlsContainer: ".people__buttons",
  responsive: {
    "350": {
      "items": 2
    },
    "500": {
      "items": 3
    },
    "700": {
      "items": 4
    },
    "1000": {
      "items": 5
    },
    "1200": {
      "items": 6
    },
  },
});