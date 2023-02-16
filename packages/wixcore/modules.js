module.exports = async () => {
    try {
        //#region Global
        WixCore.Module = {};
        //#endregion

        WixCore.Module.MySQL = require('../modules/sequelize');
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Modules"', '\n', error);
    }
};