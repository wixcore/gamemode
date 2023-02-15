'use strict'; // Created by ua.lifesheets on 15.02.2023.

module.exports = async () => {
    try {
        WixCore.MySql = require('../classes/mysql');
        await WixCore.MySql.Connect()
        // Todo
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Classes"', '\n', error);
    }
};