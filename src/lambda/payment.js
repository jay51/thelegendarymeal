const stripe = require("stripe")(process.env.SECRET_KEY);
//const { stripe_sk, email, password} = process.env;

const products = [
  {
      id: 1,
      title: "Winter body",
      dprice: 110,
      quantity: 0,
      price: 1000 // 10.00$
  },
  {
      id: 2,
      title: "Adidas",
      dprice: 80,
      quantity: 0,
      price: 900 // 9.00$
  },
  {
      id: 3,
      title: "Vans",
      dprice: 120,
      quantity: 0,
      price: 1020 // 10.20$
  },
  {
      id: 4,
      title: "White",
      dprice: 260,
      quantity: 0,
      price: 1020 // 10.20$
  },
  {
      id: 5,
      title: "Cropped-sho",
      dprice: 160,
      quantity: 0,
      price: 1260 // 12.60$
  },
  {
      id: 6,
      title: "Blues",
      dprice: 90,
      quantity: 0,
      price: 1060 // 10.60
  }
];

export function handler(event, context, callback) {
  console.log("-------------------------------------");
  console.log(event.body);

  try {
    let { items, token, userData } = JSON.parse(event.body);
    let itemsToBuy = products.filter(item => items.find(prod => prod.id === item.id));
    let amount = itemsToBuy.reduce((i, item) => i + item.price, 0);

    console.log(itemsToBuy);
    console.log(amount);

    stripe.charges
      .create({
        amount,
        description: userData.fName + ": " + userData.email + ": " + userData.phone,
        currency: "usd",
        source: token
      })
      .then(res => {
        // console.log("-------------------------------------", res);
      });

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: "secusses", error: null })
    });

  } catch (e) {
    console.log(e);
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ status: "failure", error: "invalid json object" })
    });
  }
}