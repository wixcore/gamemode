module.exports = async () => {
    try {
        //#region Global
        WixCore.Config = {};
        //#endregion

        WixCore.Config.Variable = require('../configs/variables');
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Configs"', '\n', error);
    }
};
