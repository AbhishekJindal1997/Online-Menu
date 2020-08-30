"use strict";

$(document).ready(function () {


    var display = " ";
    var display_beverages = " ";


    //Array for images of sides
    var images_sides = [];
    images_sides[0] = "images/Chicken_wrap.jpg";
    images_sides[1] = "images/chocolava_cake.jpg";
    images_sides[2] = "images/Garlic_bread.jpg";
    images_sides[3] = "images/hot_wings.jpg";
    images_sides[4] = "images/potato_wedges.jpg";
    images_sides[5] = "images/Omlette.jpg";

    // Array for images of beverage
    var images_beverage = [];
    images_beverage[0] = "../images/root_beer.jpg";
    images_beverage[1] = "../images/iced_tea.jpg";
    images_beverage[2] = "../images/apple_juice.jpg";
    images_beverage[3] = "../images/hot_coffee.jpg";
    images_beverage[4] = "../images/cold_coffee.jpg";
    images_beverage[5] = "../images/iced_tea.jpg";

    //Array for names of sides
    var name_sides = [];
    name_sides[0] = "CHICKEN WRAP";
    name_sides[1] = "CHOCOLAVA CAKE";
    name_sides[2] = "GARLIC BREAD";
    name_sides[3] = "HOT WINGS";
    name_sides[4] = "POTATO WEDGES";
    name_sides[5] = "OMLETTE";

    // Array for names of beverage
    var name_beverage = [];
    name_beverage[0] = "A&W Root beer";
    name_beverage[1] = "Diet Coke";
    name_beverage[2] = "Apple juice";
    name_beverage[3] = "Coffee";
    name_beverage[4] = "Cold Coffee";
    name_beverage[5] = "Iced Tea";

    // Array for price of sides
    var price_sides = [];
    price_sides[0] = "$5";
    price_sides[1] = "$3";
    price_sides[2] = "$2";
    price_sides[3] = "$4";
    price_sides[4] = "$2";
    price_sides[5] = "$1";

    //Array for price of beverage
    var price_beverage = [];
    price_beverage[0] = "$3";
    price_beverage[1] = "$2";
    price_beverage[2] = "$5";
    price_beverage[3] = "$1";
    price_beverage[4] = "$3";
    price_beverage[5] = "$1";



    //Displaying images of beverage when page loads
    display_beverages = "<img src=" + images_beverage[0] + " width='85%' height='160'>" + name_beverage[0] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_beverage[0];
    $("#Root_beer").html(display_beverages);
    //Displaying images of beverage when page loads
    display_beverages = "<img src=" + images_beverage[1] + " width='85%' height='160'>" + name_beverage[1] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_beverage[1];
    $("#Diet_Coke").html(display_beverages);
    //Displaying images of beverage when page loads
    display_beverages = "<img src=" + images_beverage[2] + " width='85%' height='160'>" + name_beverage[2] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_beverage[2];
    $("#Apple_juice").html(display_beverages);
    //Displaying images of beverage when page loads
    display_beverages = "<img src=" + images_beverage[3] + " width='85%' height='160'>" + name_beverage[3] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_beverage[3];
    $("#Coffee").html(display_beverages);
    //Displaying images of beverage when page loads
    display_beverages = "<img src=" + images_beverage[4] + " width='85%' height='160'>" + name_beverage[4] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_beverage[4];
    $("#Sprite").html(display_beverages);
    //Displaying images of beverage when page loads
    display_beverages = "<img src=" + images_beverage[5] + " width='85%' height='160'>" + name_beverage[5] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_beverage[5];
    $("#iced_tea").html(display_beverages);


    // On Click function for beverage
    $("#Root_beer").click(function () {
        alert(" A&W Root beer has been added to your cart ");
        display_beverages += "<img src=" + images_beverage[0] + " width='85%' height='180'>" + "<h3 class=name>A&W Root beer</h3>" + "<p class=price>$3</p>";
        $(".cart_info .sides").html(display_beverages);
    });
    // On Click function for beverage
    $("#Diet_Coke").click(function () {
        alert(" Diet Coke has been added to your cart ");
        display_beverages += "<img src=" + images_beverage[1] + " width='85%' height='180'>" + "<h3 class=name>Diet Coke</h3>" + "<p class=price>$2</p>";
        $(".cart_info .sides").html(display_beverages);
    });
    // On Click function for beverage
    $("#Apple_juice").click(function () {
        alert(" Apple juice has been added to your cart ");
        display_beverages += "<img src=" + images_beverage[2] + " width='85%' height='180'>" + "<h3 class=name>Apple juice</h3>" + "<p class=price>$5</p>";
        $(".cart_info .sides").html(display_beverages);
    });
    // On Click function for beverage
    $("#Coffee").click(function () {
        alert(" Coffee has been added to your cart ");
        display_beverages += "<img src=" + images_beverage[3] + " width='85%' height='180'>" + "<h3 class=name>Coffee</h3>" + "<p class=price>$1</p>";
        $(".cart_info .sides").html(display_beverages);
    });
    // On Click function for beverage
    $("#Sprite").click(function () {
        alert(" Cold Coffee has been added to your cart ");
        display_beverages += "<img src=" + images_beverage[4] + " width='85%' height='180'>" + "<h3 class=name>Cold Coffee</h3>" + "<p class=price>$3</p>";
        $(".cart_info .sides").html(display_beverages);
    });
    // On Click function for beverage
    $("#iced_tea").click(function () {
        alert(" Iced Tea has been added to your cart ");
        display_beverages += "<img src=" + images_beverage[5] + " width='85%' height='180'>" + "<h3 class=name>Iced tea</h3>" + "<p class=price>$1</p>";
        $(".cart_info .sides").html(display_beverages);
    });




    // Displaying images of sides when page loads
    display = "<img src=" + images_sides[0] + " width='85%' height='160'>" + name_sides[0] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_sides[0];
    $("#chicken_wrap").html(display);
    // Displaying images of sides when page loads
    display = "<img src=" + images_sides[1] + " width='85%' height='160'>" + name_sides[1] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_sides[1];
    $("#chocolava_cake").html(display);
    // Displaying images of sides when page loads
    display = "<img src=" + images_sides[2] + " width='85%' height='160'>" + name_sides[2] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_sides[2];
    $("#garlic_bread").html(display);
    // Displaying images of sides when page loads
    display = "<img src=" + images_sides[3] + " width='85%' height='160'>" + name_sides[3] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_sides[3];
    $("#hot_wings").html(display);
    // Displaying images of sides when page loads
    display = "<img src=" + images_sides[4] + " width='85%' height='160'>" + name_sides[4] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_sides[4];
    $("#potato_wedges").html(display);
    // Displaying images of sides when page loads
    display = "<img src=" + images_sides[5] + " width='85%' height='160'>" + name_sides[5] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + price_sides[5];
    $("#omlette").html(display);

    // Clearing the display string 
    display = "";
    display_beverages = "";

    // On Click function for SIDES
    $("#chicken_wrap").click(function () {
        alert(" Chicken Wrap has been added to your cart ");
        display += "<img src=" + images_sides[0] + " width='85%' height='180'>" + "<h3 class=name>Chicken Wrap</h3>" + "<p class=price>$5</p>";
        $(".cart_info .sides").html(display);
    });
    // On Click function for SIDES
    $("#chocolava_cake").click(function () {
        alert(" Chocolava cake has been added to your cart ");
        var cart_info = $(".cart_info").html();
        display += "<img src=" + images_sides[1] + " width='85%' height='180'>" + "<h3 class=name>Chocolava Cake</h3>" + "<p class=price>$3</p>";
        $(".cart_info .sides").html(display);
    });
    // On Click function for SIDES
    $("#garlic_bread").click(function () {
        alert(" Garlic Bread has been added to your cart ");
        display += "<img src=" + images_sides[2] + " width='85%' height='180'>" + "<h3 class=name>Garlic Bread</h3>" + "<p class=price>$2</p>";
        $(".cart_info .sides").html(display);
    });
    // On Click function for SIDES
    $("#hot_wings").click(function () {
        alert("Hot wings has been added to your cart ");
        display += "<img src=" + images_sides[3] + " width='85%' height='180'>" + "<h3 class=name>Hot Wings</h3>" + "<p class=price>$4</p>";
        $(".cart_info .sides").html(display);
    });
    // On Click function for SIDES
    $("#potato_wedges").click(function () {
        alert(" Potato Wedges has been added to your cart ");
        display += "<img src=" + images_sides[4] + " width='85%' height='180'>" + "<h3 class=name>Potato Wedges</h3>" + "<p class=price>$2</p>";
        $(".cart_info .sides").html(display);
        //        var total_val_cal = [$(".price").text()];
        //        $("#total_value").html(total_val_cal);
        //        console.log(total_val_cal);
    });

    $("#omlette").click(function () {
        alert(" Omlette has been added to your cart ");
        display += "<img src=" + images_sides[5] + " width='85%' height='180'>" + "<h3 class=name>Omlette</h3>" + "<p class=price>$1</p>";
        $(".cart_info .sides").html(display);
    });


    // Banner image bx-slider
    $("#body_top").bxSlider({
        auto: true,
        autoControls: true,
        pager: true,
        slideWidth: 0,
        captions: true,
        randomStart: true,
        mode: 'fade',
        pause: 3000
    });


    // Passing the data thorugh JSON file
    // on click of BURGERS
    $("#cb").click(function () {
        $(this).data("clicked", true);
        if ($("#cb").data("clicked") == true) {
            alert($(".left").html() + " has been added to your cart ");
            $.getJSON("burgers.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $(".cart_info").append(
                            "<img src=" + value.image + ">" +
                            "<h3 id=name>" + value.title + "</h3>" +
                            "<p id=price>" + value.price + "</p>"

                        );
                    });
                });
            });
        };
    });
    // Passing the data thorugh JSON file
    // on click of BURGERS
    $("#mb").click(function (event) {
        $(this).data("clicked", true);
        if ($("#mb").data("clicked") == true) {
            alert($("#mb .left").html() + " has been added to your cart ");
            $.getJSON("Burger2.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $(".cart_info").append(
                            "<img src=" + value.image + ">" +
                            "<h3 id=name>" + value.title + "</h3>" +
                            "<p id=price>" + value.price + "</p>"
                        );
                    });
                });
            });
        }

    });
    // Passing the data thorugh JSON file
    // on click of BURGERS
    $("#vg").click(function () {
        $(this).data("clicked", true);
        if ($("#vg").data("clicked") == true) {
            alert($("#vg .left").html() + " has been added to your cart ");
            $.getJSON("Burger3.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $(".cart_info").append(
                            "<img src=" + value.image + ">" +
                            "<h3 id=name>" + value.title + "</h3>" +
                            "<p id=price>" + value.price + "</p>"
                        );
                    });
                });
            });
        }

    });
    // Passing the data thorugh JSON file
    // on click of BURGERS
    $("#bb").click(function () {
        $(this).data("clicked", true);
        if ($("#bb").data("clicked") == true) {
            alert($("#bb .left").html() + " has been added to your cart ");
            $.getJSON("Burger4.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $(".cart_info").append(
                            "<img src=" + value.image + ">" +
                            "<h3 id=name>" + value.title + "</h3>" +
                            "<p id=price>" + value.price + "</p>"
                        );
                    });
                });
            });
        }

    });
    // Passing the data thorugh JSON file
    // on click of BURGERS
    $("#cc").click(function () {
        $(this).data("clicked", true);
        if ($("#cc").data("clicked") == true) {
            alert($("#cc .left").html() + " has been added to your cart ");
            $.getJSON("Burger5.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $(".cart_info").append(
                            "<img src=" + value.image + ">" +
                            "<h3 id=name>" + value.title + "</h3>" +
                            "<p id=price>" + value.price + "</p>"
                        );
                    });
                });
            });
        }

    });
    // Passing the data thorugh JSON file
    // on click of BURGERS
    $("#sc").click(function () {
        $(this).data("clicked", true);
        if ($("#sc").data("clicked") == true) {
            alert($("#sc .left").html() + " has been added to your cart ");
            $.getJSON("Burger6.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $(".cart_info").append(
                            "<img src=" + value.image + ">" +
                            "<h3 id=name>" + value.title + "</h3>" +
                            "<p id=price>" + value.price + "</p>"
                        );
                    });
                });
            });
        }

    });
    
    // Function for displaying time
    function displaytime() {
        var date = new Date();
        var date_hour = date.getHours();
        var date_minute = date.getMinutes();
        var date_seconds = date.getSeconds();
        if (date_hour > 12) {
            date_hour = date_hour - 12;
            $("#hours").html(single_digit(date_hour));
            $("#ampm").html("PM");
        } else if (date_hour < !12) {
            $("#hours").html(single_digit(date_hour));
            $("#ampm").html("AM");
        }
        $("#minutes").html(single_digit(date_minute));
        $("#seconds").html(single_digit(date_seconds));
    }

    function single_digit(num) {
        if (num < 12) {
            return "0" + num;
        } else {
            return num;
        }
    }

    displaytime();
    setInterval(displaytime, 1000);

    //getting session storage
    $(".user_name_display").html(sessionStorage.getItem("name"));


    // Displaying Tabs Ui
    $(function () {
        $("#tabs").tabs();
    });









});
