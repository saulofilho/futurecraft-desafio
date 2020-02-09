import movingTxt from "./movingTxt";
import AOS from "aos";
import mySwiper from "./mySwiper";
import menuMob from "./menuMob";
import circleStroke from "./circleStroke";

// circle button stroke
circleStroke();

// menu mob
menuMob();

// aos
AOS.init();

// swiper carousel
mySwiper;

// move from right to left
movingTxt();

// move from left to right
$(".marquee").marquee({
  //speed in milliseconds of the marquee
  duration: 10000,
  //gap in pixels between the tickers
  gap: 0,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: "right",
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});

// animated img
$(document).ready(function() {
  var animated = false; //added variable to control the animation
  $(window).scroll(function() {
    var wS = $(this).scrollTop();
    if (animated && wS <= 740) {
      $(".img-two").animate({
        "top": 0
      }, 500);
      animated = false; //animation ended
    }
    if (!animated && wS > 841) {
      $(".img-two").animate({
        "top": $(".img-right").width() - 550
      }, 500);
      animated = true; //it was animated
    }
  });
});

// circle swiper
$(".three").on({
  mousemove: function(e) {
    $(".drag-indicator").css({
      left: e.pageX,
      top: e.pageY
    });
  }
});
