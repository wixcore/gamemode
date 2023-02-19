module.exports = async () => {
    try {
        //#region Global
        WixCore.Module = {};
        //#endregion
        WixCore.Module.MySQL    = require('../modules/sequelize');
        WixCore.Module.Faction  = require('../modules/factions');
        
        
        await WixCore.Module.Faction.Init();
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Modules"', '\n', error);
    }
};