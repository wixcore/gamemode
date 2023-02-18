module.exports = {
    Config: require('./config'),
    Ems: require('./scripts/ems'),
    Init () {
        this.Ems.Init();
    }
}