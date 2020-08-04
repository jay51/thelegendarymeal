const stripe = require("stripe")(process.env.SECRET_KEY);
import { items as products  } from "../static/items";
//const { stripe_sk, email, password} = process.env;


export function handler(event, context, callback) {
  console.log(event.body);

  try {

    let { items, token, userData } = JSON.parse(event.body);
    // Don't use the items comming from the user, filter by items on server
    let itemsToBuy = products.filter(item => items.find(prod => prod.id === item.id));
    // TODO: find the price for the items
    let amount = itemsToBuy.reduce((i, item) => i + item.price, 0);

    stripe.charges
      .create({
        amount,
        description: userData.fName + ": " + userData.email + ": " + userData.phone,
        currency: "usd",
        source: token
      })
      .then(res => {
        // console.log(res);
        console.log("it worked");
      });

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: "secusses", error: null })
    });
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ status: "failure", error: "invalid json object" })
    });
  }
}