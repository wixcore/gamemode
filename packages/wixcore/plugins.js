module.exports = async () => {
    try {
        //#region Global
        WixCore.Plugin = {};
        //#endregion

        require('../plugins/customize')
    } catch (error) {
        console.log('[ERROR] Ініціалізація "Plugins"', '\n', error);
    }
};