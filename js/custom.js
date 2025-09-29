// banner
loadSlider();
function loadSlider(){
  $('.general_banner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  });
}
function callbanner(x){
  swal({
      title: "Sample Alert",
      text: "You clicked banner " + x,
      icon: "error",
      button: "OK",
  });
}

// header
$(window).scroll(function(){

  // about
  if ($(window).scrollTop() > 682 && $(window).scrollTop() < 1394){
    $('.ni_about').addClass('active');
  }else{
    $('.ni_about').removeClass('active');
  }

  // services
  if ($(window).scrollTop() > 1394 && $(window).scrollTop() < 2170){
    $('.ni_services').addClass('active');
  }else{
    $('.ni_services').removeClass('active');
  }

  // contact
  if ($(window).scrollTop() > 2699){
    $('.ni_contact').addClass('active');
  }else{
    $('.ni_contact').removeClass('active');
  }
});

// scroll tracker
// window.addEventListener("scroll", (event) => {
//   let scroll = this.scrollY;
//   console.log(scroll)
// });