import { sendEmail } from "./email_utils";

export async function handler(event, context) {

    if (event.httpMethod === "POST") {

        const user = JSON.parse(event.body);
        console.log(user);
        const userCrid = {
            senderEmail: process.env.senderEmail,
            senderPass: process.env.senderPass,
            recipientEmail: process.env.recipientEmail
        };

        let html = "";
        html += `<div>name: ${user.username}</div>`;
        html += `<div>email: ${user.email}</div>`;
        html += `<div>phone: ${user.phone}</div>`;
        html += "<br/>"
        html += `<div>message: <br/> ${user.msg}</div>`;

        const email = {
            from: user.email,
            subject: `${user.username} Wants to contact you!`,
            text: "Hello The Legendary Meal👻",
            html: html
        }

        sendEmail(userCrid, email)
        .catch(console.log);

        return {

            statusCode: 200,
            body: JSON.stringify({ status: "success" })
        }
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ status: "Method Not Allowed" })
    }
}
