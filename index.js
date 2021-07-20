
class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    let self = this;
    $(".nav-item").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset =
      $(".header").offset().top +
      $(".header").height() -
      this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $(".nav-container").addClass("nav-container--top");
    } else {
      $(".nav-container").removeClass("nav-container--top");
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".nav-item").each(function () {
      let id = $(this).attr("href");
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom =
        $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    $(".nav-item-slider").css("width", width);
    $(".nav-item-slider").css("left", left);
  }
}

new StickyNavigation();
// skewed

const skewedOne = document.querySelector(".skewed-one");
const skewedTwo = document.querySelector(".skewed-two");
window.addEventListener("scroll", function () {
  const valueOne = -15 + window.scrollY / 45;
  const valueTwo = 15 + window.scrollY / -45;
  skewedOne.style.transform = "skewY(" + valueOne + "deg)";
  skewedTwo.style.transform = "skewY(" + valueTwo + "deg)";
});
