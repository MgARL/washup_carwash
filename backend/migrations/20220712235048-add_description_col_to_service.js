"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.addColumn("service", "description", {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    });
  },

  async down(queryInterface, DataTypes) {
    return queryInterface.removeColumn("service", "description");
  },
};
