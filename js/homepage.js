$(document).ready(function () {
  $(".mobile-toggle-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      500
    );
    $(".overlay").animate(
      {
        opacity: 1,
      },
      500
    );
    $(".overlay").css("visibility", "visible");
  });
  $(".close-mobile-nav").click(function () {
    $(".mobile-nav").animate(
      {
        right: -350,
      },
      500
    );

    $(".overlay").fadeTo("slow", 0);
  });
});
