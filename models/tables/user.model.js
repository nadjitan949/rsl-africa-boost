const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db.connection");

const User = sequelize.define("User",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true, allowNull: false },
        firstname: { type: DataTypes.STRING, allowNull: false },
        lastname: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        phone: { type: DataTypes.STRING, allowNull: false, unique: true },
        type: { type: DataTypes.ENUM('participant', 'gest', 'honorary'), defaultValue: 'participant', allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false},
        organization: { type: DataTypes.STRING },
        city: { type: DataTypes.STRING, allowNull: false },
        state: { type: DataTypes.STRING, allowNull: false },
        region: { type: DataTypes.STRING, allowNull: false },
        postalCode: { type: DataTypes.STRING, allowNull: false },
        roomCat: { type: DataTypes.STRING, allowNull: false },
        startDate: { type: DataTypes.DATEONLY, allowNull: false },
        endDate: { type: DataTypes.DATEONLY, allowNull: false },
        duration: { type: DataTypes.INTEGER, allowNull: false },
        roomType: { type: DataTypes.STRING, allowNull: false },
        roomNumber: { type: DataTypes.STRING, allowNull: false },
        aireline: { type: DataTypes.STRING, allowNull: false },
        flightRef: { type: DataTypes.STRING, allowNull: false },
        arrivalDate: { type: DataTypes.DATE, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    },
    {
        tableName: "users",
        timestamps: true
    }
)

module.exports = User