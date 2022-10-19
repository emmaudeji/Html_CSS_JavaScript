const nav = document.querySelector(".nav_links");
const navCloseBtn = document.querySelector("#nav_toggle-close");
const navOpenBtn = document.querySelector("#nav_toggle-open");

// function to open nav drop-down menu
const openNav = () => {
  nav.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};

navOpenBtn.addEventListener("click", openNav);

// function to close nav drop-down menu
const closeNav = () => {
  nav.style.display = "none";
  navOpenBtn.style.display = "inline-block";
  navCloseBtn.style.display = "none";
};

navCloseBtn.addEventListener("click", closeNav);
