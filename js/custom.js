(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  $('.popup_youtube').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(document).ready(function() {
    $('select').niceSelect();

    function makeTimer() {

      var endTime = new Date("07 November 2019 11:00:00 GMT+05:30");			
      endTime = (Date.parse(endTime) / 1000);
  
      var now = new Date();
      now = (Date.parse(now) / 1000);
  
      var timeLeft = endTime - now;
  
      var days = Math.floor(timeLeft / 86400); 
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }

      if(days < "0") {
        days = "00";
        hours = "00";
        minutes = "00";
        seconds = "00";

      }
  
      $("#days").html(days + "<span>Days</span>");
      $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>");
      $("#seconds").html(seconds + "<span>Seconds</span>");		
  
  }
  
  setInterval(function() { makeTimer(); }, 1000);
  });


  
  var review = $('.client_review_part');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      smartSpeed: 2000,
    });
  }
  
  let roundHeight = $(".rounds").height();
  let bgrwidth = $(".rulesRound").width();

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.home_menu').addClass('home_menu_fixed animated fadeInDown');
      $('.iconbg').css('display','none');
      $('.main_menu .menu-trigger span').css('background','#000000');
      $('#colouredLogo').css('display','inline');
      $('#whiteLogo').css('display','none');
    } else {
      $('.home_menu').removeClass('home_menu_fixed animated fadeInDown');
      $('.iconbg').css('display','block');
      $('.main_menu .menu-trigger span').css('background','#ffffff');
      $('#whiteLogo').css('display','inline');
      $('#colouredLogo').css('display','none');

    }

    if(window_top > 0 && window_top < 250)
    {
      let y = 92.5 + (window_top*0.03);
      let x = y + '%';
      $("#organizeDiv").css('width',x);

      let r = roundHeight + (window_top*1.1);
      $(".rounds").css('width',(r +'px'));
      // //alert("x");
    }

    
    if(window_top > 200 && window_top < 2500) {
        let z = bgrwidth - (window_top*30/60);
        $(".bg-r").css('width',(z +'px'));

        //console.log("rrr",z);
    }
  });


  $('.slider').slick({
    slidesToShow: 1,
    speed: 1000,
    infinite: true,
    autoplay:false,
    pauseOnHover: true,
    dots: false,
    prevArrow: '<i class="slick_left flaticon-left-arrow"></i>',
    nextArrow: '<i class="slick_right flaticon-arrow-pointing-to-right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
//memnu js
jQuery(document).ready(function ($) {
  $(".menu-trigger").on('click', function () {
    $(".off-canven-menu").addClass("active")
    $(".offcanvas-overlay").addClass("active")
  });
  $(".close-icon i, .offcanvas-overlay").on('click', function () {
    $(".off-canven-menu").removeClass("active")
    $(".offcanvas-overlay").removeClass("active")
  });

  $(".menu").on('click',()=>{
    $(".off-canven-menu").removeClass("active")
    $(".offcanvas-overlay").removeClass("active")
  })
});
var client = $('.client_logo');
if (client.length) {
  client.owlCarousel({
    items: 6,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    smartSpeed: 2000,
    margin: 20,
    responsive: {
      0: {
        items: 3
      },
      577: {
        items:3,
      },
      991: {
        items:5,
      },
      1200: {
        items: 6,
      }
    },
  });
}


document.addEventListener("DOMContentLoaded", function() {
  
  var progressBar = document.querySelectorAll(".progress-bar");
  var time = 1500;
  

  progressBar.forEach(function(i) {
    let label = i.children[0];
    let line = i.children[1];
    let count = 0;
    let dataCount = label.getAttribute("data-count");
    let lineCount = line.children[0];
 
    let runTime = time/dataCount;
    
    let animationLineCount = setInterval(function(){
      if(count < dataCount){
        count++;
        label.innerHTML = count + '%';
        lineCount.style.width = count + '%';
      }
    },runTime);
  });
});

}(jQuery));