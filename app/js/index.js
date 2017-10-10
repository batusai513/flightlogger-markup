"use strict";
import "../css/index.css";
import $ from "jquery";
import "./parallax";
import SmartPhone from "detect-mobile-browser";
import magnificPopup from "magnific-popup";
import Rellax from "rellax";
import tabby from "Tabby";
import smoothScroll from "smooth-scroll";
// import gumshoe from "gumshoe";
// import MapFactory from './map';

smoothScroll.init({
  speed: 1000
});
// gumshoe.init({
//   scrollDelay: true
// });

const handleMobileDetection = () => {
  // if (!SmartPhone.isAny()) {
  //   startMobileMenu(mainMenu);
  //   $(".js-menu-link").on("dragstart", e => e.preventDefault());
  // }
  // if (SmartPhone.isAny()) {
  //   // replace videos with images
  //   const demos = ["search-demo", "radio-demo", "collections-demo"];
  //   demos.forEach(demo => {
  //     $(`#${demo}`).replaceWith(
  //       `<img src='images/${demo}.png' id='${demo}' class='demo-image'/>`
  //     );
  //   });
  //   $(".download")
  //     .removeClass("download")
  //     .html("<p>Available for Windows, Mac and Ubuntu.</p>");
  //   $(".demo").click(function() {
  //     $(this).toggleClass("active");
  //   });
  // }
};

window.addEventListener("load", function() {});

$(document).ready(() => {
  handleMobileDetection();
});
