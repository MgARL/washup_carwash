'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('vehicle_appointment', {
      id:  {
        type:  DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      vehicle_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'vehicle',
          key: 'vehicle_id'
        }
      },
      appointment_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'appointment',
          key: 'appointment_id'
        }
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('vehicle_appointment');
  }
};