module.exports = async () => {
    try {
        //#region Global
        WixCore.Class = {};
        //#endregion

        WixCore.Class.Example = require('../classes/example');
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Classes"', '\n', error);
    }
};