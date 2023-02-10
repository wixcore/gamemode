/* eslint-disable */ // Должно быть тут :)
import React from 'react';
import './css/inventory.css';
import './css/img-items.css';
import { Animated } from 'react-animated-css';
import InteractionMenu from '../interactionmenu/InteractionMenu';
import EventManager from "../../EventManager";

import OutfitHat from './img/outfit/outfit-hat.png'
import OutfitArmour from './img/outfit/outfit-armour.png'
import OutfitBracelet from './img/outfit/outfit-bracelet.png'
import OutfitBag from './img/outfit/outfit-bag.png'
import OutfitCard from './img/outfit/outfit-card.png'
import OutfitCase from './img/outfit/outfit-case.png'
import OutfitEarrings from './img/outfit/outfit-earrings.png'
import OutfitGlasses from './img/outfit/outfit-glasses.png'
import OutfitGloves from './img/outfit/outfit-gloves.png'
import OutfitJewerly from './img/outfit/outfit-jewerly.png'
import OutfitMask from './img/outfit/outfit-mask.png'
import OutfitNotes from './img/outfit/outfit-notes.png'
import OutfitPants from './img/outfit/outfit-pants.png'
import OutfitPhone from './img/outfit/outfit-phone.png'
import OutfitShoes from './img/outfit/outfit-shoes.png'
import OutfitTshirt from './img/outfit/outfit-tshirt.png'
import OutfitWatch from './img/outfit/outfit-watch.png'

// Drag & Drop components
import {Draggable, Droppable} from './Dnd'

class Inventory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false, // Инвентарь открыт/закрыт
            player_name: "Nika Kondr",
            player_id: 456,
            craft: true,
            secondary_inv_open: false, // Багажник открыт/закрыт
            crafting_succes: false,
            x: '',
            y: '',
            inter_show: false,
            inter_menu_selected: { item: {}, source: '' }, // Сюда автоматически записывается выбранный предмет для взаимодействия через меню
            weight_now: 20,
            weight_max: 70000,
            secondary_weight_now: 20,
            secondary_weight_max: 1000000,
            trade_ids: [], // Сюда записываются ID ближайших игроков для торговли
            loadw_ids: [{ name: "P90", id: 28 }], // Сюда записываются данные оружия в экипировке которое можно зарядить выбранными патронами
            upgradew_ids: [{ name: "P90", id: 28 }], // Сюда записываются данные оружия в экипировке которое можно зарядить выбранными патронами

            inter_menu: [ // Пункты меню (генерируются динамично, в зависимости от выбранного предмета)
                { name: "Выбрать", action: "select", show: false, color: '#4CAF50' },
                { name: "Разрядить", action: "unloadW", show: false },

                { name: "Надеть", action: "put_on", show: false, color: '#4CAF50' },
                { name: "Модифицировать", action: "put_on_gun", show: false, color: '#4CAF50' },
                { name: "Использовать", action: "use", show: false, color: '#4CAF50' },
                { name: "Использовать на игрока", action: "usePlayer", show: false, color: '#4CAF50' },
                { name: "Употребить", action: "consume", show: false, color: '#4CAF50' },
                { name: "Рыбачить", action: "fish", show: false, color: '#4CAF50' },
                { name: "Играть", action: "play", show: false, color: '#4CAF50' },
                { name: "Выкурить", action: "smoke", show: false, color: '#4CAF50' },
                { name: "Съесть", action: "eat", show: false, color: '#4CAF50' },
                { name: "Выпить", action: "drink", show: false, color: '#4CAF50' },
                { name: "Экипировать", action: "equip", show: false, color: '#4CAF50' },
                { name: "Зарядить", action: "loadw", show: false, color: '#4CAF50' },
                { name: "Разделить", action: "split", show: false, color: '#4CAF50' },
                { name: "Открыть", action: "weightGr", show: false, color: '#4CAF50' },

                { name: "Информация о билете", action: "infoLoto", show: false },

                { name: "Взять 1гр.", action: "take1gr", show: false },
                { name: "Взять 10гр.", action: "take10gr", show: false },
                { name: "Взять 50гр.", action: "take50gr", show: false },

                { name: "Взять 1шт.", action: "take1", show: false },

                { name: "Посчитать", action: "countItems", show: false },
                { name: "Посчитать", action: "countMoney", show: false },
                { name: "Посчитать", action: "countPt", show: false },

                { name: "Передать", action: "give", show: true },

                { name: "Открыть сумку", action: "openBag", show: false, color: '#2196F3' },
                { name: "Переложить", action: "move", show: false, color: '#2196F3' },
                { name: "Переложить все", action: "move_all", show: false, color: '#2196F3' },
                { name: "Взять", action: "take", show: false, color: '#2196F3' },
                { name: "Взять все", action: "take_all", show: false, color: '#2196F3' },
                { name: "Переименовать", action: "rename", show: false, color: '#2196F3' },

                { name: "Информация о предмете", action: "infoItem", show: false },

                { name: "Снять", action: "take_off", show: false },
                { name: "Убрать в инвентарь", action: "unequip", show: false },

                { name: "Выбросить", action: "drop", show: false, color: '#FF9800' },
                { name: "Закрыть", action: "close", show: false, color: '#f44336' },
            ],

            items: [ // Инвентарь
                /*{ id: 1, item_id: 14, name: "Бургер", volume: 15, desc: "Редкость: мистическая", counti: 0, params: {} }, // айди предмета из базы
                { id: 2, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
                { id: 3, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
                { id: 4, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
                { id: 5, item_id: 279, name: "Патроны", volume: 15, desc: "", counti: 0, params: {} },
                { id: 6, item_id: 1, name: "Что то там", volume: 15, desc: "", counti: 0, params: {} },
                { id: 7, item_id: 3, name: "Еще что то", volume: 15, desc: "", counti: 0, params: {} },
                { id: 10, item_id: 3, name: "Еще что то", volume: 15, desc: "", counti: 0, params: {} },
                { id: 8, item_id: 2, name: "И тут еще что то", volume: 15, desc: "", counti: 0, params: {} },
                {
                    id: 27,
                    item_id: 95,
                    name: "HK-416",
                    volume: 15,
                    desc: "AR-0001244",
                    counti: 0,
                    params: { slot1: true, slot2: false, slot3: true, slot4: false }
                },
                {
                    id: 28,
                    item_id: 109,
                    name: "P90",
                    volume: 15,
                    desc: "SM-0001244",
                    counti: 0,
                    params: { slot1: false, slot2: true, slot3: true, slot4: true }
                },
                {
                    id: 29,
                    item_id: 115,
                    name: "Пушка шаталка",
                    volume: 15,
                    desc: "AR-0001244",
                    counti: 0,
                    params: { slot1: false, slot2: false, slot3: false, slot4: false }
                },
                {
                    id: 30,
                    item_id: 116,
                    name: "Чёткая снайпа",
                    volume: 15,
                    desc: "SM-0001244",
                    counti: 0,
                    params: { slot1: true, slot2: true, slot3: true, slot4: true }
                },
                {
                    id: 31,
                    item_id: 117,
                    name: "Выбор твоей бабушки",
                    volume: 15,
                    desc: "AR-0001244",
                    counti: 0,
                    params: {}
                },
                { id: 32, item_id: 118, name: "Какая то хрень", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 33, item_id: 119, name: "Похоже на AWP", volume: 15, desc: "AR-0001244", counti: 0, params: {} },
                { id: 34, item_id: 120, name: "Пистолет-обрез?", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 35, item_id: 121, name: "Ракетница", volume: 15, desc: "AR-0001244", counti: 0, params: {} },
                { id: 36, item_id: 122, name: "Гранатомёт", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 37, item_id: 264, name: "Сумка", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 38, item_id: 264, name: "Сумка", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 39, item_id: 265, name: "Футболка", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 40, item_id: 269, name: "Кепка", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 41, item_id: 48, name: "Деньги", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
                { id: 41, item_id: 275, name: "Перчатки", volume: 15, desc: "SM-0001244", counti: 0, params: {} }*/

            ],
            itemsCounted: [ // Сюда переписываются все предметы которые стакаются при обновлении инвентаря для правильного отображения
            ],

            secondary_items: [ // Багажник
                //{ id: 15, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // secondary_items.id Уникальный id предмета из базы (не должны повторяться)
            ],
            secondary_itemsCounted: [ // Сюда переписываются все предметы которые стакаются при обновлении инвентаря для правильного отображения
            ],
            secondary_items_owner_id: 0,
            secondary_items_owner_type: 0,

            selected_item: {},

            // Надетые на персонажа предметы
            equipment_outfit: [ // equipment_outfit.id Уникальный id предмета из базы (не должны повторяться)
                //{ id: 15, item_id: 254, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }
            ],

            itemsById: { // В массивах должны быть айди всех предметов разного типа
                countItems: [26], // Посчитать
                weightGr: [142, 143, 144, 145, 154, 155, 156, 157, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], // Взвесить
                take1gr: [/*142, 143, 144, 145, 154, 155, 156, 157, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180*/], // Взять 1гр
                take10gr: [/*142, 143, 144, 145, 156, 157, 163, 164, 165, 166, 167, 168, 169, 170, 176, 177, 178, 179, 180*/], // Взять 10гр
                take50gr: [/*142, 143, 144, 145, 163, 164, 165, 166, 167, 168, 169, 170*/], // Взять 50гр
                food: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 232, 233, 234, 235, 236, 237, 238, 239, 240], // Можно "съесть"
                drinks: [241, 242, 243, 244, 245, 246, 247, 248, 249, 250], // Можно "выпить"
                usable: [4, 5, 6, 8, 9, 10, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 47, 49, 216, 0, 277, 278, 215, 221, 262, 474, 477], // Можно "использовать"
                usablePlayer: [277, 278, 215, 221, 216], // Можно "использовать"
                fish: [251], // Можно "Рыбачить"
                smoke: [26, 3], // Можно "курить"
                play: [253], // Можно "Играть"
                consumable: [2, 158, 159, 160, 161, 162], // Можно "употребить"
                bag: [264, 263, 252], // Открыть сумку
                rename: [264, 263, 252], // Переименовать
                equipable: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 146, 147], // Можно "экипировать"
                ammo: [279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292], // Предметы которыми можно зарядить оружие (патроны)
                countPt: [279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292], // Предметы которыми можно зарядить оружие (патроны)
                putOnGun: [293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473], // Предметы которыми можно зарядить оружие (патроны)
            },

            // !!! Ключи объекта outfitById нельзя менять местами !!!
            outfitById: { // В массивах должны быть айди всех outfit-предметов разного типа
                cap: [269], // Кепки
                glasses: [270], // Очки
                mask: [274], // Маски
                shirt: [265], // Футболки
                jewerly: [268], // Аксессуар (ожерелья?)
                earrings: [271], // Серьги
                jeans: [266], // Штаны
                watch: [272], // Часы
                bracelet: [273], // Браслеты
                boot: [267], // Обувь
                bag: [264, 263], // Сумка
                gloves: [275], // Перчатки
                armour: [252], // Броня
                phone: [27, 28, 29, 30], // Телефоны
                money: [254, 255, 256, 257, 258, 259, 260], // Деньги?
                card: [50], // Карточки
            },

            // !!! Элементы массива outfit нельзя менять местами !!!
            outfit: [
                [
                    { slot: "outf-cap", equipped: false, type: 'cap', icon: OutfitHat, iconName: 'outfit-hat' },
                    { slot: "outf-glasses", equipped: false, type: 'glasses', icon: OutfitGlasses, iconName: 'outfit-glasses' },
                    { slot: "outf-mask", equipped: false, type: 'mask', icon: OutfitMask, iconName: 'outfit-mask' },
                    { slot: "outf-shirt", equipped: false, type: 'shirt', icon: OutfitTshirt, iconName: 'outfit-tshirt' },
                    { slot: "outf-jewerly", equipped: false, type: 'jewerly', icon: OutfitJewerly, iconName: 'outfit-jewerly' },
                    { slot: "outf-earrings", equipped: false, type: 'earrings', icon: OutfitEarrings, iconName: 'outfit-earrings' },
                    { slot: "outf-jeans", equipped: false, type: 'jeans', icon: OutfitPants, iconName: 'outfit-pants' },
                    { slot: "outf-watch", equipped: false, type: 'watch', icon: OutfitWatch, iconName: 'outfit-watch' },
                    { slot: "outf-bracelet", equipped: false, type: 'bracelet', icon: OutfitBracelet, iconName: 'outfit-bracelet' },
                    { slot: "outf-boot", equipped: false, type: 'boot', icon: OutfitShoes, iconName: 'outfit-shoes' },
                    { slot: "outf-bag", equipped: false, type: 'bag', icon: OutfitBag, iconName: 'outfit-case' },
                    { slot: "outf-gloves", equipped: false, type: 'gloves', icon: OutfitGloves, iconName: 'outfit-gloves'},
                ],
                [
                    { slot: "outf-armour", equipped: false, type: 'armour', icon: OutfitArmour, iconName: 'outfit-armour'},
                    { slot: "outf-phone", equipped: false, type: 'phone', icon: OutfitPhone, iconName: 'outfit-phone'},
                    { slot: "outf-money", equipped: false, type: 'money', icon: OutfitNotes, iconName: 'outfit-notes'},
                    { slot: "outf-card", equipped: false, type: 'card', icon: OutfitCard, iconName: 'outfit-card'},
                ],
            ],

            equipment_weapon: [ // Экипированное оружие
                { id: 33, item_id: 119, name: "Похоже на AWP", volume: 15, desc: "AR-0001244", counti: 0, params: { serial: '456', slot1: false, slot2: false, slot3: false, slot4: false } }
            ],
            selected_weapon_id: 33,
            selected_weapon_name: 'Похоже на AWP',
            selected_weapon_item_id: 0,
            updateItemIcons_primary_timeout: false,
            updateItemIcons_secondary_timeout: false,

            recipes_craft: false,
            craft_process: -1,
            selected_recipe: {},
            learned_recipes: [
                {
                    id: 80, name: "Большая аптечка", desc: `Данная аптечка восстанавливает до 100% здоровья.~br~Ресурсы для создания: бинт 2шт, маленькая аптечка`,
                    craft: ['199', '3', '3'], craft_time: 200000,
                },
            ],
            itemCooldown: [
                // { item_id: 14, cooldown: 5 }
            ],
        }
    }

    isCooldownActive(item_id){ // returns true/false
        let cdArray = this.state.itemCooldown.filter(function (el) {
            return el.item_id === item_id && el.cooldown > -1
          });
          if(cdArray.length !== 0) return true;
          else return false;
    }

    setCooldown(item_id, time = 5) {
        this.setState({itemCooldown: this.state.itemCooldown.concat({item_id: item_id, cooldown: time})})
    }

    cooldownTick(){
        for(let i = 0; i < this.state.itemCooldown.length; i++){
            if(this.state.itemCooldown[i].cooldown > 0){
                this.setState(prevState => ({...prevState.itemCooldown[i].cooldown = this.state.itemCooldown[i].cooldown-1}))
            } else {
                this.setState({itemCooldown: this.state.itemCooldown.filter(function (el) {
                    return el.cooldown > 0
                  })
                });
            }
        }
    }

    getItemCooldown(item_id){
        for(let i = 0; i < this.state.itemCooldown.length; i++){
            if(this.state.itemCooldown[i].item_id === item_id){
                return this.state.itemCooldown[i].cooldown;
            }
        }
        return 0;
    }

    escapeRegExp = function(str) {
        return str.toString().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    replaceAll(str, find, replace){
        //return str.toString().split(find).join(replace);
        return str.toString().replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Inventory.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ show: false })
        //     this.closeInterMenu(null, { action: null })
        // }, 10000)

        var cooldownTick = setInterval(() => {
            this.cooldownTick();
        }, 1000);
        this.setState({cooldownTick: cooldownTick});

        EventManager.addHandler('inventory', value => {
            if (value.type === 'show') {
                this.setState({ show: true })
            }
            if (value.type === 'hide') {
                this.setState({ show: false })
                this.closeInterMenu(null, { action: null });

                this.setState({ secondary_inv_open: false });
                this.setState({ secondary_items: [] });
                this.setState({ secondary_items_owner_id: 0 });
                this.setState({ secondary_items_owner_type: 0 });
            }
            if (value.type === 'showOrHide') {
                let status = !this.state.show;
                if (!status) this.closeInterMenu(null, { action: null });
                mp.trigger('client:inventory:status', status); // eslint-disable-line
                this.setState({ show: status })

                if (status == false) {
                    this.setState({ secondary_inv_open: false });
                    this.setState({ secondary_items: [] });
                    this.setState({ secondary_items_owner_id: 0 });
                    this.setState({ secondary_items_owner_type: 0 });
                }
            }
            if (value.type === 'updateEquip') {
                this.setState({ outfit: value.outfit })
            }
            if (value.type === 'updateCooldown') {
                this.setCooldown(value.itemid, value.time);
            }
            if (value.type === 'updateItems') {
                console.log(value.items);
                this.setState({ items: value.items })
            }
            if (value.type === 'updateCraft') {
                console.log(value.recipes);
                this.setState({ learned_recipes: value.recipes })
            }
            if (value.type === 'updateEquipItems') {
                this.setState({ equipment_outfit: value.items })
            }
            if (value.type === 'updateSubItems') {
                this.setState({ secondary_inv_open: true });
                this.setState({ secondary_items: value.items });
                this.setState({ secondary_items_owner_id: value.ownerId });
                this.setState({ secondary_items_owner_type: value.ownerType });
            }
            if (value.type === 'addItems') {
                console.log(value.items);
                this.setState({ items: this.state.items.concat(value.items) })
            }
            if (value.type === 'addSubItems') {
                this.setState({ secondary_inv_open: true });
                this.setState({ secondary_items: this.state.secondary_items.concat(value.items) });
                this.setState({ secondary_items_owner_id: value.ownerId });
                this.setState({ secondary_items_owner_type: value.ownerType });
            }
            if (value.type === 'updateWeaponItems') {
                try {
                    this.setState({ equipment_weapon: value.items });
                    if (value.items !== undefined && value.items.length !== 0) {
                        if (this.state.selected_weapon_id == 0) {
                            this.setState({ craft: false });
                            this.setState({ selected_weapon_id: this.state.equipment_weapon[0].id });
                        }
                    } else {
                        this.setState({ craft: true });
                    }
                }
                catch (e) { }
            }
            if (value.type === 'updateLabel') {
                this.setState({ player_name: value.uname });
                this.setState({ player_id: value.uid });
            }
            if (value.type === 'updateMaxW') {
                this.setState({ weight_max: value.val })
            }
            if (value.type === 'updateSubMax') {
                this.setState({ secondary_weight_max: value.maxSum })
            }
            if (value.type === 'updateTrade') {
                this.setState({ trade_ids: value.idList })
            }
            if (value.type === 'updateSelectWeapon') {
                if (value.selectId > 0)
                    this.setState({ craft: false });
                this.setState({ selected_weapon_id: value.selectId });
            }
            if (value.type === 'weaponToInventory') {
                this.state.equipment_weapon.forEach((item) => {
                    if (value.itemId == item.id) {
                        this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) })
                        this.setState({ items: this.state.items.concat(item) })
                    }
                });
            }
            if (value.type === 'removeItemId') {
                this.state.items.forEach((item) => {
                    if (value.itemId == item.id) {
                        this.setState({ items: this.arrayRemove(this.state.items, item) })
                    }
                });
            }
            if (value.type === 'deleteItemById') {
                this.deleteItemById(value.id);
            }
            if (value.type === 'updateItemIdCount') {
                this.state.items.forEach((item) => {
                    if (value.itemId == item.id) {
                        let newItem = item;
                        this.setState({ items: this.arrayRemove(this.state.items, item) });
                        newItem.counti = value.count;
                        this.setState({ items: this.state.items.concat(newItem) });
                    }
                });
            }
            if (value.type === 'updateWeaponParams') {
                this.state.equipment_weapon.forEach((item, i) => {
                    if (value.itemId == item.id) {
                        let newItem = item;
                        this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) });
                        newItem.params = value.params;
                        this.setState({ equipment_weapon: this.state.equipment_weapon.concat(newItem) });
                    }
                });
            }
            if (value.type === 'secondary_inv') {
                this.setState({
                    secondary_inv_open: true,
                    secondary_items: value.items, // Массив с предметами вторичного инвентаря (багажник, склад и тд.)
                    secondary_items_owner_id: value.owner_id, // ID владельца
                    secondary_items_owner_type: value.owner_type, // Тип владельца
                })
            } else return;
        })

        if (this.state.selected_weapon_id === 0) this.setState({ craft: true });
        this.setState({ selected_weapon_item_id: this.getSelectedWeaponById().item_id });

        this.checkOutfit() // Правильное отображение иконок одежды и прочего outfit'a
        this.updateItemIcons('primary')
        this.updateItemIcons('secondary')
        this.sumWeightInventory()
        this.sumWeightSecondaryInventory()
    }

    componentWillUnmount() {
        EventManager.removeHandler('inventory');
        clearInterval(this.state.cooldownTick);
    }

    componentDidUpdate(prevProp, prevState) {

        if (this.state.equipment_outfit !== prevState.equipment_outfit) { // Обновляет отображение outfit'a при изменении this.state.equipment_outfit
            this.checkOutfit()
        }
        if (this.state.items !== prevState.items) {// Обновляем primary
            this.updateItemIcons('primary')
            this.sumWeightInventory()
        }
        if (this.state.secondary_items !== prevState.secondary_items) { // Обновляем secondary
            this.updateItemIcons('secondary')
            this.sumWeightSecondaryInventory()
        }
        if (this.state.trade_ids !== prevState.trade_ids) { // Показвыает в меню список ID игроков рядом при обновлени this.state.trade_ids
            this.updateTradeMenu()
        }
        if (this.state.loadw_ids !== prevState.loadw_ids) { // Показвыает в меню список ID игроков рядом при обновлени this.state.trade_ids
            this.updateLoadWMenu()
        }
        if (this.state.upgradew_ids !== prevState.upgradew_ids) { // Показвыает в меню список ID игроков рядом при обновлени this.state.trade_ids
            this.updateUpgradeWMenu()
        }
        if (this.state.selected_weapon_id !== prevState.selected_weapon_id) {
            if (this.state.selected_weapon_id === 0) this.setState({ craft: true });
            this.setState({ selected_weapon_item_id: this.getSelectedWeaponById().item_id });
        }
    }

    getSelectedWeaponById() {
        let item = { item_id: 0 }
        for (let i = 0; i < this.state.equipment_weapon.length; i++) {
            if (this.state.equipment_weapon[i].id === this.state.selected_weapon_id) {
                item = this.state.equipment_weapon[i];
            }
        }
        return item;
    }

    sumWeightInventory() {
        let items_inv = this.state.items;
        let sum = 0
        for (var i = 0; i < items_inv.length; i++) {
            sum += parseInt(items_inv[i].volume)
        }
        this.setState({ weight_now: sum })
    }

    sumWeightSecondaryInventory() {
        let items_secondary_inv = this.state.secondary_items;
        let sum = 0
        for (var i = 0; i < items_secondary_inv.length; i++) {
            sum += parseInt(items_secondary_inv[i].volume)
        }
        this.setState({ secondary_weight_now: sum })
    }

    numberToK(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
    }

    notifyToClient(text) {
        mp.trigger('client:inventory:notify', text); // eslint-disable-line
    }

    updateItemIcons(inventory) {
        let items_copy = []
        if (inventory === 'primary') {
            if (this.state.updateItemIcons_primary_timeout) return
            this.setState({ updateItemIcons_primary_timeout: true })
            items_copy = [...this.state.items]
        } else {
            if (this.state.updateItemIcons_secondary_timeout) return
            this.setState({ updateItemIcons_secondary_timeout: true })
            items_copy = [...this.state.secondary_items]
        }
        items_copy.forEach((item, i) => {
            items_copy[i].icon = "icon-item img-" + item.item_id;
        })
        inventory === 'primary' ?
            this.setState({ items: items_copy }, () => {
                this.setState({ updateItemIcons_primary_timeout: false });
                this.updateStacks('primary')
            })
            :
            this.setState({ secondary_items: items_copy }, () => {
                this.setState({ updateItemIcons_secondary_timeout: false });
                this.updateStacks('secondary')
            })
    }

    updateTradeMenu() {
        let menu = [...this.state.inter_menu]
        let index = -1
        menu.forEach((item) => {
            index = menu.indexOf(item)
            if (item.action === 'trade_id') {
                if (index !== -1) menu.splice(index, 1)
            } else {
                if (item.action !== 'close') menu[index].show = false
            }
        })
        let trade_ids_copy = [...this.state.trade_ids]
        trade_ids_copy.forEach((id) => {
            menu.unshift({ name: "ID: " + id, trade_player_id: id, action: "trade_id", show: true })
        })
        this.setState({ inter_menu: menu })
    }

    updateLoadWMenu() {
        let menu = [...this.state.inter_menu]
        let index = -1
        menu.forEach((item) => {
            index = menu.indexOf(item)
            if (item.action === 'loadw_id') {
                if (index !== -1) menu.splice(index, 1)
            } else {
                if (item.action !== 'close') menu[index].show = false
            }
        })
        let loadw_ids_copy = [...this.state.loadw_ids]
        loadw_ids_copy.forEach((item) => {
            menu.unshift({ name: item.name, loadw_id: item.id, action: "loadw_id", show: true })
        })
        this.setState({ inter_menu: menu })
    }

    updateUpgradeWMenu() {
        let menu = [...this.state.inter_menu]
        let index = -1
        menu.forEach((item) => {
            index = menu.indexOf(item)
            if (item.action === 'loadw_id') {
                if (index !== -1) menu.splice(index, 1)
            } else {
                if (item.action !== 'close') menu[index].show = false
            }
        })
        let upgradew_ids_copy = [...this.state.upgradew_ids]
        upgradew_ids_copy.forEach((item) => {
            menu.push({ name: item.name, upgradew: JSON.stringify(item.item), action: "upgradew_id", show: true })
        })
        this.setState({ inter_menu: menu })
    }

    updateStacks(inventory) {
        let items_copy = []
        if (inventory === 'primary') {
            items_copy = [...this.state.items]
        } else {
            items_copy = [...this.state.secondary_items]
        }
        let updatedItemsCounted = []
        items_copy.forEach((item) => {
            item = { ...item }
            delete item.id
            let isStack = true
            let found = false
            if (item.item_id == 8 || item.item_id == 41 ||
                item.item_id == 42 || item.item_id == 43 ||
                item.item_id == 44 || item.item_id == 50 ||
                item.item_id == 51 || item.item_id == 52 ||
                item.item_id == 53 || item.item_id == 252 ||
                item.item_id == 146 || item.item_id == 147 ||
                item.item_id >= 27 && item.item_id <= 30 ||
                item.item_id >= 138 && item.item_id <= 145 ||
                item.item_id >= 154 && item.item_id <= 157 ||
                item.item_id >= 163 && item.item_id <= 180 ||
                item.item_id >= 263 && item.item_id <= 277) {
                isStack = false
            }
            if (isStack) {
                updatedItemsCounted.forEach((itemCounted, i) => {
                    if (item.item_id === itemCounted.item_id && item.name === itemCounted.name && item.desc === itemCounted.desc && item.counti === itemCounted.counti && JSON.stringify(item.params) === JSON.stringify(itemCounted.params)) {
                        updatedItemsCounted[i].count++;
                        found = true;
                    }
                })
            }
            if (!found) {
                item.count = 1
                updatedItemsCounted.push(item)
            }
        })
        inventory === 'primary' ?
            this.setState({ itemsCounted: updatedItemsCounted })
            :
            this.setState({ secondary_itemsCounted: updatedItemsCounted })
    }

    getWeaponBorderColor(item_id) { // Возвращает цвет выделения оружия по item_id
        switch (true) {
            case item_id >= 54 && item_id <= 69:
                return '#4CAF50';
            case item_id >= 70 && item_id <= 84:
                return '#FFC107';
            case item_id >= 85 && item_id <= 93:
                return '#f24a4a';
            case item_id >= 127 && item_id <= 136:
                return '#795548';
            default:
                return '#48baf2';
        }
    }

    checkOutfit() { // Это выглядит как "эпичный пиздец", но оно очень хорошо работает :D (обновляет состояние предметов outfit)
        let foundOutfit = [];
        for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
            for (let j = 0; j < Object.values(this.state.outfitById)[i].length; j++) {
                for (let k = 0; k < this.state.equipment_outfit.length; k++) {
                    if (Object.values(this.state.outfitById)[i][j] === this.state.equipment_outfit[k].item_id) {
                        foundOutfit.push(i);
                        if (i < 12) {
                            this.setState(prevState => ({ ...prevState.outfit[0][i].equipped = true }))
                        } else {
                            this.setState(prevState => ({ ...prevState.outfit[1][i - 12].equipped = true }))
                        }
                    }
                }
            }
        }
        for (let i = 0; i < 16; i++) {
            if (!foundOutfit.includes(i)) {
                if (i < 12) {
                    this.setState(prevState => ({ ...prevState.outfit[0][i].equipped = false }))
                } else {
                    this.setState(prevState => ({ ...prevState.outfit[1][i - 12].equipped = false }))
                }
            }
        }
    }

    changeBtnCraft() {
        this.setState({ craft: !this.state.craft })
    }

    getActions(item, source) {
        if (source === 'outfit' && item.equipped === false) return; // Не открывать меню взаимодействия если ячейка outfit'a пустая
        if (this.isCooldownActive(item.item_id)) return;

        let actions = [];
        if(source === 'weapon' || source === 'outfit') actions = ["drop", "close"];
        else actions = ["give", "drop", "close"]; // Стандартные действия для всех предметов (передать, выбросить, закрыть)
        if (source === 'weapon') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('select') // Выбрать оружие
            actions.push('unloadW') // Выбрать оружие
        }
        if (this.state.itemsById.food.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('eat') // Съесть
        }
        if (this.state.itemsById.bag.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('openBag') // Открыть сумку

            if (source !== 'outfit')
                actions.push('put_on') // Надеть
            else if (source === 'outfit' && this.state.secondary_inv_open)
                actions.push('move') // Убрать в багажник
        }
        if (this.state.itemsById.rename.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('rename') // Открыть сумку
        }

        if (this.state.itemsById.countItems.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('countItems') // Посчитать
        }
        if (this.state.itemsById.weightGr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('weightGr') // Взвесить
        }
        if (this.state.itemsById.take1gr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('take1gr')
        }
        if (this.state.itemsById.take10gr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('take10gr')
        }
        if (this.state.itemsById.take50gr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('take50gr')
        }
        if (this.state.itemsById.drinks.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('drink') // Выпить
        }
        if (this.state.itemsById.consumable.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('consume') // Употребить
        }
        if (this.state.itemsById.fish.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('fish') // Рыбачить
        }
        if (this.state.itemsById.smoke.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('smoke') // Курить
        }
        if (this.state.itemsById.play.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('play') // Играть
        }
        if (this.state.itemsById.usable.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('use') // Использовать
        }
        if (this.state.itemsById.usablePlayer.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('usePlayer') // Использовать
        }
        if (this.state.itemsById.equipable.includes(item.item_id) && source !== 'weapon' && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('equip') // Экипировать
        }
        if (this.state.itemsById.putOnGun.includes(item.item_id) && source !== 'weapon' && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('put_on_gun') // Надеть на оружие
        }
        if (this.state.itemsById.ammo.includes(item.item_id) && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('loadw') // Зарядить оружие
            actions.push('split') // Зарядить оружие
        }
        /*if (this.state.itemsById.countPt.includes(item.item_id) && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('countPt') // Зарядить оружие
        }*/
        for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
            if (Object.values(this.state.outfitById)[i].includes(item.item_id) && source !== 'secondary_inv') {
                if (source !== 'outfit') {
                    actions.push('put_on') // Надеть
                    break;
                } else {
                    actions.push('take_off') // Снять
                    break;
                }
            }
        }
        if (this.state.secondary_inv_open && source !== 'secondary_inv' && source !== 'outfit' && source !== 'weapon') {
            actions.push('move') // Убрать в багажник
            let check_stack = this.state.itemsCounted.filter(obj => { return obj.item_id === item.item_id })
            if (check_stack !== undefined && check_stack[0].count > 1) actions.push('move_all') // Убрать всё
        }
        if (this.state.secondary_inv_open && source === 'secondary_inv') {
            actions.push('take') // Взять
            let check_stack = this.state.secondary_itemsCounted.filter(obj => { return obj.item_id === item.item_id })
            if (check_stack !== undefined && check_stack[0].count > 1) actions.push('take_all') // Взять всё
        }
        if (source === 'outfit') {
            if (this.checkItem(this.getOutfitByType(item.type)[0], 'outfit') !== null) {
                if (this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 263 || this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 264 || this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 252) {
                    actions.push('openBag') // Открыть сумку
                }

                if (this.state.itemsById.rename.includes(this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
                    actions.push('rename') // Открыть сумку
                }
            }

            if (this.state.secondary_inv_open)
                actions.push('move') // Убрать в багажник

            actions.push('take_off') // Снять
        }
        if (source === 'weapon') {
            actions.push('unequip') // Снять экипировку / Убрать в инвентарь
        }

        return actions
    }

    handlePos(e, item, source) { // Функция которая генерирует меню взаимодействия
        if (source === 'outfit' && item.equipped === false) return; // Не открывать меню взаимодействия если ячейка outfit'a пустая
        if (this.isCooldownActive(item.item_id)) return;
        this.setState(prevState => ({ ...prevState.inter_menu_selected.item = item, ...prevState.inter_menu_selected.source = source }))
        if (this.state.inter_show) {
            let menu = this.state.inter_menu
            for (let j = 0; j < menu.length; j++) {
                menu[j].show = false
            }
            this.setState({ inter_menu: menu, inter_show: false })
        }
        let menu = this.state.inter_menu
        let actions = [];
        if(source === 'weapon' || source === 'outfit') actions = ["drop", "close"];
        else actions = ["give", "drop", "close"]; // Стандартные действия для всех предметов (передать, выбросить, закрыть)
        if (source === 'weapon') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('select') // Выбрать оружие
            actions.push('unloadW') // Выбрать оружие
        }
        if (this.state.itemsById.food.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('eat') // Съесть
        }
        if (this.state.itemsById.bag.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('openBag') // Открыть сумку

            if (source !== 'outfit')
                actions.push('put_on') // Надеть
            else if (source === 'outfit' && this.state.secondary_inv_open)
                actions.push('move') // Убрать в багажник
        }
        if (this.state.itemsById.rename.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('rename') // Открыть сумку
        }

        if (this.state.itemsById.countItems.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('countItems') // Посчитать
        }
        if (this.state.itemsById.weightGr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('weightGr') // Взвесить
        }
        if (this.state.itemsById.take1gr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('take1gr')
        }
        if (this.state.itemsById.take10gr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('take10gr')
        }
        if (this.state.itemsById.take50gr.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('take50gr')
        }
        if (this.state.itemsById.drinks.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('drink') // Выпить
        }
        if (this.state.itemsById.consumable.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('consume') // Употребить
        }
        if (this.state.itemsById.fish.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('fish') // Рыбачить
        }
        if (this.state.itemsById.smoke.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('smoke') // Курить
        }
        if (this.state.itemsById.play.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('play') // Играть
        }
        if (this.state.itemsById.usable.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('use') // Использовать
        }
        if (this.state.itemsById.usablePlayer.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('usePlayer') // Использовать
        }
        if (this.state.itemsById.equipable.includes(item.item_id) && source !== 'weapon' && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('equip') // Экипировать
        }
        if (this.state.itemsById.putOnGun.includes(item.item_id) && source !== 'weapon' && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('put_on_gun') // Надеть на оружие
        }
        if (this.state.itemsById.ammo.includes(item.item_id) && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('loadw') // Зарядить оружие
            actions.push('split') // Зарядить оружие
        }
        /*if (this.state.itemsById.countPt.includes(item.item_id) && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
            actions.push('countPt') // Зарядить оружие
        }*/
        for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
            if (Object.values(this.state.outfitById)[i].includes(item.item_id) && source !== 'secondary_inv') {
                if (source !== 'outfit') {
                    actions.push('put_on') // Надеть
                    break;
                } else {
                    actions.push('take_off') // Снять
                    break;
                }
            }
        }
        if (this.state.secondary_inv_open && source !== 'secondary_inv' && source !== 'outfit' && source !== 'weapon') {
            actions.push('move') // Убрать в багажник
            let check_stack = this.state.itemsCounted.filter(obj => { return obj.item_id === item.item_id })
            if (check_stack !== undefined && check_stack[0].count > 1) actions.push('move_all') // Убрать всё
        }
        if (this.state.secondary_inv_open && source === 'secondary_inv') {
            actions.push('take') // Взять
            let check_stack = this.state.secondary_itemsCounted.filter(obj => { return obj.item_id === item.item_id })
            if (check_stack !== undefined && check_stack[0].count > 1) actions.push('take_all') // Взять всё
        }
        if (source === 'outfit') {
            if (this.checkItem(this.getOutfitByType(item.type)[0], 'outfit') !== null) {
                if (this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 263 || this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 264 || this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 252) {
                    actions.push('openBag') // Открыть сумку
                }

                if (this.state.itemsById.rename.includes(this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
                    actions.push('rename') // Открыть сумку
                }
            }

            if (this.state.secondary_inv_open)
                actions.push('move') // Убрать в багажник

            actions.push('take_off') // Снять
        }
        if (source === 'weapon') {
            actions.push('unequip') // Снять экипировку / Убрать в инвентарь
        }

        for (let i = 0; i < actions.length; i++) {
            for (let j = 0; j < menu.length; j++) {
                if (actions[i] === menu[j].action) {
                    menu[j].show = true
                }
            }
        }
        this.setState({ inter_menu: menu, inter_show: true })
        let window_width = window.screen.availWidth;
        let window_height = window.screen.availHeight;

        let x = ((e.clientX * 100) / window_width);
        let y = ((e.clientY * 100) / window_height);

        let height_element = 30;

        if (x > 90) {
            x = 89
        }
        if (y > 99 - height_element) {
            y = 99 - height_element
        }
        this.setState({ x: x, y: y });
    }

    giveItemMenu() { // Тут нужно получать ID ближайших игроков для передачи предмета
        /*let trade_ids_copy = []
        let max = 1000 // Эта строка для теста (генерирует рандомные ID игроков для торговли)
        let min = 1 // Эта строка для теста (генерирует рандомные ID игроков для торговли)
        for(let i = 0; i<6; i++){ // Эта строка для теста (генерирует рандомные ID игроков для торговли)
          trade_ids_copy.push(Math.floor(Math.random() * (max - min + 1) ) << 0) // Эта строка для теста (генерирует рандомные ID игроков для торговли)
        }
        this.setState({trade_ids: ['']}) // Записывает ID ближайших игроков для передачи предмета*/
        mp.trigger('client:inventory:giveItemMenu'); // eslint-disable-line
    }

    loadwItemMenu() { // Тут нужно получать ID ближайших игроков для передачи предмета
        let loadw_ids_copy = []
        for (let i = 0; i < this.state.equipment_weapon.length; i++) { // Эта строка для теста (получает всё экипированное оружие)
            loadw_ids_copy.push({ name: this.state.equipment_weapon[i].name, id: this.state.equipment_weapon[i].item_id }) // Эта строка для теста (получает всё экипированное оружие)
        }
        this.setState({ loadw_ids: loadw_ids_copy }) // Эта строка для теста (записывает всё экипированное оружие)
    }

    upgradewItemMenu() { // Тут нужно получать ID ближайших игроков для передачи предмета
        let upgradew_ids_copy = []
        for (let i = 0; i < this.state.equipment_weapon.length; i++) { // Эта строка для теста (получает всё экипированное оружие)
            upgradew_ids_copy.push({ name: this.state.equipment_weapon[i].name, item: this.state.equipment_weapon[i] }) // Эта строка для теста (получает всё экипированное оружие)
        }
        this.setState({ upgradew_ids: upgradew_ids_copy }) // Эта строка для теста (записывает всё экипированное оружие)
    }

    countPtItemMenu(item) { // Тут нужно получать ID ближайших игроков для передачи предмета
        this.notifyToClient('В коробке ~g~' + parseInt(item.counti) + 'пт.');
    }

    unloadWItemMenu(item) { // Тут нужно получать ID ближайших игроков для передачи предмета
        mp.trigger('client:inventory:unloadW', item.item_id); // eslint-disable-line
    }

    splitMenu(item, source) { // Тут нужно получать ID ближайших игроков для передачи предмета

        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    //this.setState({items: this.arrayRemove(this.state.items, item)})
                    mp.trigger('client:inventory:split', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    //this.setState({secondary_items: this.arrayRemove(this.state.secondary_items, item)})
                    mp.trigger('client:inventory:split', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    closeInterMenu(e, button) {
        switch (button.action) {
            case "close":
                break;
            case "select": // Взять в руки
                this.selectWeapon(this.state.inter_menu_selected.item)
                break;
            case "move": // Убрать в багажник
                this.moveItem(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "move_all": // Убрать весь стак в багажник/на склад и тд.
                this.moveAllItem(false, this.state.inter_menu_selected.item)
                break;
            case "take": // Взять
                this.moveToInventory(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "take_all": // Взять весь стак в инвентарь
                this.moveAllToInventory(false, this.state.inter_menu_selected.item)
                break;
            case "use": // Использовать
            case "consume": // Употребить
            case "fish": // Ловить
            case "play": // Играть
            case "smoke": // Курить
            case "eat": // Съесть
            case "drink": // Выпить
            case "weightGr": // Взвесить
                this.itemUse(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "usePlayer": // Выпить
                this.itemUsePlayer(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "countItems": // Посчитать
                this.itemCountItems(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "take1gr": // Взвесить
                this.itemTake1gr(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "take10gr": // Взвесить
                this.itemTake10gr(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "take50gr": // Взвесить
                this.itemTake50gr(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "openBag": // Открыть сумку
                this.itemOpenBag(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "rename": // Открыть сумку
                this.itemRename(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "infoItem": // Открыть сумку
                this.itemInfoItem(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "give": // Передать
                this.giveItemMenu();
                return;
            case "loadw": // Зарядить
                this.loadwItemMenu();
                return;
            case "split": // Зарядить
                this.splitMenu(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source);
                return;
            case "put_on_gun": // Экипировать
                this.upgradewItemMenu()
                return;
            case "countPt": // Посчитать патроны
                this.countPtItemMenu(this.state.inter_menu_selected.item);
                break;
            case "unloadW": // Посчитать патроны
                this.unloadWItemMenu(this.state.inter_menu_selected.item);
                break;
            case "trade_id": // Выбор ID, кому передать
                this.itemGive(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source, button.trade_player_id);
                break;
            case "loadw_id": // Выбор ID оружия для зарядки
                this.loadW(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source, button.loadw_id);
                break;
            case "upgradew_id": // Выбор ID оружия для зарядки
                this.upgradeW(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source, button.upgradew);
                break;
            case "drop": // Выкинуть
                this.itemDrop(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "take_off": // Снять
                this.itemTakeOff(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "equip": // Экипировать
                this.itemEquip(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "unequip": // Снять экипировку / Убрать в инвентарь
                this.itemUnequip(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            case "put_on": // Надеть
                this.itemPutOn(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
                break;
            default:
                break;
        }
        if (this.state.inter_show) {
            let menu = this.state.inter_menu
            for (let j = 0; j < menu.length; j++) {
                menu[j].show = false
            }
            this.setState(prevState => ({ ...prevState.inter_menu_selected.item = {}, ...prevState.inter_menu_selected.source = '' }))
            this.setState({ inter_menu: menu, inter_show: false })
        }
    }

    moveAllItem(all_items, item) { // Переместить всё в багажник/склад и тд.
        let items_copy = []
        if (!all_items && item !== undefined) {
            if (this.itemGetStack(item, 'inventory') === null) return;
            items_copy = this.itemGetStack(item, 'inventory')
        }
        if (all_items) {
            items_copy = [...this.state.items]
        }
        if (items_copy === null || items_copy.length === 0) return;

        if (all_items) {
            for (let i = 0; i < items_copy.length; i++) {
                if (this.checkItem(items_copy[i], 'inventory') !== null) {
                    let item = this.checkItem(items_copy[i], 'inventory', true)
                    setTimeout(() => {
                        this.setState({ items: this.arrayRemove(this.state.items, item) })
                        this.setState({ secondary_items: this.state.secondary_items.concat(item) })
                        //mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
                    }, 20);
                }
            }
            mp.trigger('client:inventory:moveToAll', this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
        }
        else {
            for (let i = 0; i < items_copy.length; i++) {
                if (this.checkItem(items_copy[i], 'inventory') !== null) {
                    let item = this.checkItem(items_copy[i], 'inventory', true)
                    if (this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max) {
                        this.notifyToClient('~r~Хранилище переполнено ;c');
                        return;
                    }
                    setTimeout(() => {
                        this.setState({ items: this.arrayRemove(this.state.items, item) })
                        this.setState({ secondary_items: this.state.secondary_items.concat(item) })
                        mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
                    }, 20);
                }
            }
        }
    }

    moveItem(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    if (this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max) {
                        this.notifyToClient('~r~Хранилище переполнено ;c');
                        return;
                    }
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    this.setState({ secondary_items: this.state.secondary_items.concat(item) })
                    // // // // mp.call ... переместить в багажник и удалить из инвентаря
                    mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
                }
                break;
            case 'outfit':
                item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    if (this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max) {
                        this.notifyToClient('~r~Хранилище переполнено ;c');
                        return;
                    }
                    this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
                    this.setState({ secondary_items: this.state.secondary_items.concat(item) })
                    mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
                    mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
                    // // // // mp.call ... переместить в багажник, снять с персонажа, и удалить из инвентаря
                }
                break;
            case 'weapon':
                if (this.checkItem(item, 'weapon') !== null) {
                    item = this.checkItem(item, 'weapon')
                    if (this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max) {
                        this.notifyToClient('~r~Хранилище переполнено ;c');
                        return;
                    }
                    this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
                        if (item.id === this.state.selected_weapon_id) {
                            if (this.state.equipment_weapon.length === 0) {
                                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
                            } else {
                                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
                            }
                        }
                    })
                    this.setState({ secondary_items: this.state.secondary_items.concat(item) })
                    mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
                    mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id, this.state.secondary_items_owner_type); // eslint-disable-line
                    // // // // mp.call ... переместить в багажник, снять оружие из экипировки, и удалить из инвентаря
                }
                break;
            default:
                break;
        }
    }

    moveAllToInventory(all_items, item) {
        let items_copy = []
        if (!all_items && item !== undefined) {
            if (this.itemGetStack(item, 'secondary_inv') === null) return;
            items_copy = this.itemGetStack(item, 'secondary_inv')
        }
        if (all_items) {
            items_copy = [...this.state.secondary_items]
        }
        if (items_copy === null || items_copy.length === 0) return;
        for (let i = 0; i < items_copy.length; i++) {
            if (this.checkItem(items_copy[i], 'secondary_inv') !== null) {
                let item = this.checkItem(items_copy[i], 'secondary_inv', true)
                if (this.state.weight_now + item.volume > this.state.weight_max) {
                    this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
                    return;
                }
                setTimeout(() => {
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                    this.setState({ items: this.state.items.concat(item) })
                    mp.trigger('client:inventory:moveFrom', item.id, item.item_id, this.state.secondary_items_owner_type); // eslint-disable-line
                }, 20);
            }
        }
    }

    moveToInventory(item, source) {
        switch (source) {
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    if (this.state.weight_now + item.volume > this.state.weight_max) {
                        if (item.item_id === 264)
                            this.notifyToClient('~r~Сумка в инвентарь не складывается, её можно только выкинуть, положить на склад, в багажник и так далее');
                        else
                            this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
                        return;
                    }
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                    this.setState({ items: this.state.items.concat(item) })
                    mp.trigger('client:inventory:moveFrom', item.id, item.item_id, this.state.secondary_items_owner_type); // eslint-disable-line
                    // // // // mp.call ... переместить в инвентарь и удалить из багажника
                }
                break;
            default:
                break;
        }
    }

    itemUse(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    this.setCooldown(item.item_id);
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    mp.trigger('client:inventory:use', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    this.setCooldown(item.item_id);
                    item = this.checkItem(item, 'secondary_inv')
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                    mp.trigger('client:inventory:use', item.id, item.item_id); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    deleteItemById(item_id){
        let item = this.getItemById(item_id, 'secondary_inv');
        if(item !== null) {
            if (this.checkItem(item, 'secondary_inv') !== null) {
                item = this.checkItem(item, 'secondary_inv');
                this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
                return;
            }
        }

        item = this.getItemById(item_id, 'inventory');
        if(item !== null) {
            if (this.checkItem(item, 'inventory') !== null) {
                item = this.checkItem(item, 'inventory');
                this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
            }
        }

        /*switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
                }
                break;
            default:
                break;
        }*/
    }

    getItemById(item_id, source){
        let item = null;
        switch (source) {
            case 'inventory':
                let items_copy = [...this.state.items]
                for (let i = 0; i < items_copy.length; i++) {
                    if (items_copy[i].id === item_id) {
                        item = items_copy[i];
                    }
                }
                break;
            case 'secondary_inv':
                let secondary_items_copy = [...this.state.secondary_items]
                for (let i = 0; i < secondary_items_copy.length; i++) {
                    if (secondary_items_copy[i].id === item_id) {
                        item = secondary_items_copy[i];
                    }
                }
                break;
            default:
                break;
        }
        return item;
    }

    itemUsePlayer(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    this.setCooldown(item.item_id);
                    item = this.checkItem(item, 'inventory');
                    mp.trigger('client:inventory:usePlayer', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    this.setCooldown(item.item_id);
                    item = this.checkItem(item, 'secondary_inv');
                    mp.trigger('client:inventory:usePlayer', item.id, item.item_id); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemCountItems(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.notifyToClient('~b~В пачке ' + item.counti + 'шт.');
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.notifyToClient('~b~В пачке ' + item.counti + 'шт.');
                }
                break;
            default:
                break;
        }
    }

    /*itemWeightGr(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.notifyToClient('~b~В пачке ' + item.counti + 'гр.');
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.notifyToClient('~b~В пачке ' + item.counti + 'гр.');
                }
                break;
            default:
                break;
        }
    }*/

    itemTake1gr(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    if (item.counti < 1) {
                        this.notifyToClient('~r~Пачка уже пустая.');
                        return;
                    }
                    mp.trigger('client:inventory:take1gr', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    if (item.counti < 1) {
                        this.notifyToClient('~r~Пачка уже пустая.');
                        return;
                    }
                    mp.trigger('client:inventory:take1gr', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemTake10gr(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    if (item.counti < 10) {
                        this.notifyToClient('~r~Пачка пустая или в ней нет 10-ти грамм.');
                        return;
                    }
                    mp.trigger('client:inventory:take10gr', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    if (item.counti < 10) {
                        this.notifyToClient('~r~Пачка пустая или в ней нет 10-ти грамм.');
                        return;
                    }
                    mp.trigger('client:inventory:take10gr', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemTake50gr(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    if (item.counti < 50) {
                        this.notifyToClient('~r~Пачка пустая или в ней нет 50-ти грамм.');
                        return;
                    }
                    mp.trigger('client:inventory:take50gr', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    if (item.counti < 50) {
                        this.notifyToClient('~r~Пачка пустая или в ней нет 50-ти грамм.');
                        return;
                    }
                    mp.trigger('client:inventory:take50gr', item.id, item.item_id, item.counti); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemOpenBag(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    mp.trigger('client:inventory:openBag', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'outfit':
                item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    mp.trigger('client:inventory:openBag', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    mp.trigger('client:inventory:openBag', item.id, item.item_id); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemRename(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    mp.trigger('client:inventory:rename', item.id, item.item_id, JSON.stringify(item.params)); // eslint-disable-line
                }
                break;
            case 'outfit':
                item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    mp.trigger('client:inventory:rename', item.id, item.item_id, JSON.stringify(item.params)); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    mp.trigger('client:inventory:rename', item.id, item.item_id, JSON.stringify(item.params)); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemInfoItem(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
                }
                break;
            case 'weapon':
                if (this.checkItem(item, 'weapon') !== null) {
                    item = this.checkItem(item, 'weapon')
                    this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
                }
                break;
            case 'outfit':
                item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
                }
                break;
            default:
                break;
        }
    }

    itemEquip(item, source) {
        for (let i = 0; i < this.state.equipment_weapon.length; i++) {
            if (this.state.equipment_weapon[i].item_id === item.item_id) {
                return; // Нельзя экипировать одинаковое оружие несколько раз
            }
        }
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
                    this.setState({ selected_weapon_id: item.id, craft: false })
                    // // // // mp.call ... экипировать и удалить из инвентаря
                    mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
                }
                break;
            /* case 'secondary_inv':
              if (this.checkItem(item, 'secondary_inv') !== null) {
                item = this.checkItem(item, 'secondary_inv')
                this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
                this.setState({ selected_weapon_id: item.id, craft: false })
                // // // // mp.call ... экипировать и удалить из багажника
              }
              break; */
            default:
                break;
        }
    }

    itemGive(item, source, trade_player_id) {
        this.setState({ trade_ids: [] });
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
                    // // // // mp.call ... передать и удалить из инвентаря (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)

                    mp.trigger('client:inventory:giveItem', item.id, item.item_id, trade_player_id); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                    console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
                    // // // // mp.call ... передать и удалить из багажника (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
                    mp.trigger('client:inventory:giveItem', item.id, item.item_id, trade_player_id); // eslint-disable-line
                }
                break;
            case 'outfit':
                this.notifyToClient('~r~Для начала уберите с экипировки');
                /*item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    this.setState({equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item)})
                    console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
                    // // // // mp.call ... передать и удалить с персонажа (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
                }*/
                break;
            case 'weapon':
                this.notifyToClient('~r~Для начала уберите с экипировки');
                /*if (this.checkItem(item, 'weapon') !== null) {
                    item = this.checkItem(item, 'weapon')
                    this.setState({equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item)}, () => {
                        if (item.id === this.state.selected_weapon_id) {
                            if (this.state.equipment_weapon.length === 0) {
                                this.setState({selected_weapon_id: 0}) // Убрать выделение с оружия если оно выбрано
                            } else {
                                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
                            }
                        }
                    })
                    console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
                    // // // // mp.call ... передать оружие и удалить из экипировки (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
                }*/
                break;
            default:
                break;
        }
    }

    loadW(item, source, loadw_id) {
        this.setState({ loadw_ids: [] });
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    //this.setState({ items: this.arrayRemove(this.state.items, item) })
                    // // // // mp.call ... зарядить оружие ID loadw_id и удалить из инвентаря патроны ID item.id
                    mp.trigger('client:inventory:loadWeapon', item.id, item.item_id, loadw_id, item.counti); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    upgradeW(item, source, upgradew) {
        this.setState({ upgradew_ids: [] });
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    //this.setState({ items: this.arrayRemove(this.state.items, item) })
                    // // // // mp.call ... зарядить оружие ID loadw_id и удалить из инвентаря патроны ID item.id
                    console.log(upgradew);
                    mp.trigger('client:inventory:upgradeWeapon', item.id, item.item_id, upgradew); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemDrop(item, source) {
        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    // // // // mp.call ... выбросить и удалить из инвентаря
                    mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                    // // // // mp.call ... выбросить и удалить из багажника

                    mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'outfit':
                item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
                    // // // // mp.call ... выбросить и снять с персонажа
                    mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
                    mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
                }
                break;
            case 'weapon':
                if (this.checkItem(item, 'weapon') !== null) {
                    item = this.checkItem(item, 'weapon')
                    this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
                        if (item.id === this.state.selected_weapon_id) {
                            if (this.state.equipment_weapon.length === 0) {
                                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
                            } else {
                                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
                            }
                        }
                    })
                    // // // // mp.call ... выбросить и удалить из экипировки

                    mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
                    mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemTakeOff(item, source) {
        switch (source) {
            case 'outfit':
                item = this.getOutfitByType(item.type)[0]
                if (this.checkItem(item, 'outfit') !== null) {
                    item = this.checkItem(item, 'outfit')
                    if (this.state.weight_now + item.volume > this.state.weight_max) {

                        if (item.item_id === 264)
                            this.notifyToClient('~r~Сумка в инвентарь не складывается, её можно только выкинуть, положить на склад, в багажник и так далее');
                        else
                            this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
                        return;
                    }
                    this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
                    this.setState({ items: this.state.items.concat(item) })
                    mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
                    // // // // mp.call ... снять с персонажа и переместить в инвентарь
                }
                break;
            default:
                break;
        }
    }

    itemPutOn(item, source) {
        for (let i = 0; i < this.state.outfit[0].length; i++) {
            if (this.state.outfit[0][i].type === this.getOutfitType(item) && this.state.outfit[0][i].equipped === true) {
                this.notifyToClient('~r~Предмет уже экипирован, для начала снимите его');
                return;
            }
        }
        for (let i = 0; i < this.state.outfit[1].length; i++) {
            if (this.state.outfit[1][i].type === this.getOutfitType(item) && this.state.outfit[1][i].equipped === true) return;
        }

        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
                    mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
                    // // // // mp.call ... надеть на персонажа и удалить из инвентаря
                }
                break;
            case 'secondary_inv':
                if (this.checkItem(item, 'secondary_inv') !== null) {
                    item = this.checkItem(item, 'secondary_inv')
                    this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
                    this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
                    mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemPutOnGun(item, source) {

        switch (source) {
            case 'inventory':
                if (this.checkItem(item, 'inventory') !== null) {
                    item = this.checkItem(item, 'inventory')
                    this.setState({ items: this.arrayRemove(this.state.items, item) })
                    this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
                    mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
                    // // // // mp.call ... надеть на персонажа и удалить из инвентаря
                }
                break;
            default:
                break;
        }
    }

    itemUnequip(item, source) {
        switch (source) {
            case 'weapon':
                if (this.checkItem(item, 'weapon') !== null) {
                    item = this.checkItem(item, 'weapon')
                    if (this.state.weight_now + item.volume > this.state.weight_max) {
                        this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
                        return;
                    }
                    this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
                        if (item.id === this.state.selected_weapon_id) {
                            if (this.state.equipment_weapon.length === 0) {
                                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
                            } else {
                                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
                            }
                        }
                    })
                    this.setState({ items: this.state.items.concat(item) })
                    // // // // mp.call ... снять оружие из экипировки и переместить в инвентарь
                    mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
                }
                break;
            default:
                break;
        }
    }

    itemUnequipWeapon(item, slot) {
        /*try {
            if (slot === 1)
                this.setState(prevState => ({...prevState.equipment_weapon[this.state.selected_weapon_id].params.slot1 = false}));
            else if (slot === 2)
                this.setState(prevState => ({...prevState.equipment_weapon[this.state.selected_weapon_id].params.slot2 = false}));
            else if (slot === 3)
                this.setState(prevState => ({...prevState.equipment_weapon[this.state.selected_weapon_id].params.slot3 = false}));
            else if (slot === 4)
                this.setState(prevState => ({...prevState.equipment_weapon[this.state.selected_weapon_id].params.slot4 = false}));
        }
        catch (e) {
            console.log(e);
        }*/
        try {
            mp.trigger('client:inventory:unEquipWeaponUpgrade', item.id, item.item_id, JSON.stringify(item.params), slot); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    selectWeapon(item) {
        if (this.checkItem(item, 'weapon') !== null) {
            item = this.checkItem(item, 'weapon')
            this.setState({ selected_weapon_id: item.id, selected_weapon_name: item.name })
            // // // // mp.call ... выбрать оружие для модификации и взять в руки

            mp.trigger('client:inventory:selectWeapon', item.id, item.item_id, item.params.serial); // eslint-disable-line
        }
    }

    itemGetStack(item, source) {
        item = this.checkItem(item, source)
        switch (source) {
            case 'inventory':
                let items_copy = [...this.state.items]
                let stack = []
                for (let i = 0; i < items_copy.length; i++) {
                    if (items_copy[i].item_id === item.item_id && items_copy[i].name === item.name &&
                        items_copy[i].desc === item.desc &&
                        items_copy[i].counti === item.counti && JSON.stringify(items_copy[i].params) === JSON.stringify(item.params)) {
                        stack = stack.concat([items_copy[i]]);
                    }
                }
                if (stack.length !== 0) return stack;
                break;
            case 'secondary_inv':
                let secondary_items_copy = [...this.state.secondary_items]
                let secondary_stack = []
                for (let i = 0; i < secondary_items_copy.length; i++) {
                    if (secondary_items_copy[i].item_id === item.item_id && secondary_items_copy[i].name === item.name &&
                        secondary_items_copy[i].desc === item.desc &&
                        secondary_items_copy[i].counti === item.counti && JSON.stringify(secondary_items_copy[i].params) === JSON.stringify(item.params)) {
                        secondary_stack = secondary_stack.concat([secondary_items_copy[i]]);
                    }
                }
                if (secondary_stack.length !== 0) return secondary_stack;
                break;
            default:
                break;
        }
        console.log('Предметы не найдены')
        return null;
    }

    checkItem(item, source, exact_id) { // Проверка и поиск предмета в том или ином source (инвентарь,багажник,экипировка и тд.)
        switch (source) { // exact_id заставляет дополнительно проверять предметы строго по их уникальному id (работает не во всех случаях)
            case 'inventory':
                let inventory = this.state.items;

                for (let i = 0; i < inventory.length; i++) {
                    /*// mp.trigger('client:events:debug', typeof inventory[i].params); // eslint-disable-line
                    // mp.trigger('client:events:debug', JSON.stringify(inventory[i].params)); // eslint-disable-line
                    // mp.trigger('client:events:debug', inventory[i].id == item.id); // eslint-disable-line
                    // mp.trigger('client:events:debug', inventory[i].id); // eslint-disable-line
                    // mp.trigger('client:events:debug', item.id); // eslint-disable-line*/
                    if (exact_id) {
                        if (inventory[i].item_id === item.item_id && inventory[i].name === item.name &&
                            inventory[i].desc === item.desc && inventory[i].id === item.id &&
                            inventory[i].counti === item.counti && JSON.stringify(inventory[i].params) === JSON.stringify(item.params)) {
                            return inventory[i];
                        }
                    } else {
                        if (inventory[i].item_id === item.item_id && inventory[i].name === item.name &&
                            inventory[i].desc === item.desc &&
                            inventory[i].counti === item.counti && JSON.stringify(inventory[i].params) === JSON.stringify(item.params)) {
                            return inventory[i];
                        }
                    }
                }
                break;
            case 'secondary_inv':
                let secondary_items = this.state.secondary_items;
                for (let i = 0; i < secondary_items.length; i++) {
                    if (exact_id) {
                        if (secondary_items[i].item_id === item.item_id && secondary_items[i].name === item.name &&
                            secondary_items[i].desc === item.desc && secondary_items[i].id === item.id &&
                            secondary_items[i].counti === item.counti && JSON.stringify(secondary_items[i].params) === JSON.stringify(item.params)) {
                            return secondary_items[i];
                        }
                    } else {
                        if (secondary_items[i].item_id === item.item_id && secondary_items[i].name === item.name &&
                            secondary_items[i].desc === item.desc &&
                            secondary_items[i].counti === item.counti && JSON.stringify(secondary_items[i].params) === JSON.stringify(item.params)) {
                            return secondary_items[i];
                        }
                    }
                }
                break;
            case 'weapon':
                let equipment = this.state.equipment_weapon;
                for (let i = 0; i < equipment.length; i++) {
                    if (equipment[i].item_id === item.item_id && equipment[i].name === item.name &&
                        equipment[i].desc === item.desc &&
                        equipment[i].counti === item.counti && JSON.stringify(equipment[i].params) === JSON.stringify(item.params)) {
                        return equipment[i];
                    }
                }
                break;
            case 'outfit':
                let outfit = this.state.equipment_outfit;
                for (let i = 0; i < outfit.length; i++) {
                    if (outfit[i].item_id === item.item_id && outfit[i].name === item.name &&
                        outfit[i].desc === item.desc &&
                        outfit[i].counti === item.counti && JSON.stringify(outfit[i].params) === JSON.stringify(item.params)) {
                        return outfit[i];
                    }
                }
                break;
            default:
                break;
        }
        console.log('Предмет не найден')
        return null;
    }

    getOutfitByType(type) {
        return this.state.equipment_outfit.filter(function (ele) {
            return this.state.outfitById[type].includes(ele.item_id);
        }.bind(this));
    }

    getOutfitType(item) {
        for (let i = 0; i < Object.entries(this.state.outfitById).length; i++) {
            if (Object.entries(this.state.outfitById)[i][1].includes(item.item_id)) {
                return Object.keys(this.state.outfitById)[i]
            }
        }
        return null;
    }

    arrayRemove(arr, value) { // Удаление предмета из массива
        return arr.filter(function (ele) {
            return ele !== value;
        });
    }

    closeSecondaryInventory() {
        this.setState({ secondary_inv_open: false });
        try {
            mp.trigger('client:inventory:statusSecondary', false);
        }
        catch (e) {}
    }

    closeInventory() {
        mp.trigger('client:inventory:status', false); // eslint-disable-line
        this.setState({ show: false, craft: false })

        this.setState({ secondary_inv_open: false });
        this.setState({ secondary_items: [] });
        this.setState({ secondary_items_owner_id: 0 });
        this.setState({ secondary_items_owner_type: 0 });
    }

    closeRecipesCraft() {
        this.setState({ recipes_craft: false, selected_recipe: {} })
    }
    selectCraft(item) {
        this.setState({ recipes_craft: true, selected_recipe: item })
    }
    craftItem() {
        console.log(this.state.craft_process)
        if (this.state.craft_process > -1) {            
            console.log('Откат на крафт ' + this.state.selected_recipe.craft_time + 'ms')
            this.notifyToClient('~r~Крафт в процессе!');
            return;
        }
        this.setState({ craft_process: 100 })
        setTimeout(() => {
            this.setState({ craft_process: 0 })
            /*for (let i = 0; i < this.state.selected_recipe.craft.length; i++) {
                if (!this.isItemInInventory(this.state.selected_recipe.craft[i])) {
                    console.log('Недостаточно ингридиентов')
                    this.notifyToClient('~r~Недостаточно ингридиентов ;c');
                    return;
                }
            }*/

            if (!this.isItemsInInventory(this.state.selected_recipe.craft)) {
                console.log('Недостаточно ингридиентов')
                this.notifyToClient('~r~Недостаточно ингредиентов ;c');
                return;
            }

            for (let i = 0; i < this.state.selected_recipe.craft.length; i++) {
                this.removeItemInInventory(this.state.selected_recipe.craft[i]);
            }

            //console.log('Успешный крафт')
            //this.notifyToClient('Успешный крафт');
            //mp.trigger craft tools and do mag  (this.state.selected_recipe - выбранный рецепт)
            mp.trigger('client:inventory:craft', this.state.selected_recipe.id); // eslint-disable-line
            return;
        }, this.state.selected_recipe.craft_time / 2)
        setTimeout(() => {
            this.setState({ craft_process: -1 })
        }, this.state.selected_recipe.craft_time)
    }
    isItemInInventory(id) {
        let check_item = this.state.items.filter(obj => { return obj.item_id.toString() === id.toString() })
        if (check_item !== undefined && check_item.length > 0) return true;
        else return false;
    }
    isItemsInInventory(craft, slot = -1) {
        let allowSlot = [];
        let allowAll = [];

        this.state.items.forEach((item) => {
            craft.forEach((cItem, idx) => {
                if (parseInt(cItem) === item.item_id && !allowSlot.includes(item.id) && allowSlot[idx] === undefined) {
                    allowSlot[idx] = item.id;
                    allowAll.push(item.id);
                }
            });
        });
        if (slot < 0)
            return craft.length === allowAll.length;
        //console.log(slot, allowSlot[slot], craft.length, allowSlot.length);
        return allowSlot[slot] !== undefined;
    }
    removeItemInInventory(id) {
        let isRemove = false;
        this.state.items.forEach((item) => {
            if (id == item.item_id && !isRemove) {
                isRemove = true;
                this.setState({ items: this.arrayRemove(this.state.items, item) })
                /*try {
                    mp.trigger('client:inventory:removeItemInInventory', item.id); // eslint-disable-line
                }
                catch (e) {}*/
            }
        });
        return isRemove
    }
    render() {
        if (!this.state.show) {
            return null;
        }

        return (
            <React.Fragment >
                <InteractionMenu
                    x={this.state.x}
                    y={this.state.y}
                    show={this.state.inter_show}
                    inter_menu={this.state.inter_menu}
                    closeInterMenu={this.closeInterMenu.bind(this)}
                />
                <Droppable that={this} className="bgForDrop droppable" id="drop"/>
                <div className="inv-box animated fadeIn" onContextMenu={(e) => e.preventDefault()}>
                    <div className="content-inventory">
                        <div className="inventory-main">
                            <div className="inv-row-main">
                                <div className="player-inv">
                                    <div className="title-inv">
                                        <span className="weight-title-inv">
                                            ({this.numberToK(this.state.weight_now)}/{this.numberToK(this.state.weight_max)})
                                        </span>
                                        <span className="title-inv__name">Инвентарь</span>
                                    </div>

                                    <Droppable className="object-inv-box droppable" id="take_off" that={this}>
                                        {/* Список предметов: */}
                                        {this.state.itemsCounted.map((item, i) => {
                                            const index = `item${i}`

                                            const actions = this.getActions(item, 'inventory') ? this.getActions(item, 'inventory').join(' ') : ''

                                            return (
                                                <Draggable that={this} id={`${index}_inv`} type={actions} item={item} key={index}>
                                                    <Droppable className="droppable" id="take_off" that={this}>
                                                        <div className="object-box" style={this.isCooldownActive(item.item_id) ? {opacity: 0.2} : {opacity:1}}
                                                            onContextMenu={(e) => this.handlePos(e, item, 'inventory')}>
                                                                
                                                            <div className={`img-inv-box ${item.icon}`}></div>
                                                            <div className="obj-inf-box">
                                                                <span className="obj-inf-title">{item.name}</span>
                                                                <span className="obj-inf-weight">{item.desc}</span>
                                                            </div>
                                                            {item.count > 1 ?
                                                                <div className="obj-inf-count">{item.count}</div> : null}

                                                        </div>
                                                    </Droppable>
                                                </Draggable>
                                            )
                                        })}
                                        {/* ---------------- */}
                                    </Droppable>

                                </div>
                                <div className="player-info">
                                    <div className="title-inv">
                                        <span className="title-inv__name">
                                            Экипировка
                                        </span>
                                    </div>
                                    <div className="player-title-info">
                                        <div className="player-inv-old">
                                            <span>{this.state.player_name}</span>
                                        </div>
                                    </div>
                                    <Droppable className="outfit-player-box droppable" id="put_on" that={this}>
                                            {this.state.outfit[0].map((item, i) => {
                                                const index = `item-outf${i}`
                                                console.log(item)
                                                if (item.equipped) {
                                                    return (
                                                        <Draggable that={this} id={index} type="take_off drop" item={item} key={index}>
                                                            <Droppable className="droppable" id="put_on" that={this}>
                                                                <div onContextMenu={(e) => this.handlePos(e, item, 'outfit')} className={`item__background outfit-pos-${item.iconName}`} key={index}>
                                                                    <img src={`https://state-99.com/client/images/icons/components/inventory/img/outfit/${item.iconName}.png`} />
                                                                </div>
                                                            </Droppable>
                                                        </Draggable>
                                                    )
                                                }

                                                return (
                                                    <Droppable className="droppable" key={index} id="put_on" that={this}>
                                                        <div onContextMenu={(e) => this.handlePos(e, item, 'outfit')} className={`item__background outfit-pos-${item.iconName}`} key={index}>
                                                            <img src={`https://state-99.com/client/images/icons/components/inventory/img/outfit/${item.iconName}.png`} style={{filter: 'grayscale(100%)', opacity: '0.7'}} />
                                                        </div>
                                                    </Droppable>
                                                )
                                            })}
                                            <div className="bottom-otf-box">
                                                {this.state.outfit[1].map((item, i) => {
                                                    const index = `items-outf${i}`
                                                    if (item.equipped) {
                                                        return (
                                                            <Draggable that={this} id={index} type="take_off drop" item={item} key={index}>
                                                                <Droppable className="droppable" id="put_on" that={this}>
                                                                    <div onContextMenu={(e) => this.handlePos(e, item, 'outfit')} className={`item__background outfit-pos-${item.iconName}`} key={index}>
                                                                        <img src={`https://state-99.com/client/images/icons/components/inventory/img/outfit/${item.iconName}.png`} />
                                                                    </div>
                                                                </Droppable>
                                                            </Draggable>
                                                        )
                                                    }
    
                                                    return (
                                                        <Droppable className="droppable" key={index} id="put_on" that={this}>
                                                            <div onContextMenu={(e) => this.handlePos(e, item, 'outfit')} className={`item__background outfit-pos-${item.iconName}`} key={index}>
                                                                <img src={`https://state-99.com/client/images/icons/components/inventory/img/outfit/${item.iconName}.png`} style={{filter: 'grayscale(100%)', opacity: '0.7'}} />
                                                            </div>
                                                        </Droppable>
                                                    )
                                                })}
                                            </div>
                                    </Droppable>
                                </div>
                                <div className="player-craft">
                                    <div className="title-inv">
                                        <div
                                            className="close-window-craft"
                                            onClick={() => this.closeInventory()}
                                        >
                                            <img src={`https://state-99.com/client/images/icons/components/inventory/img/close.svg`} width="40%" className="close-window-craft__img" />
                                        </div>
                                        <span className="title-inv__name">
                                            {this.state.craft ? 'Крафт' : 'Оружие'}
                                        </span>
                                    </div>
                                    <div className="menu-craft-change">
                                        {this.state.selected_weapon_id !== 0 ?
                                            <React.Fragment>
                                                <input type="radio" name="btn-craft-class" id="btn-craft-class1"
                                                    checked={!this.state.craft}
                                                    onChange={this.changeBtnCraft.bind(this)}></input>
                                                <label htmlFor="btn-craft-class1" className="btn-craft">
                                                    <span className="btn-craft__text">Настройки оружия</span>
                                                </label>
                                                <input type="radio" name="btn-craft-class" id="btn-craft-class2"
                                                    checked={this.state.craft}
                                                    onChange={this.changeBtnCraft.bind(this)}></input>
                                                <label htmlFor="btn-craft-class2" className="btn-craft">
                                                    <span className="btn-craft__text">Крафт</span>
                                                </label>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <input type="radio" name="btn-craft-class" id="btn-craft-class2"
                                                    checked={this.state.craft}
                                                    onChange={this.changeBtnCraft.bind(this)}></input>
                                                <label htmlFor="btn-craft-class2" className="btn-craft">
                                                    <span className="btn-craft__text">Крафт</span>
                                                </label>
                                            </React.Fragment>}
                                    </div>
                                    {this.state.craft ?
                                        <React.Fragment>
                                            {this.state.recipes_craft && Object.entries(this.state.selected_recipe).length !== 0 && this.state.selected_recipe.constructor === Object ?
                                                <React.Fragment>
                                                    <div className="craft-one-sp">
                                                        <div className='style-recipes-txt-craft'>
                                                            <span className="style-recipes-txt-craft__name">{this.state.selected_recipe.name}</span>
                                                            <span className="style-serial-recipes">{this.replaceAll(this.state.selected_recipe.desc, '~br~', '\n')}</span>
                                                        </div>
                                                    </div>
                                                    <div className="crafting-object-main">
                                                        <div className="liner-crafting-obj-bg">
                                                            <div className="liner-crafting-obj" style={{ width: this.state.craft_process + "%", transition: this.state.selected_recipe.craft_time/2+'ms'}}>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="main-box-craft-weapon">
                                                            <div className="square-box-craft-weapon sqr-wp-top">
                                                                {this.state.selected_recipe.craft.length > 0 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 0) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[0]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-top">
                                                                {this.state.selected_recipe.craft.length > 1 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 1) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[1]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-top">
                                                                {this.state.selected_recipe.craft.length > 2 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 2) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[2]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-top">
                                                                {this.state.selected_recipe.craft.length > 3 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 3) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[3]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-left sqr-wp-bottom">
                                                                {this.state.selected_recipe.craft.length > 4 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 4) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[4]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-bottom">
                                                                {this.state.selected_recipe.craft.length > 5 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 5) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[5]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-bottom">
                                                                {this.state.selected_recipe.craft.length > 6 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 6) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[6]}`}></div> : null}
                                                            </div>
                                                            <div className="square-box-craft-weapon sqr-wp-bottom">
                                                                {this.state.selected_recipe.craft.length > 7 ? <div className={`${this.isItemsInInventory(this.state.selected_recipe.craft, 7) ? 'select-craft' : null} icon-item img-${this.state.selected_recipe.craft[7]}`}></div> : null}
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="craft-btn-main">
                                                        <div className="craft-btn-obj" onClick={() => this.closeRecipesCraft()}>
                                                            <span>Закрыть</span>
                                                        </div>
                                                        <div className="craft-btn-obj" onClick={() => this.craftItem()}>
                                                            <span>Создать</span>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                    {this.state.learned_recipes.length === 0 ?
                                                        <div className="text-dd-ss-kk">У вас нет изученных рецептов</div>
                                                        :
                                                        <Animated animationIn="fadeIn" isVisible={true}>
                                                            <div className="craft-player-sp">
                                                                {this.state.learned_recipes.map((item, i) => {
                                                                    const index = `craftlayer${i}`
                                                                    return (
                                                                        <div key={index}
                                                                            className={`style-weapon-txt-craft`}
                                                                            onClick={() => this.selectCraft(item)}>
                                                                            <span className="style-weapon-txt-craft__name">{item.name}</span>
                                                                            <div className="style-serial-rec-o">{this.replaceAll(item.desc, '~br~', ' ')}</div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </Animated>
                                                    }

                                                </React.Fragment>

                                            }

                                            {/* <Animated animationIn="fadeIn" isVisible={true}>
                                                <div className="craft-player-sp">
                                                    {this.state.learned_recipes.map((item, i) => {
                                                        const index = `weaponplayer${i}`
                                                        return (
                                                            <div key={index}
                                                                 className={`style-weapon-txt-craft ${item.id === this.state.selected_weapon_id ? 'style-weapon-txt-craft-selected' : ''}`}
                                                                 onClick={() => this.selectWeapon(item)}
                                                                 onContextMenu={(e) => this.handlePos(e, item, 'weapon')}
                                                                 style={{borderColor: this.getWeaponBorderColor(item.item_id)}}>
                                                                <span>{item.name}</span>
                                                                <span className="style-serial-weapon">{item.desc}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                </Animated> */}
                                        </React.Fragment>
                                        :
                                        <React.Fragment>

                                            <Droppable className="weapon-player-equip droppable" id="equip" that={this}>
                                                {this.state.equipment_weapon.map((item, i) => {
                                                    const index = `weaponplayer${i}`

                                                    return (
                                                        <Draggable that={this} id={index} type="unequip drop" item={item} key={index}>
                                                            <Droppable className="droppable" id="equip" that={this}>
                                                                <div className="weapon-player-equip__container">
                                                                    <div
                                                                        className={`${item.id === this.state.selected_weapon_id ? "weapon-player-equip__select_selected" : 'weapon-player-equip__select'}`}
                                                                        onClick={() => this.selectWeapon(item)}
                                                                    />
                                                                    <div
                                                                        key={index}
                                                                        className={`style-weapon-txt-craft img-${item.item_id} ${item.id === this.state.selected_weapon_id ? 'style-weapon-txt-craft-selected' : ''}`}
                                                                        onClick={() => this.selectWeapon(item)}
                                                                        onContextMenu={(e) => this.handlePos(e, item, 'weapon')}
                                                                    >
                                                                        <span className="style-weapon-txt-craft__wname">{item.name}</span>
                                                                        <span className="style-serial-weapon">{item.desc}</span>
                                                                    </div>
                                                                </div>
                                                            </Droppable>
                                                        </Draggable>
                                                    )
                                                })}
                                            </Droppable>
                                            <div className="weapon-craft-box">
                                                <div className="box-img-equip-weapon">
                                                    <span className="box-img-equip-weapon__hint">Дополнительные обвесы</span>
                                                </div>
                                                <div className="main-box-craft-weapon">
                                                    <div className="square-box-craft-weapon sqr-wp-top">
                                                        <div onClick={() => { this.itemUnequipWeapon(this.getSelectedWeaponById(), 1) }}
                                                            className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot1 ? "weapon-mod-active weapon-supressor" : "weapon-mod weapon-supressor" : ""} />
                                                    </div>
                                                    <div className="square-box-craft-weapon sqr-wp-top">
                                                        <div onClick={() => { this.itemUnequipWeapon(this.getSelectedWeaponById(), 2) }}
                                                            className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot2 ? "weapon-mod-active weapon-flashlight" : "weapon-mod weapon-flashlight" : ""} />
                                                    </div>
                                                    <div className="square-box-craft-weapon sqr-wp-top">
                                                        <div onClick={() => { this.itemUnequipWeapon(this.getSelectedWeaponById(), 3) }}
                                                            className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot3 ? "weapon-mod-active weapon-grip" : "weapon-mod weapon-grip" : ""} />
                                                    </div>
                                                    <div className="square-box-craft-weapon sqr-wp-top">
                                                        <div onClick={() => { this.itemUnequipWeapon(this.getSelectedWeaponById(), 4) }}
                                                            className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot4 ? "weapon-mod-active weapon-scope" : "weapon-mod weapon-scope" : ""} />
                                                    </div>
                                                    {/* <div className="square-box-craft-weapon sqr-wp-left"></div>
                            <div className="square-box-craft-weapon"></div>
                            <div className="square-box-craft-weapon"></div>
                            <div className="square-box-craft-weapon"></div> */}
                                                </div>
                                            </div>

                                        </React.Fragment>
                                    }
                                </div>
                            </div>
                        </div>
                        {this.state.secondary_inv_open &&
                            <div className="invetory-trunk">
                                    <div>
                                        <Droppable className="trunk-info-menu droppable" id="move" that={this}>
                                            <div className="title-secondary-inv">
                                                <span className="weight-title-inv">
                                                    ({this.numberToK(this.state.secondary_weight_now)}/{this.numberToK(this.state.secondary_weight_max)})
                                                </span>
                                                {this.state.secondary_inv_open && this.state.secondary_items.length > 0 ? <div className="moveall_right" onClick={() => this.moveAllToInventory(true)}></div> : null}
                                                <div
                                                    className="close-window-craft"
                                                    onClick={() => this.closeSecondaryInventory()}
                                                >
                                                    <img src={`https://state-99.com/client/images/icons/components/inventory/img/close.svg`} width="40%" className="close-window-craft__img" />
                                                </div>
                                            </div>
                                            <div className="inventory__trunk__list">
                                            {this.state.secondary_itemsCounted.map((item, i) => {
                                                const index = `item${i}`

                                                const actions = this.getActions(item, 'secondary_inv') ? this.getActions(item, 'secondary_inv').join(' ') : ''

                                                return (
                                                    <Draggable that={this} id={index} type={actions} item={item} key={index}>
                                                        <Droppable className="droppable" id="move" that={this}>
                                                            <div className="object-box-trunk" key={index} style={this.isCooldownActive(item.item_id) ? {opacity: 0.2} : {opacity:1}}
                                                                onContextMenu={(e) => this.handlePos(e, item, 'secondary_inv')}>
                                                                <div className={`img-inv-box ${item.icon}`}></div>
                                                                <div className="obj-inf-box">
                                                                    <span className="obj-inf-title">{item.name}</span>
                                                                    <span className="obj-inf-weight">{item.desc}</span>
                                                                </div>
                                                                {item.count > 1 ?
                                                                    <div className="obj-inf-count">{item.count}</div> : null}
                                                            </div>
                                                        </Droppable>
                                                    </Draggable>
                                                )
                                            })}
                                            </div>
                                        </Droppable>
                                    </div>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Inventory;