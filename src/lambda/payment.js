const stripe = require("stripe")("sk_test_R3xTlYAL3e77UMVi69WZD6CV00NeHku9IJ");
//const stripe = require("stripe")("sk_test_R3xTlYAL3e77UMVi69WZD6CV00NeHku9IJ");
const HEADERS = {
	  "Access-Control-Allow-Origin": "*",
	  "Access-Control-Allow-Headers": "Content-Type"
};

export function handler(event, context, callback) {
	console.log("function called");
	console.log(event.body);
  console.log('queryStringParameters', event.queryStringParameters)


	try {
		data = JSON.parse(event.body);
		token = data.token
		console.log(token);
	}catch (err) {
		console.log("it's not a json object");
		token = "";
	}

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

}





  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })
}
