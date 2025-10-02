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

// SLIDE
const bullet = document.querySelectorAll(".bullet");
const images = document.querySelectorAll(".img-slider");

bullet.forEach((item, index) => {
  item.addEventListener("click", () => {
    images.forEach((img, i) => {
      img.style.opacity = "0";
      img.classList.remove("active-img");
    });

    images[index].style.opacity = "1";
    images[index].classList.add("active-img");

    bullet.forEach((b) => b.classList.remove("active-bullet"));
    bullet[index].classList.add("active-bullet");
  });
});

// SCROLL TO TOP
const returnTopBtn = document.querySelector(".return-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    returnTopBtn.classList.add("show");
  } else {
    returnTopBtn.classList.remove("show");
  }
});

returnTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ROTATE ARROW HOVER
const serviceItems = document.querySelectorAll(".service-img");

serviceItems.forEach((item) => {
  const arrow = item.querySelector(".arrow-services");
  const title = item.querySelector("h3");

  item.addEventListener("mouseenter", () => {
    arrow.style.transition = "transform 0.3s ease";
    arrow.style.transform = "rotate(-45deg)";
    title.classList.add("hovered");
  });

  item.addEventListener("mouseleave", () => {
    arrow.style.transition = "transform 0.3s ease";
    arrow.style.transform = "rotate(0deg)";
    title.classList.remove("hovered");
  });
});
