$(document).ready(function () {
  $("#section-cover").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-discover").hover(
    function () {
      if ($(window).width() <= "768") {
        $(this).addClass("shadow-pulse");
      } else {
        $(this).addClass("shadow-pulse");
      }
    },

    function () {
      $(this).removeClass("shadow-pulse");
    }
  );

  $(".js--section-why").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").addClass("underline");
      } else {
        $(".about-us").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").removeClass("underline");
      }
      if (direction == "up") {
        $(".about-us").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-food").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".food").addClass("underline");
      }
      if (direction == "up") {
        $(".food").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-sleep").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".food").removeClass("underline");
        $(".sleep").addClass("underline");
      }
      if (direction == "up") {
        $(".food").addClass("underline");
        $(".sleep").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".sp-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sp-1").css("left", "0%");
      }
      if (direction == "up") {
        $(".sp-1").css("left", "-3.75%");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".sp-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sp-2").css("transform", "translate(118.25%, 0)");
        $(".sp-1").css("left", "-3.75%");
      }
      if (direction == "up") {
        $(".sp-2").css("transform", "translate(125%, 0)");
        $(".sp-1").css("left", "0%");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".sp-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sp-3").css("left", "0");
        $(".sp-2").css("transform", "translate(125%, 0)");
      }
      if (direction == "up") {
        $(".sp-3").css("left", "-3.75%");
        $(".sp-2").css("transform", "translate(118.25%, 0)");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--section-thinking").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sp-3").css("left", "0");
      }
      if (direction == "up") {
        $(".sp-3  ").css("left", "-3.75%");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--section-thinking").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sleep").removeClass("underline");
        $(".sleep-para").css("left", "-7.5%");
        $(".thinking").addClass("underline");
      }
      if (direction == "up") {
        $(".sleep").addClass("underline");
        $(".sleep-para").css("left", "0");
        $(".thinking").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-medium").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".thinking").removeClass("underline");
        $(".medium").addClass("underline");
      }
      if (direction == "up") {
        $(".thinking").addClass("underline");
        $(".medium").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--medium-support-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-1").addClass("medium-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-1").removeClass("medium-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--medium-support-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-2").addClass("medium-support-rs-hover");
        $(".js--medium-support-1").removeClass("medium-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-2").removeClass("medium-support-rs-hover");
        $(".js--medium-support-1").addClass("medium-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--medium-support-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-3").addClass("medium-support-ls-hover");
        $(".js--medium-support-2").removeClass("medium-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-3").removeClass("medium-support-ls-hover");
        $(".js--medium-support-2").addClass("medium-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--medium-support-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-4").addClass("medium-support-rs-hover");
        $(".js--medium-support-3").removeClass("medium-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-4").removeClass("medium-support-rs-hover");
        $(".js--medium-support-3").addClass("medium-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--medium-conclusion").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-conclusion").addClass("medium-conclusion-hover");
        $(".js--medium-support-4").removeClass("medium-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--medium-conclusion").removeClass("medium-conclusion-hover");
        $(".js--medium-support-4").addClass("medium-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */

  $(".mobile-nav-icon").click(function () {
    var nav = $(".nav-section");
    var icon = $(".mobile-nav-icon i");
    var isActive = nav.is(":visible");
    nav.slideToggle(200);

    if (isActive == false) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});
