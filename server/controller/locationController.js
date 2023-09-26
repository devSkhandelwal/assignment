const Locations = require("../models/Location");

exports.getLocations = async (req, res, next) => {
  const locations = await Locations.find({});
  if (!locations && locations.length === 0) {
    return res.status(200).json({
      status: false,
      message: "No  locations added yet",
      locations: [],
    });
  }

  res.status(200).json({
    status: true,
    locations,
  });
};
