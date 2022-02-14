window.onload = function() {
  document.querySelector(".to-do").addEventListener("submit", function(event) {
    event.preventDefault();

    let formParams = document.querySelector('.to-do');

    emailjs.sendForm("valentines_form", "valentines_template", formParams)
      .then(function() {
        console.log("SUCCESS!");
        formParams.reset(); 
      }, function(error) {
        console.log("FAILED...", error); 
      });
  });
}
