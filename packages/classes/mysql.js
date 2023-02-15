
"use strict"; // Created by ua.lifesheets on 15.02.2023.

const { Sequelize } = require('sequelize');
let db = null
let Models = {}

class MySql {
    static TypeMode() {
        var connect = '';
        var logging = '';
        var pool = '';
        var connectTimeout = '';
        var timestamps = '';

        if (WixCore.Config.Variable['TypeMode'] === 'Development') {
            connect = WixCore.Config.Variable['MySQL Connect'].Development.Connect;
            logging = WixCore.Config.Variable['MySQL Connect'].Development.Logging;
            pool = WixCore.Config.Variable['MySQL Connect'].Development.Pool;
            connectTimeout = WixCore.Config.Variable['MySQL Connect'].Development.ConnectTimeout;
            timestamps = WixCore.Config.Variable['MySQL Connect'].Development.TimeStamps;
        }
        if (WixCore.Config.Variable['TypeMode'] === 'Testing') {
            connect = WixCore.Config.Variable['MySQL Connect'].Testing.Connect;
            logging = WixCore.Config.Variable['MySQL Connect'].Testing.Logging;
            pool = WixCore.Config.Variable['MySQL Connect'].Testing.Pool;
            connectTimeout = WixCore.Config.Variable['MySQL Connect'].Testing.ConnectTimeout;
            timestamps = WixCore.Config.Variable['MySQL Connect'].Testing.TimeStamps;
        }
        if (WixCore.Config.Variable['TypeMode'] === 'Production') {
            connect = WixCore.Config.Variable['MySQL Connect'].Production.Connect;
            logging = WixCore.Config.Variable['MySQL Connect'].Production.Logging;
            pool = WixCore.Config.Variable['MySQL Connect'].Production.Pool;
            connectTimeout = WixCore.Config.Variable['MySQL Connect'].Production.ConnectTimeout;
            timestamps = WixCore.Config.Variable['MySQL Connect'].Production.TimeStamps;
        }
        return { connect, logging, pool, connectTimeout, timestamps };
    }

    static Connect() {
        var data = this.TypeMode();

        db = new Sequelize(data.connect[2], data.connect[3], data.connect[4], {
            host: data.connect[0],
            dialect: WixCore.Config.Variable['database'],
            port: data.connect[1] || 3306,
            logging: data.logging,
            pool: {
                max: data.pool[0],
                min: data.pool[1],
                acquire: data.pool[2],
                idle: data.pool[3]
            },
            dialectOptions: {
                connectTimeout: data.connectTimeout
            },
            define: {
                timestamps: data.timestamps
            }
        });
        this.LoadModels();
    }

    static LoadModels() {
        db.authenticate().then(() => {
            // Обробка моделей та демо даних.
            console.log('[INFO]: Вдалося підключитися до бази даних.');
        }).catch((error) => {
            console.log('[STOP]: Не вдалося підключитися до бази даних:');
            console.log('[INFO]: Перевірте файл: wixcore/configs/variables.js');
        });
    }
}

module.exports = MySql;