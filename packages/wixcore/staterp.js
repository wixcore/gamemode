module.exports = async () => {
    try {
        require('../staterp/modules/cli');
        require('../staterp/modules/data');
        require('../staterp/modules/events');
        require('../staterp/modules/chat');
        require('../staterp/voice/voice');
        require('../staterp/managers/vSync');
        require('../staterp/managers/wpSync');
        require('../staterp/managers/attach');
        require('../staterp/managers/attachWeapons');
        require('../staterp/managers/dispatcher');
        require('../staterp/casino/wheel');

        let mysql = require('../staterp/modules/mysql');
        let methods = require('../staterp/modules/methods');
        let vehicleInfo = require('../staterp/modules/vehicleInfo');
        let ctos = require('../staterp/modules/ctos');
        let cloth = require('../staterp/business/cloth');
        let tattoo = require('../staterp/business/tattoo');
        let lsc = require('../staterp/business/lsc');
        let gun = require('../staterp/business/gun');
        let vShop = require('../staterp/business/vShop');
        let carWash = require('../staterp/business/carWash');
        let rent = require('../staterp/business/rent');
        let bar = require('../staterp/business/bar');
        let barberShop = require('../staterp/business/barberShop');
        let bank = require('../staterp/business/bank');
        let fuel = require('../staterp/business/fuel');
        let shop = require('../staterp/business/shop');
        let tradeMarket = require('../staterp/business/tradeMarket');
        let houses = require('../staterp/property/houses');
        let condos = require('../staterp/property/condos');
        let business = require('../staterp/property/business');
        let vehicles = require('../staterp/property/vehicles');
        let stocks = require('../staterp/property/stocks');
        let fraction = require('../staterp/property/fraction');
        let family = require('../staterp/property/family');
        let yachts = require('../staterp/property/yachts');
        let weather = require('../staterp/managers/weather');
        let pickups = require('../staterp/managers/pickups');
        let gangWar = require('../staterp/managers/gangWar');
        let canabisWar = require('../staterp/managers/canabisWar');
        let gangZone = require('../staterp/managers/gangZone');
        let copsRacer = require('../staterp/managers/copsRacer');
        let mafiaWar = require('../staterp/managers/mafiaWar');
        let timer = require('../staterp/managers/timer');
        let ems = require('../staterp/managers/ems');
        let tax = require('../staterp/managers/tax');
        let discord = require('../staterp/managers/discord');
        let racer = require('../staterp/managers/racer');
        let trucker = require('../staterp/managers/trucker');
        let graffiti = require('../staterp/managers/graffiti');
        let fishing = require('../staterp/managers/fishing');
        let coffer = require('../staterp/coffer');
        let inventory = require('../staterp/inventory');
        let weapons = require('../staterp/weapons');
        let enums = require('../staterp/enums');

        function init() {
            try {
                methods.debug('INIT GAMEMODE');

                mysql.executeQuery('UPDATE users SET is_online=\'0\', st_order_atm_d=\'0\', st_order_drug_d=\'0\', st_order_lamar_d=\'0\' WHERE 1');

                for (let i = 0; i < weapons.hashesMap.length; i++)
                    weapons.hashesMap[i][1] *= 2;

                vehicleInfo.loadAll();
                ctos.loadAll();
                graffiti.loadAll();
                fishing.loadAll();

                houses.loadAll();
                yachts.loadAll();
                condos.loadAll();
                condos.loadBigAll();
                business.loadAll();
                stocks.loadAll();
                fraction.loadAll();
                family.loadAll();
                gangWar.loadAll();
                canabisWar.loadAll();
                //mafiaWar.loadAll();
                timer.loadAll();
                tax.loadAll();

                trucker.loadAll();

                weather.loadAll();
                racer.loadAll();
                gangZone.loadAll();
                copsRacer.loadAll();

                carWash.loadAll();
                rent.loadAll();
                lsc.loadAll();
                bar.loadAll();
                barberShop.loadAll();
                cloth.loadAll();
                tattoo.loadAll();
                gun.loadAll();
                bank.loadAll();
                fuel.loadAll();
                shop.loadAll();
                tradeMarket.loadAll();

                pickups.createAll();

                coffer.load();

                methods.loadAllBlips();

                inventory.loadAll();

                vShop.loadAllShop();

                let c = a => 10 > a ? 2e4 + +a : a.charCodeAt(0);

                enums.clothM = enums.clothM.sort((a, b) => c(a[9][0] + a[9][1]) - c(b[9][0] + b[9][1]));
                enums.clothF = enums.clothF.sort((a, b) => c(a[9][0] + a[9][1]) - c(b[9][0] + b[9][1]));

                enums.propM = enums.propM.sort((a, b) => c(a[5][0] + a[5][1]) - c(b[5][0] + b[5][1]));
                enums.propF = enums.propF.sort((a, b) => c(a[5][0] + a[5][1]) - c(b[5][0] + b[5][1]));

                enums.tattooList = enums.tattooList.sort((a, b) => c(a[0]) - c(b[0]));

                setInterval(methods.saveAllAnother, 15 * 1000 * 60);

                setTimeout(function () {
                    vShop.loadAllShopVehicles();
                    vehicles.loadAllTimers();
                    vehicles.loadAllFractionVehicles();
                    vehicles.checkVehiclesFuel();
                }, 10000);
            }
            catch (e) {
                methods.debug('ERROR INIT', e);
            }
        }

        init();
    } catch (error) {
        console.log('[ERROR] Ініціалізація "StateRP"', '\n', error);
    }
};