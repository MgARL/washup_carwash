'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('appointment', {
      appointment_id: {
        type:  DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'user',
          key: 'user_id'
        }
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      time: {
        type: DataTypes.TIME,
      allowNull: false
    },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('appointment');
  }
};