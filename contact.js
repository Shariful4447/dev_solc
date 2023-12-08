  function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_rrizwuc";
  const templateID = "template_a9vqhye";

    emailjs.send(serviceID, templateID, params).then(alert("Your message sent successfully!!"))
    

}