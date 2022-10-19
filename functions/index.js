const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LpXVnSJb9zgSTqJCgPfO5C3BIBPYWwFoErk7ZWcqcKm5VxPedeQUv3V9JZV1JqeIBsyBOMDNIkpuCOW2Kj7rCfv00jh1jeDmC");

// API

 //app config
   const app = express();

// Middlewares 
  app.use(cors({ origin :true }));
  app.use(express.json());

// API Routes
  app.get("/", (request,response) => {
    response.status(200).send("Hello World!!")});

 
  app.post("/payments/create", async (request,response) => {
      const total = request.query.total;

      console.log("Payment Request Received BOOM!!! for this amount >>>>>", total); 

      const paymentIntent = await stripe.paymentIntents.create({
           amount: total, //In Subunits of the currency
           currency:"inr",
      });

      //Ok-created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
  });
// Listen Command
  exports.api = functions.https.onRequest(app);

  // Example endpoint
  // http://localhost:5001/clone-444b6/us-central1/api