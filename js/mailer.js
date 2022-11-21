const form = document.getElementById("rsvpForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("rsvpFormName").value,
    number = document.getElementById("rsvpFormNumber").value,
    events = document.getElementById("rsvpFormEvents").value,
    quantity = document.getElementById("rsvpFormQuantity").value,
    mailBody = document.getElementById("rsvpFormMessage").value;

  var params = {
    name,
    number,
    quantity,
    events,
    mailBody,
  };

  emailjs.send("service_f95vqrh", "template_htjya3e", params).then((res) => {
    if (res.status == 200) {
      alert("Mensaje enviado!")
      document.getElementById("rsvpFormName").value = "";
      document.getElementById("rsvpFormNumber").value = "";
      document.getElementById("rsvpFormEvents").value = "";
      document.getElementById("rsvpFormQuantity").value = "";
      document.getElementById("rsvpFormMessage").value = "";
    } else {
      alert('Error, intente nuevamente.')
    }
  });
});
