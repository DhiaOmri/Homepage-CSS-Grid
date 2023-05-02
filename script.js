var $ = jQuery.noConflict();
$(document).ready(function () {
  $(".mobile-menu-icon").click(function () {
    $(".menu").toggleClass("active");
    $("body").toggleClass("menu-open");
  });
});
