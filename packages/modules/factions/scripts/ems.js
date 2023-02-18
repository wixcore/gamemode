"use strict"; // Created by ua.lifesheets on 18.02.2023.

/**
  * Завантажує Фракцію "EMS".
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = {

    methods: require('../../../staterp/modules/methods'),
    user: require('../../../staterp/user'),
    inventory: require('../../../staterp/inventory'),
    vehicles: require('../../../staterp/property/vehicles'),
    
    Blip() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Organization,
            WixCore.Module.Faction.Config.Ems['pillbox'].Organization,
            WixCore.Module.Faction.Config.Ems['sandy'].Organization,
            WixCore.Module.Faction.Config.Ems['zonan'].Organization
        ];
        data.forEach(arg => {
            this.methods.createBlip(arg, 61, 1, 0.85, 'Больница');
        });
    },

    Organization() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Organization,
            WixCore.Module.Faction.Config.Ems['pillbox'].Organization,
            WixCore.Module.Faction.Config.Ems['sandy'].Organization,
            WixCore.Module.Faction.Config.Ems['zonan'].Organization
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!this.user.isLogin(player)) {
                    return;
                }
                if (this.methods.distanceToPos(arg, player.position) < 1.4) {
                    player.call('wixcore::security:feature:factions:menu:list:organization');
                };
            });
        });
    },

    Reception() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Reception,
            WixCore.Module.Faction.Config.Ems['pillbox'].Reception[0],
            WixCore.Module.Faction.Config.Ems['pillbox'].Reception[1],
            WixCore.Module.Faction.Config.Ems['sandy'].Reception,
            WixCore.Module.Faction.Config.Ems['zonan'].Reception
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg[1], 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!this.user.isLogin(player)) {
                    return;
                };
                if (this.methods.distanceToPos(arg[1], player.position) < 1.4) {
                    player.call('wixcore::security:feature:factions:menu:list:reception', [arg[0], this.methods.getCurrentOnlineFraction(6) < 6]);
                };
            });
        });
    },

    Garderob() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Garderob,
            WixCore.Module.Faction.Config.Ems['pillbox'].Garderob,
            WixCore.Module.Faction.Config.Ems['sandy'].Garderob,
            WixCore.Module.Faction.Config.Ems['zonan'].Garderob
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!this.user.isLogin(player)) {
                    return;
                };
                if (this.user.isEms(player)) {
                    if (this.methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security:feature:factions:menu:list:garderob');
                    };
                };
            });
        });
    },

    Arsenal() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Arsenal,
            WixCore.Module.Faction.Config.Ems['pillbox'].Arsenal,
            WixCore.Module.Faction.Config.Ems['sandy'].Arsenal,
            WixCore.Module.Faction.Config.Ems['zonan'].Arsenal
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {

                if (!this.user.isLogin(player)) {
                    return;
                };
                if (this.user.isEms(player)) {
                    if (this.methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security:feature:factions:menu:list:arsenal');
                    };
                };
            });
        });
    },

    Stock() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Stock,
            WixCore.Module.Faction.Config.Ems['pillbox'].Stock,
            WixCore.Module.Faction.Config.Ems['sandy'].Stock,
            WixCore.Module.Faction.Config.Ems['zonan'].Stock
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!this.user.isLogin(player)) {
                    return;
                };
                if (this.user.isEms(player)) {
                    if (this.methods.distanceToPos(arg, player.position) < 1.4) {
                        this.inventory.getItemList(player, this.inventory.types.StockGov, this.user.getId(player));
                    };
                };
            });
        });
    },

    MedPanel() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].MedPanel,
            WixCore.Module.Faction.Config.Ems['pillbox'].MedPanel,
            WixCore.Module.Faction.Config.Ems['sandy'].MedPanel,
            WixCore.Module.Faction.Config.Ems['zonan'].MedPanel
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {

                if (!this.user.isLogin(player)) {
                    return;
                };
                if (this.user.isEms(player)) {
                    if (this.methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security:feature:factions:menu:list:medpanel');
                    };
                };
            });
        });
    },
    Elevator() {
        let helicopter = WixCore.Module.Faction.Config.Ems['pillbox'].Elevator.Helicopter;
        let parking = WixCore.Module.Faction.Config.Ems['pillbox'].Elevator.Parking;
        // Взаємодія з об'єктом.
        mp.events.add("onKeyPress:E", (player) => {
            if (!this.user.isLogin(player)) {
                return;
            }
            this.methods.checkTeleport(player, helicopter[0], helicopter[1]);
            this.methods.checkTeleport(player, parking[0], parking[1]);
        });
        // Парковка - вертолітний майданчик.
        helicopter.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
        });
        // Парковка - службового транспорту.
        parking.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
        });
    },

    Parkings() {
        let data = [
            WixCore.Module.Faction.Config.Ems['paleto'].Parkings,
            WixCore.Module.Faction.Config.Ems['pillbox'].Parkings,
            WixCore.Module.Faction.Config.Ems['sandy'].Parkings,
            WixCore.Module.Faction.Config.Ems['zonan'].Parkings
        ];
        data.forEach(arg => {
            this.methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);

            mp.events.add("onKeyPress:E", (player) => {
                if (!this.user.isLogin(player)) {
                    return;
                };

                if (this.methods.distanceToPos(arg, player.position) < 1.4 && this.user.isEms(player)) {
                    player.call('wixcore::security:feature:factions:menu:list:vehicles', [
                        this.vehicles.getFractionAllowCarList(6, this.user.isLeader(player) || this.user.isSubLeader(player) ||
                            this.user.isDepLeader(player) || this.user.isSubLeader(player) ? -1 : this.user.get(player, 'rank_type')
                        )
                    ]);
                };
            });
        });
    },

    Init() {
        this.Blip(),
        this.Organization(),
        this.Reception(),
        this.Garderob(),
        this.Arsenal(),
        this.Stock(),
        this.MedPanel(),
        this.Elevator(),
        this.Parkings()
    }
}