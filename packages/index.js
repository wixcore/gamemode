"use strict"; // Created by "WixCore.Net" on 12.02.2023.
global.WixCore      = {};
WixCore.Feature     = {};

require('./_staterp/modules/cli');
require('./_staterp/modules/data');
require('./_staterp/modules/events');
require('./_staterp/modules/chat');
require('./_staterp/voice/voice');
require('./_staterp/managers/vSync');
require('./_staterp/managers/wpSync');
require('./_staterp/managers/attach');
require('./_staterp/managers/attachWeapons');
require('./_staterp/managers/dispatcher');

require('./_staterp/casino/wheel');

let mysql = require('./_staterp/modules/mysql');
let methods = require('./_staterp/modules/methods');
let vehicleInfo = require('./_staterp/modules/vehicleInfo');
let ctos = require('./_staterp/modules/ctos');

let cloth = require('./_staterp/business/cloth');
let tattoo = require('./_staterp/business/tattoo');
let lsc = require('./_staterp/business/lsc');
let gun = require('./_staterp/business/gun');
let vShop = require('./_staterp/business/vShop');
let carWash = require('./_staterp/business/carWash');
let rent = require('./_staterp/business/rent');
let bar = require('./_staterp/business/bar');
let barberShop = require('./_staterp/business/barberShop');
let bank = require('./_staterp/business/bank');
let fuel = require('./_staterp/business/fuel');
let shop = require('./_staterp/business/shop');
let tradeMarket = require('./_staterp/business/tradeMarket');

let houses = require('./_staterp/property/houses');
let condos = require('./_staterp/property/condos');
let business = require('./_staterp/property/business');
let vehicles = require('./_staterp/property/vehicles');
let stocks = require('./_staterp/property/stocks');
let fraction = require('./_staterp/property/fraction');
let family = require('./_staterp/property/family');
let yachts = require('./_staterp/property/yachts');

let weather = require('./_staterp/managers/weather');
let pickups = require('./_staterp/managers/pickups');
let gangWar = require('./_staterp/managers/gangWar');
let canabisWar = require('./_staterp/managers/canabisWar');
let gangZone = require('./_staterp/managers/gangZone');
let copsRacer = require('./_staterp/managers/copsRacer');
let mafiaWar = require('./_staterp/managers/mafiaWar');
let timer = require('./_staterp/managers/timer');
let ems = require('./_staterp/managers/ems');
let tax = require('./_staterp/managers/tax');
let discord = require('./_staterp/managers/discord');
let racer = require('./_staterp/managers/racer');
let trucker = require('./_staterp/managers/trucker');
let graffiti = require('./_staterp/managers/graffiti');
let fishing = require('./_staterp/managers/fishing');

let coffer = require('./_staterp/coffer');
let inventory = require('./_staterp/inventory');
let weapons = require('./_staterp/weapons');
let enums = require('./_staterp/enums');

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