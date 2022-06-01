const mongoose = require('mongoose');

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        "mongodb+srv://khanwaseem:Waseem$111@cluster0.fcxohmn.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
