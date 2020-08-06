const nodemailer = require("nodemailer");

export const sendEmail = async (userCrid, email) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: userCrid.senderEmail,
      pass: userCrid.senderPass,
    },
  });

  let info = await transporter.sendMail({
    from: `${email.from} <${userCrid.senderEmail}>`, // sender address
    to: userCrid.recipientEmail, // list of receivers
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  console.log("Message sent: %s", info.messageId);
}


export const getProductsInfo = (items, total) => {
    let html = "";
    items.forEach((item, num) => {
        html += `----------PRODUCT ${num}----------`;
        html += `<div>Food Name: ${item.title}</div>`;
        html += `<div>Price: ${item.dprice}</div>`;
        html += `<div>Quantity: ${item.quantity}</div>`;
        html += `<br/>`;
    });

    html += `<br/>`;
    html += `<br/>`;
    html += `<div>Total Price: $${total}</div>`;
    return html
}
