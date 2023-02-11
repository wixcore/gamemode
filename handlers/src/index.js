import './modules/data';
import './modules/events';

import './manager/vSync';
import './manager/pSync';
import './manager/wpSync';
import './manager/shoot';
import './manager/heliCam';
import './manager/attachWeapons';
import './manager/cameraRotator';
import './manager/racer';
import './manager/copsRacer';
import './manager/jobPoint';
//import './manager/seats';
import "./manager/prolog";
import "./manager/scaleform";
import './betternotifs';

import business from "./property/business";
import "./property/vehicles";
import methods from "./modules/methods";
import checkpoint from "./manager/checkpoint";
import timer from "./manager/timer";
import vBreakLight from "./manager/vBreakLight";
import object from "./manager/object";
import npc from "./manager/npc";
import skill from "./manager/skill";
import attach from "./manager/attach";
import attachItems from "./manager/attachItems";
import weather from "./manager/weather";
import hosp from "./manager/hosp";
import jail from "./manager/jail";
import policeRadar from "./manager/policeRadar";

import wheel from "./casino/wheel";

import user from "./user";
import enums from "./enums";
import phone from "./phone";
import chat from "./chat";
import voiceRage from "./voiceRage";

import "./antiCheat";
import "./mainMenu";
import "./shopMenu";

import trucker from "./jobs/trucker";
import taxi from "./jobs/taxi";
import prolog from "./manager/prolog";

mp.events.add('playerReady', player => {
    try {
        user.showLoadDisplay();
        user.setVirtualWorld(mp.players.local.remoteId);

        for (let i = 0; i < 50; i++) {
            mp.gui.chat.push('');
        }
        if (mp.storage.data.token) {
            mp.gui.chat.push('BlackList');
            user.kick('BlackList');
        } else {
            chat.show(false);
            chat.activate(false);
            // enums.customIpl.forEach(item => {
            //     object.createIpl(item[0], new mp.Vector3(item[1], item[2], item[3]), item[4]);
            // });
            mp.game.ped.setAiMeleeWeaponDamageModifier(1);
            mp.game.player.setMeleeWeaponDefenseModifier(1);
            mp.game.player.setWeaponDefenseModifier(1);
            mp.game.player.setVehicleDefenseModifier(.1);
            mp.game.player.setVehicleDamageModifier(.1);
            // Автоматичний парашут при виході з повітряного т/с
            mp.game.player.setAutoGiveParachuteWhenEnterPlane(true);
            // Відключаємо навколишні звуки на сервері.
            mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");
            // Курсор
            mp.gui.cursor.show(true, true);
            // Таймери
            timer.createInterval('hosp.timer', hosp.timer, 1000);
            timer.createInterval('jail.timer', jail.timer, 1000);
            timer.createInterval('prolog.timer', prolog.timer, 500);
            timer.createInterval('voiceRage.timer', voiceRage.timer, 5);

            user.init();

            try {
                methods.requestIpls();
            } catch (e) {
                methods.saveFile('errorIpl', e);
            }

            setTimeout(checkpoint.checkPosition, 10000);
            
            enums.loadCloth();
            business.loadScaleform();
            object.load();
            npc.loadAll();
            skill.loadAll();
            wheel.loadAll();
            trucker.loadAll();
            taxi.loadAll();
            attach.init();
            attachItems.registerAttaches();
            timer.loadAll();
            vBreakLight.timer();
            policeRadar.load();
            weather.secSyncTimer();

            try {
                mp.game.stats.statSetProfileSetting(0, 0);
            } catch (e) {
                methods.saveFile('Profile Setting', e);
            }

            timer.createInterval('phone.findNetworkTimer', phone.findNetworkTimer, 1000);
            user.showCustomNotify('Проект доступен лицам достигшим 18 лет.', 4, 1, 2500);
        }
        // Спустя 1 секунды после откисания включаем все интерфейсы.
        setTimeout(function () {
            mp.gui.chat.show(false);
            mp.gui.chat.activate(false);
            for (let i = 0; i < 50; i++) {
                mp.gui.chat.push('');
            }
            user.hideLoadDisplay();
            ui.create();
    } catch (e) {
        methods.debug('ERROR INIT CLIENT', e);
    }
});