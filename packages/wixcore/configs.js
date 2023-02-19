"use strict";

/**
  * Завантажує файли конфігурації сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
    try {
        // Глобальний масив, що приймає конфігурацію.
        WixCore.Config = {};
        // Запуск систем на серверній та клієнтській частині.
        WixCore.Config.Features = require('../configs/features');   

        WixCore.Config.Variable = require('../configs/variables');
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Configs"', '\n', error);
    }
};
