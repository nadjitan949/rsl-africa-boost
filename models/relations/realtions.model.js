const Country = require("../tables/country.model");
const Hotel = require("../tables/hotel.model");
const User = require("../tables/user.model");

Country.hasMany(Hotel, { foreignKey: "countryId", as: "hotels" })
Hotel.belongsTo(Country, { foreignKey: "countryId", as: "country" })

Country.hasMany(User, { foreignKey: "countryId", as: "delegation" })
User.belongsTo(Country, { foreignKey: "countryId", as: "country" })

module.exports = { Country, User, Hotel }