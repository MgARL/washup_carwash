'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, service, vehicle, service_appointment, vehicle_appointment}) {
      this.belongsTo(user,{ 
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
      this.belongsToMany(service,{
        through: service_appointment,
        foreignKey: 'appointment_id'
      })
      this.belongsToMany(vehicle,{
        through: vehicle_appointment,
        foreignKey: 'appointment_id'
      })
    }
  }
  appointment.init({
    appointment_id: {
      type:  DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'appointment',
    tableName: 'appointment'
  });
  return appointment;
};