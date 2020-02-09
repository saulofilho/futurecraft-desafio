const circleStroke = function () {
  let link = document.querySelector(".btn-como-funciona");
  let symbol = document.querySelector(".symbol");

  /* clockwise paint on hover in */
  link.addEventListener("mouseover", function () {
    symbol.setAttribute("style", "stroke-dashoffset: 1600; animation: paint 4s linear");
  }, false);

  /* clockwise wipe on hover out */
  link.addEventListener("mouseout", function () {
    symbol.setAttribute("style", "stroke-dashoffset: 0; animation: wipe 4s linear");
  }, false);
};

export default circleStroke;
