'use strict'; // Created by ua.lifesheets on 15.02.2023.

module.exports = async () => {
    try {
        //#region Global
        global.fs = require('fs');
        global.path = require('path');
        global.Sequelize = require('sequelize');
        global.Op = Sequelize.Op;
        global.WixCore = {};
        //#endregion
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Nucleus"', '\n', error);
    }
};