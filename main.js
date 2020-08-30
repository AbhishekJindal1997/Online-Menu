"use strict";

$(document).ready(function () {
  // Banner image bx-slider
  $("#body_top").bxSlider({
    auto: true,
    autoControls: true,
    pager: true,
    slideWidth: 0,
    captions: true,
    randomStart: true,
    mode: "fade",
    pause: 3000,
  });

  //Top Restaurants bx-slider
  //    $("#restaurants").bxSlider({
  //        slideWidth: 00,
  //        mode:'horizontal',
  //         pager: true,
  //    });
  //

  //Displaying message when user clicks any food item
  //
  //    $("#cb").each(function () {
  //        console.log ($(this).html());
  ////        alert($(this).html()[1] + "has beeen added");
  //
  //     });

  $("#cb").click(function () {
    $(this).data("clicked", true);

    if ($("#cb").data("clicked") == true) {
      //            let burgers = document.querySelectorAll(".content");
      //            console.log(burgers);
      //        Object.entries(burgers).map(Object){console.log(Object)};
      //         alert (burgers + " Has been added to cart");
      //        var p = $(".left").text();

      //            var isValid = true;
      //            // Assigning value of food items to variables
      //            var Item_name = $(".left").text();
      //            var Item_price = parseFloat($(".right").text());
      //
      //            console.log(Item_name);
      //            // Array of food item
      //            var food_info = [];
      //            food_info[0] = Item_name;
      //            food_info[1] = Item_price;
      //
      //
      //
      //            if (isValid) {
      //                // saving info of food item that is clicked
      //                sessionStorage.cart = "";
      //
      //                for (var i in food_info) {
      //                    sessionStorage.cart = sessionStorage.cart + i + "=" + food_info[i] + "|";
      //                }
      //                sessionStorage.cart = sessionStorage.cart.substr(0, sessionStorage.cart.length - 1);
      //            }

      alert($(".left").html() + " has been added to your cart ");

      $.getJSON("burgers.json", function (data) {
        $.each(data, function () {
          $.each(this, function (key, value) {
            $(".cart_info").append(
              "<img src=" +
                value.image +
                ">" +
                "<h3>" +
                value.title +
                "</h3>" +
                "<h3>" +
                value.price +
                "</h3>"
            );
          });
        });
      });
    }
  });

  $("#mb").click(function (event) {
    $(this).data("clicked", true);
    if ($("#mb").data("clicked") == true) {
      alert($("#mb .left").html() + " has been added to your cart ");

      $.getJSON("burgers.json", function (data) {
        $.each(data, function () {
          $.each(this, function (key, value) {
            $(".cart_info").append(
              "<img src=" +
                value.image +
                ">" +
                "<h3>" +
                value.title +
                "</h3>" +
                "<h3>" +
                value.price +
                "</h3>"
            );
          });
        });
      });

      //            var html = "";
      //            for (var i in this.tasks) {
      //
      //                html = html.concat("<div>");
      //                html = html.concat("<span>");
      //                html = html.concat(this.tasks[i]);
      //                html = html.concat("</span>");
      //                html = html.concat("<p>");
      //                html = html.concat(this.tasks[i].toString());
      //                html = html.concat("<a href='#' title='", i,
      //                    "'>Delete</a>");
      //                html = html.concat("</p>");
      //                html = html.concat("</div>");
      //                $("div#tasks").html(html);
      //
      //            }
    }
  });

  $("#vg").click(function () {
    $(this).data("clicked", true);
    if ($("#vg").data("clicked") == true) {
      alert($("#vg .left").html() + " has been added to your cart ");
    }
  });

  $("#bb").click(function () {
    $(this).data("clicked", true);
    if ($("#bb").data("clicked") == true) {
      //            $("#bb").each(function () {
      alert($("#bb .left").html() + " has been added to your cart ");
      //            });
    }
  });

  $("#cc").click(function () {
    $(this).data("clicked", true);
    if ($("#cc").data("clicked") == true) {
      alert($("#cc .left").html() + " has been added to your cart ");
    }
  });

  $("#sc").click(function () {
    $(this).data("clicked", true);
    if ($("#sc").data("clicked") == true) {
      alert($("#sc .left").html() + " has been added to your cart ");
    }
  });

  $("#cart").click(function () {
    location.href = "cart.html";
  });
});
