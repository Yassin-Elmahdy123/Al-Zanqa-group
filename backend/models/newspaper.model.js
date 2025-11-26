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
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Newnewspaper = mongoose.model("Newspaper", newnewspaperSchema);

module.exports = Newnewspaper;
