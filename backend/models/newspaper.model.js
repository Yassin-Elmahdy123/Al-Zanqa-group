const mongoose = require("mongoose");

const newspaperSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

// IMPORTANT: use the schema you created
const Newspaper = mongoose.model("Newspaper", newspaperSchema);

module.exports = Newspaper;
