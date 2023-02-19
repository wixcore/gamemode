let camera = {};

camera.stopAfk = () => {
    mp.game.invoke('0x9E4CFFF989258472');
    mp.game.invoke('0xF4F2C0D4EE209E20');
}

export default camera;