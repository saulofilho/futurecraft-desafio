const movingTxt = () => {
  const movLeft = [...document.querySelectorAll(".mov-left")];
  const movRight = [...document.querySelectorAll(".mov-right")];
  const movLeftT = [...document.querySelectorAll(".mov-left-three")];

  movLeft.forEach((movLeft) => {
    movLeft.i = 0;
    movLeft.step = 4;
    movLeft.width = (movLeft.clientWidth + 1);
    movLeft.innerHTML = `${movLeft.innerHTML}`.repeat(10);
    //movLeft.addEventListener("mouseenter", () => movLeft.step = 0, false);
    //movLeft.addEventListener("mouseleave", () => movLeft.step = 4, false);
    movLeft.addEventListener("mouseenter", () => movLeft.style.webkitTextStroke = "3px #2d3d7d");
    movLeft.addEventListener("mouseenter", () => movLeft.style.zIndex = "9");
    movLeft.addEventListener("mouseleave", () => movLeft.style.webkitTextStroke = "3px white");
    movLeft.addEventListener("mouseleave", () => movLeft.style.zIndex = "0");
  });

  movRight.forEach((movRight) => {
    // movRight.i = 0;
    // movRight.step = 4;
    // movRight.width = (movRight.clientWidth + 1);
    // movRight.innerHTML = `${movRight.innerHTML}`.repeat(100);
    movRight.addEventListener("mouseenter", () => movRight.style.webkitTextStroke = "3px #2d3d7d");
    movRight.addEventListener("mouseenter", () => movRight.style.zIndex = "9");
    movRight.addEventListener("mouseleave", () => movRight.style.webkitTextStroke = "3px white");
    movRight.addEventListener("mouseleave", () => movRight.style.zIndex = "0");
  });

  movLeftT.forEach((movLeftT) => {
    movLeftT.i = 0;
    movLeftT.step = 4;
    movLeftT.width = (movLeftT.clientWidth + 1);
    movLeftT.innerHTML = `${movLeftT.innerHTML}&nbsp;`.repeat(10);
  });

  setInterval(move, 50);

  function move() {
    movLeft.forEach((movLeft) => {
      movLeft.style.marginLeft = `-${movLeft.i}px`;
      movLeft.i = movLeft.i < movLeft.width ? movLeft.i + movLeft.step : 1;
    });

    // movRight.forEach((movRight) => {
    //   movRight.style.marginLeft = `${movRight.i}px`;
    //   movRight.i = movRight.i < movRight.width ? movRight.i + movRight.step : 1;
    // });

    movLeftT.forEach((movLeftT) => {
      movLeftT.style.marginLeft = `-${movLeftT.i}px`;
      movLeftT.i = movLeftT.i < movLeftT.width ? movLeftT.i + movLeftT.step : 1;
    });
  }

  return move;
};

export default movingTxt;
