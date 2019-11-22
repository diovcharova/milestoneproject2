$(document).ready(function() {
  $(this).scrollTop(0);


})

function sendMail(contactForm) {
  emailjs.send("gmail", "health_helper", {
      "subject": contactForm.subject.value,
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
      },
      function(error) {
        console.log("FAILED", error);
      });
  return false;
}
