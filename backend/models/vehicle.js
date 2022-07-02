'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, appointment, vehicle_appointment }) {
      this.belongsTo(user, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
      this.belongsToMany(appointment, {
         through: vehicle_appointment,
         foreignKey: 'vehicle_id'
      })
    }
  }
  vehicle.init({
    vehicle_id: {
      type:  DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('sedan', 'non-sedan'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'vehicle',
    tableName: 'vehicle'
  });
  return vehicle;
};