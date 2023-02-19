let Sequelize = require('sequelize');

module.exports = {
    sequelize: null,
    Models: {},
    TypeMode: WixCore.Class.TypeMode.DataBase(),
    Connect: function () {
        this.sequelize = new Sequelize(this.TypeMode.connect[2], this.TypeMode.connect[3], this.TypeMode.connect[4], {
            host: this.TypeMode.connect[0],
            dialect: WixCore.Config.Variable['DataBase'],
            port: this.TypeMode.connect[1] || 3306,
            logging: this.TypeMode.logging,
            pool: {
                max: this.TypeMode.pool[0],
                min: this.TypeMode.pool[1],
                acquire: this.TypeMode.pool[2],
                idle: this.TypeMode.pool[3]
            },
            dialectOptions: {
                connectTimeout: this.TypeMode.connectTimeout
            },
            define: {
                timestamps: this.TypeMode.timestamps
            }
        });
        this.loading();
    },
    loading: function () {
        var PathModelWixCore = '';
        var PathModelPlugins = '';
        this.sequelize.authenticate().then(() => {
            PathModelWixCore = path.dirname(__dirname) + '\\modules\\';
            PathModelPlugins = path.dirname(__dirname) + '\\plugins\\';
            fs.readdirSync(PathModelWixCore).forEach(catalog => {
                PathModelWixCore = path.dirname(__dirname) + '\\modules\\' + catalog + '\\models';
                if (fs.existsSync(PathModelWixCore)) {
                    fs.readdirSync(PathModelWixCore).forEach(file => {
                        PathModelWixCore = path.dirname(__dirname) + '\\modules\\' + catalog + '\\models\\' + file;
                        if (this.Models !== undefined) {
                            this.Models[file] = require(PathModelWixCore)(this.sequelize, Sequelize.DataTypes);
                        }
                    });
                }
            })

            fs.readdirSync(PathModelPlugins).forEach(catalog => {
                PathModelPlugins = path.dirname(__dirname) + '\\plugins\\' + catalog + '\\models';
                if (fs.existsSync(PathModelPlugins)) {
                    fs.readdirSync(PathModelPlugins).forEach(file => {
                        PathModelPlugins = path.dirname(__dirname) + '\\plugins\\' + catalog + '\\models\\' + file;
                        console.log(PathModelPlugins)
                        if (this.Models !== undefined) {
                            var model = require(PathModelPlugins)(this.sequelize, Sequelize.DataTypes)
                            this.Models[model.name] = model;
                        }
                    });
                }
            })

            for (var name in this.Models) {
                var model = this.Models[name];
                if (model.associate) {
                    model.associate(this.Models);
                }
            }
            this.sequelize.sync();
            console.log("[DONE] Підключення до бази даних успішне.");
        }).catch((error) => {
            console.log('[STOP]: Не вдалося підключитися до бази даних:');
            console.log('[INFO]: Перевірте файл: wixcore/configs/variables.js');
        });
    },
    init: function () {
        this.Connect();
    }
};