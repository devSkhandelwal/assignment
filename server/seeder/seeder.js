const mongoose = require("mongoose");
const Locations = require("../models/Location");
const fs = require("fs");

exports.insertData = async () => {
  try {
    // const data = JSON.parse(fs.readFileSync("locations.json", "utf-8"));
    // console.log(data)
    await Locations.create([
      {
        countryName: "India",
        states: [
          {
            name: "Rajasthan",
            cities: [
              {
                name: "Alwar",
              },
              {
                name: "Ajmer",
              },
              {
                name: "Jaipur",
              },
              {
                name: "Kota",
              },
              {
                name: "Bikaner",
              },
            ],
          },
          {
            name: "Haryana",
            cities: [
              {
                name: "Gurugram",
              },
              {
                name: "Karnal",
              },
              {
                name: "Ambala",
              },
              {
                name: "Faridabad",
              },
              {
                name: "Rohtak",
              },
            ],
          },
        ],
      },
      {
        countryName: "Afghanistan",
        states: [
          {
            name: "Balkh",
            cities: [
              {
                name: "Balkh",
              },
              {
                name: "Khulm",
              },
            ],
          },
        ],
      },
    ]);
  } catch (error) {
    console.log("error", error);
  }
};

