module.exports = async () => {
    try {
        //#region Global
        global.fs = require('fs');
        global.path = require('path');
        global.WixCore = new Map();
        //#endregion
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Nucleus"', '\n', error);
    }
};