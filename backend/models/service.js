'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ appointment, service_appointment }) {
      this.belongsToMany(appointment, {
        through: service_appointment,
        foreignKey: 'service_id'
      })
    }
  }
  service.init({
    service_id: {
      type:  DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    service_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    service_duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'service',
    tableName: 'service'
  });
  return service;
};