const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db.connection");

const User = sequelize.define("User",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true, allowNull: false },
        firstname: { type: DataTypes.STRING, allowNull: false },
        lastname: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        type: { type: DataTypes.ENUM('participant', 'gest', 'honorary'), defaultValue: 'participant', allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    },
    {
        tableName: "users",
        timestamps: true
    }
)

module.exports = User