$(document).ready(function () {
  var isOpenSubmenu = true;
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

  $.fn.animateRotate = function (angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function (i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function (now) {
        $.style(e, "transform", "rotate(" + now + "deg)");
        if (step) return step.apply(e, arguments);
      };

      $({ deg: 0 }).animate({ deg: angle }, args);
    });
  };

  $(".mobile-nav-expand").click(function () {
    $(".mobile-sub-menu").slideToggle("slow");

    console.log(isOpenSubmenu);
    if (isOpenSubmenu) {
      $(".mobile-nav-expand").animateRotate(45);
    } else {
      $(".mobile-nav-expand").animateRotate(0);
    }
    isOpenSubmenu = !isOpenSubmenu;
  });

  if (isOpenSubmenu) {
    $(".mobile-nav-expand").animateRotate(45);
  } else {
    $(".mobile-nav-expand").animateRotate(0);
  }
});
