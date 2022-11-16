const form = document.getElementById("rsvpForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Token = "7c0f7481-a3de-4e09-a058-44fd8d1e1566",
    MailFrom = "bttierradelsur@gmail.com",
    MailTo = "ezequielcolungaacha@gmail.com",
    name = document.getElementById("rsvpFormName"),
    number = document.getElementById("rsvpFormNumber"),
    events = document.getElementById("rsvpFormEvents"),
    quantity = document.getElementById("rsvpFormQuantity"),
    message = document.getElementById("rsvpFormMessage");

  const mailBody = `Nombre: ${name.value}
  Número de celular: ${number.value}
  Cantidad de invitados: ${quantity.value}
  A qué eventos voy/vamos: ${events.value}
  Mensaje: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: MailFrom,
    Password: Token,
    To: MailTo,
    From: MailFrom,
    Subject: "Invitación al casamiento",
    Body: mailBody,
  }).then((message) => alert(message));
});
