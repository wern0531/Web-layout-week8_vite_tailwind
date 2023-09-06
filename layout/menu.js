const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0");
    menu.classList.add("max-h-[368px]");
  } else {
    menu.classList.remove("max-h-[368px]");
    menu.classList.add("max-h-0");
  }
});
