//  coded by Bibek Shrestha

const nav_links = document.querySelectorAll("ul li a");

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", function () {
    nav_links.forEach((link) => {
      link.classList.remove("active");
      this.classList.add("active");
    });
  });
});

//Change navigation style on scroll
window.addEventListener("scroll", (event) => {
  let nav = document.querySelector(".navigation");

  window.scrollY >= 100
    ? nav.classList.add("scroll")
    : nav.classList.remove("scroll");
});

//Active navigation on scroll
window.addEventListener("scroll", (event) => {
  let navigationLinks = document.querySelectorAll("ul li a");
  let fromTop = window.scrollY + 300;

  navigationLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

//   hide navigation bar on scrolling down

var lastScrollTop = 0;

var navbar = document.querySelector(".navigation");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (window.scrollY >= 200) {
    if (scrollTop > lastScrollTop) {
      navbar.classList.add("hider");
    } else {
      navbar.classList.remove("hider");
    }
  }

  lastScrollTop = scrollTop;
});

// small devices

var lastScrollTopTwo = 0;

var navbarTwo = document.querySelector("header");

window.addEventListener("scroll", function () {
  var scrollTopTwo = window.pageYOffset || document.documentElement.scrollTop;

  if (window.scrollY >= 200) {
    if (scrollTopTwo > lastScrollTopTwo) {
      navbarTwo.classList.add("hiderTwo");
    } else {
      navbarTwo.classList.remove("hiderTwo");
    }
  }

  lastScrollTopTwo = scrollTopTwo;
});

// mobile view navigation

const toggleMenu = document.querySelector("#cd-menu-trigger");
const mainContent = document.querySelector(".main_content");
const header = document.querySelector("header");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");
toggleMenu.addEventListener("click", navCloserFunction);

// closes the navigation bar on clicking on links

function navCloserFunction(e) {
  navCloser();

  // closes the navigation bar on clicking on links

  var navLinks = document.querySelectorAll(".nav_container ul li a");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", navCloser);
  });
}

function navCloser() {
  toggleMenu.classList.toggle("is-clicked");

  header.classList.toggle("lateral-menu-is-open");
  mainContent.classList.toggle("main_content_transformed");
  navigation.classList.toggle("transformed");
  navigation.classList.toggle("is_visible");
  body.classList.toggle("overflow_hidden");

  // preventing from disappearing the toggle menu on scrolling up

  var lastScrollTopTwo = 0;

  var navbarTwo = document.querySelector("header");

  window.addEventListener("scroll", function () {
    var scrollTopTwo = window.pageYOffset || document.documentElement.scrollTop;

    if (window.scrollY >= 200) {
      if (scrollTopTwo > lastScrollTopTwo) {
        navbarTwo.classList.toggle("hiderTwo");
      } else {
        navbarTwo.classList.remove("hiderTwo");
      }
    }

    lastScrollTopTwo = scrollTopTwo;
  });

  //

  // for main menu

  var lastScrollTop = 0;

  var navbar = document.querySelector(".navigation");

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.scrollY >= 200) {
      if (scrollTop > lastScrollTop) {
        navbar.classList.toggle("hider");
      } else {
        navbar.classList.remove("hider");
      }
    }

    lastScrollTop = scrollTop;
  });

  // close  menu clicking outside the menu itself

  // mainContent.addEventListener("click",function(event){

  //   console.log(event.target)

  //   if(event.target!=='#cd-menu-trigger, #cd-menu-trigger span'){
  //      toggleMenu.classList.toggle("is-clicked");
  //       header.classList.toggle("lateral-menu-is-open");
  //        mainContent.classList.toggle("main_content_transformed");
  //         navigation.classList.toggle("is_visible");
  //          body.classList.toggle("overflow_hidden");

  //   }

  // });
}

const toTop = document.querySelector(".toTop");
toTop.addEventListener("click", () => {
  location.href = "#home";
});
window.addEventListener("scroll", () => {
  if (pageYOffset > 100) {
    toTop.classList.add("top_active");
  } else {
    toTop.classList.remove("top_active");
  }
});

window.addEventListener("load", (event) => {
  location.href = "#home";
});
