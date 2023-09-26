const { default: mongoose } = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    states: [
      {
        name: {
          type: String,
        },
        cities: [
          {
            name: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Locations = mongoose.model("location", locationSchema);

module.exports = Locations;
