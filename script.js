"use strict";

var typed = function() {

  var options = {
    strings: ["learn", "get jobs", "make a living"],
    typeSpeed: 150,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 3000,
    loop: true
  };
//  var type = new Typed("#typed", options);
  $("#typed").typed(options);
};
$(document).ready(typed);


/*function hoverOff() {
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
} */
