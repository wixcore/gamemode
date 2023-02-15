"use strict"; // Created by ua.lifesheets on 25.12.2022.

const Sequelize = require('sequelize');

module.exports = async () => {
    var sequelize = null;
    WixCore.Models = {};

    function dbConnect() {
        sequelize = new Sequelize(configs.sequelize.connect[2], configs.sequelize.connect[3], configs.sequelize.connect[4], {
            host: configs.sequelize.connect[0],
            dialect: 'mysql',
            port: configs.sequelize.connect[1] || 3306,
            logging: configs.sequelize.logging,
            pool: {
                max: configs.sequelize.pool[0],
                min: configs.sequelize.pool[1],
                acquire: configs.sequelize.pool[2],
                idle: configs.sequelize.pool[3]
            },
            dialectOptions: {
                connectTimeout: configs.sequelize.connectTimeout
            },
            define: {
                timestamps: configs.sequelize.timestamps
            }
        });
        // this.loadModels();
    }




}
