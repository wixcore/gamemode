module.exports = async () => {
    try {
        //#region Global
        WixCore.Module = {};
        //#endregion
        WixCore.Module.MySQL = require('../modules/sequelize');
        await WixCore.Module.MySQL.init();
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Modules"', '\n', error);
    }
};