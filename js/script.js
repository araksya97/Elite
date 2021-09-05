const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      220: {
        slidesPerView: 2,
      },
      550: {
        slidesPerView: 3,
      },
      1080: {
        slidesPerView: 4,
      }
    }
  });

  $(".mobile_btn").on("click", function () {
    $(".nav_menu").toggleClass("active");
});