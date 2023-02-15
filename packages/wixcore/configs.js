'use strict'; // Created by ua.lifesheets on 15.02.2023.

WixCore.Config = {};

module.exports = async () => {
    try {
        WixCore.Config.Variable = require('../configs/variables');
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Configs"', '\n', error);
    }
};
