const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db.connection");

const Hotel = sequelize.define('Hotel', 
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        area: { type: DataTypes.STRING, allowNull: false },
        stars: { type: DataTypes.STRING, allowNull: false },
    },
    {
        tableName: "hotels",
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name']
            }
        ]
    }
)

module.exports = Hotel