'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service_appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  service_appointment.init({
    id: {
      type:  DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    service_id: {
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
    modelName: 'service_appointment',
    tableName: 'service_appointment'
  });
  return service_appointment;
};