'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('service_appointment', {
      id: {
        type:  DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      service_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'service',
          key: 'service_id'
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
    await queryInterface.dropTable('service_appointment');
  }
};