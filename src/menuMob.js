
const menuMob = () => {
  document.querySelector("#show-menu").onclick = () => {
    const element = document.querySelector(".menu-mob");
    element.classList.toggle("menu-mob-show");
};
};

export default menuMob;
