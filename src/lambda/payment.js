const stripe = require("stripe")("sk_test_R3xTlYAL3e77UMVi69WZD6CV00NeHku9IJ");

//const { stripe_sk, email, password} = process.env;
const products = [
  {
    id: 1,
    title: "Winter body",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 1000 // 10.00$
  },
  {
    id: 2,
    title: "Adidas",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 900 // 9.00$
  },
  {
    id: 3,
    title: "Vans",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 1020 // 10.20$
  },
  {
    id: 4,
    title: "White",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 1260 // 12.60$
  },
  {
    id: 5,
    title: "Cropped-sho",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 1060 // 10.60
  },
  {
    id: 6,
    title: "Blues",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 900 // 9.00$
  }
];

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

/*
let amount = 1000;
stripe.customers.create({
  email: "example@gmail.com",//event.body.stripeEmail,
  source: token
})
.then(customer =>
  stripe.charges.create({
  amount,
  description: "Sample Charge",
  currency: "usd",
  customer: customer.id
}))
.then(charge => {
  callback(null, {
    statusCode: 200,
    HEADERS,
    body: "it's working"
  });

})
.catch(err => {
  callback(null, {
    statusCode: 200,
    body: "ERROR: " + `<p> ${event.body} </p> <br>` +
    JSON.stringify(err)
  });
});
*/
