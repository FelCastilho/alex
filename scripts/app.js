// SCROLL HEADER
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);

//DROPDOWN MENU
const dropdownMenu = document.getElementById("dropdown-item");
const menuItem = document.getElementById("menu-item");

if (menuItem && dropdownMenu) {
  menuItem.addEventListener("mouseenter", () => {
    dropdownMenu.classList.add("active-dropdown-menu");
  });

  menuItem.addEventListener("mouseleave", () => {
    dropdownMenu.classList.remove("active-dropdown-menu");
  });
}

// MENU MOBILE
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");

      // força reset do transform
      if (nav.classList.contains("active-menu-mobile")) {
        nav.style.transform = "translate3d(0,0,0)";
      } else {
        nav.style.transform = "translate3d(0,-100px,0)";
      }
    });
  }
};

showMenu("bx", "menu-mobile");

// Fecha menu mobile ao clicar em um link interno
const navLinks = document.querySelectorAll("#menu-mobile a"); // todos os links dentro do menu

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("menu-mobile");
    const toggle = document.getElementById("bx");

    nav.classList.remove("active-menu-mobile");
    toggle.classList.remove("active-bx");

    // reseta transform
    nav.style.transform = "translate3d(0,-100px,0)";
  });
});
