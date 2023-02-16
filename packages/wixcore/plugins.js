module.exports = async () => {
    try {
        //#region Global
        WixCore.Plugins = {};
        //#endregion

    } catch (error) {
        console.log('[ERROR] Ініціалізація "Plugins"', '\n', error);
    }
};