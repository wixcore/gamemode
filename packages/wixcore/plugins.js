module.exports = async () => {
    try {
        //#region Global
        WixCore.Plugin = {};
        //#endregion
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Plugins"', '\n', error);
    }
};