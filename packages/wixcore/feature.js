"use strict"; // Created by ua.lifesheets on 19.02.2023.

/**
  * Завантажує системи сервера та перевіряє.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
    try {
        // Глобальний масив, що приймає системи.
        WixCore.Feature = {};
        // Ініціалізація бази даних та запуск систем.
        await WixCore.Module.MySQL.init(
            // Читання папки із системами (../features/*.js).
            fs.readdirSync(path.dirname(__dirname) + '\\features\\').forEach(feature => {
                // Змінна каталог систем для зручності.
                var catalog = path.dirname(__dirname) + '\\features\\' + feature;
                // Ігноруємо модулі, які не виконує.
                if (!WixCore.Config.Features['ignore'].includes(feature)) {
                    // Перевірка існування файлу.
                    if (fs.existsSync(catalog + "\\index.js")) {
                        // Виконати код з index.js
                        require('..\\' + '\\features\\' + feature)();
                    };
                    // Перевірка існування файлу.
                    if (fs.existsSync(catalog + "\\events.js")) {
                        // Виконати код з events.js
                        var events = require(catalog + '\\events');
                        mp.events.add(events);
                    };
                };
            })
        );
    } catch (e) {
        console.log('[ERROR] Ініціалізація "Features"', '::', e.message);
        console.log('[INFO]: Перевірте файл: wixcore/feature.js');
    }
};