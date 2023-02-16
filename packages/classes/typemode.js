class TypeMode {
    static DataBase() {
        var connect = '';
        var logging = '';
        var pool = '';
        var connectTimeout = '';
        var timestamps = '';

        if (WixCore.Config.Variable['TypeMode'] === 'Development') {
            connect = WixCore.Config.Variable['MySQL Connect'].Development.Connect;
            logging = WixCore.Config.Variable['MySQL Connect'].Development.Logging;
            pool = WixCore.Config.Variable['MySQL Connect'].Development.Pool;
            connectTimeout = WixCore.Config.Variable['MySQL Connect'].Development.ConnectTimeout;
            timestamps = WixCore.Config.Variable['MySQL Connect'].Development.TimeStamps;
        }
        if (WixCore.Config.Variable['TypeMode'] === 'Testing') {
            connect = WixCore.Config.Variable['MySQL Connect'].Testing.Connect;
            logging = WixCore.Config.Variable['MySQL Connect'].Testing.Logging;
            pool = WixCore.Config.Variable['MySQL Connect'].Testing.Pool;
            connectTimeout = WixCore.Config.Variable['MySQL Connect'].Testing.ConnectTimeout;
            timestamps = WixCore.Config.Variable['MySQL Connect'].Testing.TimeStamps;
        }
        if (WixCore.Config.Variable['TypeMode'] === 'Production') {
            connect = WixCore.Config.Variable['MySQL Connect'].Production.Connect;
            logging = WixCore.Config.Variable['MySQL Connect'].Production.Logging;
            pool = WixCore.Config.Variable['MySQL Connect'].Production.Pool;
            connectTimeout = WixCore.Config.Variable['MySQL Connect'].Production.ConnectTimeout;
            timestamps = WixCore.Config.Variable['MySQL Connect'].Production.TimeStamps;
        }

        return { connect, logging, pool, connectTimeout, timestamps };
    }
}

module.exports = TypeMode;