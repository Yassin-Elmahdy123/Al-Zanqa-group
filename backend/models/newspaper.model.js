const mongoose = require("mongoose");

const newnewspaperSchema = new mongoose.Schema(
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
    },
  },
  {
    timestamps: true,
  }
);

const Newspaper = mongoose.model("Newspaper", newspaperSchema);

module.exports = Newnewspaper;
