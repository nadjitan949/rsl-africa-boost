const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db.connection");

const Galery = sequelize.define("Galery",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
        media: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.ENUM('image', 'video'), allowNull: false }
    },
    {
        tableName: "galeries",
        timestamps: true,
    }
)

module.exports = Galery