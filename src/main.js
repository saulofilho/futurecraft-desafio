import movingTxt from "./movingTxt";
import AOS from "aos";
import mySwiper from "./mySwiper";

AOS.init();
movingTxt();
mySwiper;

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
