const stripe = require("stripe")("sk_test_R3xTlYAL3e77UMVi69WZD6CV00NeHku9IJ");

const HEADERS = {
	  "Access-Control-Allow-Origin": "*",
	  "Access-Control-Allow-Headers": "Content-Type"
};

//const { stripe_sk, email, password} = process.env;
const products = {
  {name:"", price:""}
  {name:"", price:""}
};

export function handler(event, context, callback) {
  // Only allow POST
  if(event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
  }

	console.log(event.body);
  //console.log(JSON.parse(event.body))
  let json = JSON.parse(event.body);


	let amount = 1000;
  stripe.charges.create({
    amount,
    description: "What the fuck",
    currency: "usd",
    source: json.token
  });

  return {
    statusCode: 200,
    body:JSON.stringify({stat:"worked"})
  };

  /*
  callback(null, {
    statusCode: 200,
    body:JSON.stringify({stat:"worked", charge:"charge was made"})
  });
  OR
  return {
    statusCode: 200,
    body: "Hello, World"
  };
   */

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

}

