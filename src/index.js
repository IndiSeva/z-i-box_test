import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';

import 'jquery';
import 'bootstrap';
import 'slick-carousel';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


$(function () {

  // Hook for active accordion
  //////////////////////////
  $(".panel").on("show.bs.collapse hide.bs.collapse", function (e) {
    if (e.type == 'show') {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });


  // Show hidden on sm devices 
  /////////////////////////////
  $('.program-shedule, #registration-form .btn-container').on('click', function() {
    $(this).addClass('active');
    $(this).find('.shedule__container').addClass('active');
  });
  $('#registration__section .btn-container').on('click', function() {
    $('#registration__section .background-container').addClass('active');
  });


  //  Transfer info to modal
  //////////////////////////
  $('.speakers__slider').on('click', '.slick-slide .img-container', function () {
    let speakerPhoto = $(this).css('background-image');
    let speakerInfo = $(this).find('.speaker-info');
    let speakerName = $(speakerInfo).find('h3').text();
    let speakerShort = $(speakerInfo).find('p').text();

    $('.modal .right-body .speaker-name').text(speakerName);
    $('.modal .right-body .speaker-short').text(speakerShort);
    $('.modal .person__container').css('background-image', speakerPhoto);
  });


  // Scrool to anchor 
  //////////////////////////
  $(document).on('click', 'a.scroll', function () {
    let target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top }, 700);
      return false;
  });


  // Slick registration
  //////////////////////////
  $("#about-conference__section .conference-details, #sponsors__section .container .row").slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }]
  });


  $(".speakers__slider").slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  
  $(".packages__wrapper").slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    }]
  });


  $("#experts-mind__section .quote-wrapper").slick({
    slidesToShow: 1,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '.slick-custom-prev',
    nextArrow: '.slick-custom-next'
  });


  // Helpers
  //////////////////////////

});