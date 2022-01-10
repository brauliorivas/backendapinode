'use strict';

const { USER_TABLE } = require('./../models/user.model');
const { PRODUCT_TABLE } = require('./../models/product.model');
const { CATEGORY_TABLE } = require('./../models/category.model');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
            field: 'recovery_token',
            allowNull: true,
            type: Sequelize.DataTypes.STRING
        })
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn(USER_TABLE, 'recovery_token');
        await queryInterface.dropTable(PRODUCT_TABLE);
        await queryInterface.dropTable(CATEGORY_TABLE);
    }
};
