$(document).ready(function () {

    // Creating a array for coupons
    var random_coupon = [];
    random_coupon[0] = "2WE45";
    random_coupon[1] = "T4WE5";
    random_coupon[2] = "YW738";
    random_coupon[3] = "JNCUE";
    random_coupon[4] = "EYFT3";
    random_coupon[5] = "6NU7N";

    //Focus on Page as page loads
    $("#name").focus();

    //Displaying coupon codes randomly
    var random = Math.floor(Math.random() * random_coupon.length);
    var coupon_display = $("#coupon_display").val();
    coupon_display = random_coupon[random];
    $("#coupon_display").html(coupon_display);


     // Submting form takes us back to home page 
    $("#login_form").submit(function (event) {
        var isValid = true;
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var phonepattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        var phone = $("#phone").val();

        // Validating name field
        if (name == "") {
            $("#name").next().text("Must Enter a value");
            isValid = false;
        } else {
            $("#name").next().text("");
        }

        // Storing data in session storage
        sessionStorage.setItem("name", name);

        // Validating email field
        $("#email").val(email);
        if (email == "") {
            $("#email").next().text("Must Enter a value");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must Enter a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }


        // Validating phone field
        if (phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
            isValid = false;
            $("#phone").next().text("Must Enter a Valid Phone Number");
        }

        // Prevent Default action for login button
        if (isValid == false) {
            event.preventDefault();
        }



    });

    // Clearing Text Fields on Reset
    $("#reset").click(function () {
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#name").focus();
        $('input[name="mtype"]').prop('checked', false);
        $('input[name="mduration"]').prop('checked', false);
    });


    // Using switch statement for checking wheather coupon code is vaid or not
    $("#apply").click(function (){  
    var coupon;
    var code = $("#code").val().toUpperCase();
    switch (code) {
        case random_coupon[0]:
             coupon = "Coupon Applied Successfully";
            break;
        case random_coupon[1]:
             coupon = "Coupon Applied Successfully";
            break;
        case random_coupon[2]:
             coupon = "Coupon Applied Successfully";
            break;
        case random_coupon[3]:
          coupon = "Coupon Applied Successfully";
            break;
        case random_coupon[4]:
            coupon = "Coupon Applied Successfully";
            break;
        case random_coupon[5]:
             coupon = "Coupon Applied Successfully";
            break;
        default:
            $("#code").next().text("Enter valid Coupon Code");
    }
    $("#code").next().text(coupon);
    });

});//End 
