import '../staterp/modules/data';
import '../staterp/modules/events';
import '../staterp/manager/vSync';
import '../staterp/manager/pSync';
import '../staterp/manager/wpSync';
import '../staterp/manager/shoot';
import '../staterp/manager/heliCam';
import '../staterp/manager/attachWeapons';
import '../staterp/manager/cameraRotator';
import '../staterp/manager/racer';
import '../staterp/manager/copsRacer';
import '../staterp/manager/jobPoint';
import "../staterp/manager/prolog";
import "../staterp/manager/scaleform";
import '../staterp/betternotifs';

import business from "../staterp/property/business";
import "../staterp/property/vehicles";
import methods from "../staterp/modules/methods";
import checkpoint from "../staterp/manager/checkpoint";
import timer from "../staterp/manager/timer";
import vBreakLight from "../staterp/manager/vBreakLight";
import object from "../staterp/manager/object";
import npc from "../staterp/manager/npc";
import skill from "../staterp/manager/skill";
import attach from "../staterp/manager/attach";
import attachItems from "../staterp/manager/attachItems";
import weather from "../staterp/manager/weather";
import hosp from "../staterp/manager/hosp";
import jail from "../staterp/manager/jail";
import policeRadar from "../staterp/manager/policeRadar";
import ui from "../staterp/modules/ui";
import wheel from "../staterp/casino/wheel";

import user from "../staterp/user";
import enums from "../staterp/enums";
import phone from "../staterp/phone";
import chat from "../staterp/chat";
import voiceRage from "../staterp/voiceRage";

import "../staterp/antiCheat";
import "../staterp/mainMenu";
import "../staterp/shopMenu";

import trucker from "../staterp/jobs/trucker";
import taxi from "../staterp/jobs/taxi";
import prolog from "../staterp/manager/prolog";

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
        }
        user.showCustomNotify('Проект доступен лицам достигшим 18 лет.', 4, 1, 2500);
        // Спустя 1 секунды после откисания включаем все интерфейсы.
        setTimeout(function () {
            mp.gui.chat.show(false);
            mp.gui.chat.activate(false);
            for (let i = 0; i < 50; i++) {
                mp.gui.chat.push('');
            }
            user.hideLoadDisplay();
            ui.create();
        }, 1000);
    } catch (e) {
        methods.debug('ERROR INIT CLIENT', e);
    }
});