import methods from '../modules/methods';
import user from '../user';

let discord = {};

discord.checker = function () {
    let label = 'Скачать бесплатно State-99';
    try {
        if (user.isLogin()) {
            if (mp.players.local.isDiving()) {
                label = 'Занимается дайвингом';
            } else if (mp.players.local.isSwimming() || mp.players.local.isSwimmingUnderWater()) {
                label = 'Плавает';
            } else if (mp.players.local.isFalling()) {
                label = 'Падает с высоты';
            } else if (mp.players.local.isRagdoll()) {
                label = 'Лежит на земле';
            } else if (mp.players.local.isDead()) {
                label = 'Отдыхает в коме';
            } else if (mp.players.local.isInAnyVehicle(false)) {
                label = 'В транспорте';
            } else if (mp.players.local.isRunning() || mp.players.local.isSprinting()) {
                label = 'Бегает';
            } else if (mp.players.local.isShooting()) {
                label = 'Стреляет';
            } else if (mp.players.local.isWalking()) {
                label = 'Бродит';
            } else if (mp.players.local.getVariable('isAfk') === true) {
                label = 'Чиллит';
            } else {
                label = 'Скачать бесплатно State-99';
            }
        } else {
            label = 'В меню авторизации';
        }
    }
    catch (e) {
        methods.debug('Discord Widget', e)
    }
    mp.discord.update(label, 'wixcore.net');
};

export default discord;