document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu-item');
  var slides = document.querySelectorAll('.slide');
  var bullets = document.querySelectorAll('.bullet');
  var prevArrow = document.querySelector('.prev-arrow');
  var nextArrow = document.querySelector('.next-arrow');
  var currentIndex = 0;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('selected', i === index);
    });
    bullets.forEach(function (bullet, i) {
      bullet.classList.toggle('active', i === index);
    });
    menuItems.forEach(function (item, i) {
      item.classList.toggle('selected', i === index);
    });
    currentIndex = index;
  }

  menuItems.forEach(function (menuItem, index) {
    menuItem.addEventListener('click', function () {
      showSlide(index);
    });
  });

  bullets.forEach(function (bullet, index) {
    bullet.addEventListener('click', function () {
      showSlide(index);
    });
  });

  prevArrow.addEventListener('click', function () {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  });

  nextArrow.addEventListener('click', function () {
    showSlide((currentIndex + 1) % slides.length);
  });

  // Hide arrows and bullets if only one slide
  if (slides.length <= 1) {
    prevArrow.style.display = 'none';
    nextArrow.style.display = 'none';
    bullets.forEach(function (bullet) {
      bullet.style.display = 'none';
    });
  }
});
