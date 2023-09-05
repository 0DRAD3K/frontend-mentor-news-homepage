const menuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile_menu");
const overflow = document.querySelector(".overflow");
const close = document.querySelector('.mobile_menu_btn');
const link = document.querySelector('.link');
menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".menu img");
  menuBtn.classList.toggle("active_btn");
  overflow.classList.toggle("active_menu");
  mobileMenu.classList.toggle("active_menu");
  if (menuBtn.classList.contains("active_btn")) {
    icon.src = "assets/images/icon-menu-close.svg";
  } else {
    icon.src = "assets/images/icon-menu.svg";
  }
});
link.addEventListener('click' , ()=> {
  console.log('ee')
})