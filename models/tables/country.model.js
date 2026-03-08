const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db.connection");

const Country = sequelize.define("Country",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        flag: { type: DataTypes.STRING, allowNull: false }
    },
    {
        tableName: "countries",
        timestamps: true
    }
)

module.exports = Country