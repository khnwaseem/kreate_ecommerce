const mongoose = require('mongoose');

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        "",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
