'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //
    }
  }
  vehicle_appointment.init({
    id:  {
      type:  DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    vehicle_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    appointment_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false, 
    modelName: 'vehicle_appointment',
    tableName: 'vehicle_appointment'
  });
  return vehicle_appointment;
};