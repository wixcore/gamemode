module.exports = async () => {
    try {
        //#region Global
        WixCore.Class = {};
        //#endregion

        WixCore.Class.TypeMode = require('../classes/typemode');
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Classes"', '\n', error);
    }
};