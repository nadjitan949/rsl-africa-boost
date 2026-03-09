const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db.connection");

const User = sequelize.define("User",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true,  },
        firstname: { type: DataTypes.STRING,  },
        lastname: { type: DataTypes.STRING,  },
        email: { type: DataTypes.STRING, unique: true },
        phone: { type: DataTypes.STRING, unique: true },
        type: { type: DataTypes.ENUM('participant', 'gest', 'honorary'), defaultValue: 'participant',  },
        title: { type: DataTypes.STRING, },
        organization: { type: DataTypes.STRING },
        city: { type: DataTypes.STRING,  },
        state: { type: DataTypes.STRING,  },
        region: { type: DataTypes.STRING,  },
        postalCode: { type: DataTypes.STRING,  },
        roomCat: { type: DataTypes.STRING,  },
        startDate: { type: DataTypes.DATEONLY,  },
        endDate: { type: DataTypes.DATEONLY,  },
        duration: { type: DataTypes.INTEGER,  },
        roomType: { type: DataTypes.STRING,  },
        roomNumber: { type: DataTypes.STRING,  },
        aireline: { type: DataTypes.STRING,  },
        flightRef: { type: DataTypes.STRING,  },
        arrivalDate: { type: DataTypes.DATE,  },
        password: { type: DataTypes.STRING,  }
    },
    {
        tableName: "users",
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['email']
            },
            {
                unique: true,
                fields: ['phone']
            }
        ]
    }
)

module.exports = User