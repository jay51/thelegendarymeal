const stripe = require("stripe")("sk_test_R3xTlYAL3e77UMVi69WZD6CV00NeHku9IJ");

//const { stripe_sk, email, password} = process.env;
const products = [
  {
    id: 1,
    title: "Winter body",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 110
  },
  {
    id: 2,
    title: "Adidas",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 80
  },
  {
    id: 3,
    title: "Vans",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 120
  },
  {
    id: 4,
    title: "White",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 260
  },
  {
    id: 5,
    title: "Cropped-sho",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 160
  },
  {
    id: 6,
    title: "Blues",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 90
  }
];

export function handler(event, context, callback) {
  console.log(event.body);

  try {
    let { items, token } = JSON.parse(event.body);

    let itemsToBuy = items.filter(item => {
      return item.id === products.find(prod => prod.id === item.id).id;
    });

    let amount = 1000;
    stripe.charges
      .create({
        amount,
        description: "We're back and working",
        currency: "usd",
        source: token
      })
      .then(res => {
        console.log(res);
      });

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: "secusses", error: null })
    });
  } catch (e) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: "failure", error: "invalid json object" })
    });
  }
}

/*
callback(null, {
  statusCode: 200,
  body:JSON.stringify({stat:"worked", charge:"charge was made"})
});


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
