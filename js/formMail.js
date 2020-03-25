// Contact me block function
$("#sendMail").on("click", function() {
  var name = $("#name")
    .val()
    .trim();
  var phone = $("#phone")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();
  var message = $("#message")
    .val()
    .trim();

  if (name == "") {
    alert("Please, write your name!");
    return false;
  } else if (phone == "") {
    alert("Please, write your contact number!");
    return false;
  } else if (email == "") {
    alert("Please, write your e-mail adress!");
    return false;
  } else if (message == "") {
    alert("Please, write your message!");
    return false;
  }


  $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: { 'name': name, 'phone': phone, 'email': email, 'message': message },
    dataType: 'html',
    beforeSend: function() {
      $("sendMail").prop("disabled", true);
    },
    success: function(data) {
      if(!data) {
          alert("Something wrong with internet connection! Please, try again!")
      }
      else {
        $("mailForm").trigger("reset");
        alert("Thanks for the application! we will contact you soon!");
      }
      $("sendMail").prop("disabled", false);
    }
  });
});

