import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './helpers/serviceWorker';
import Noty from 'noty';
import './css/theme-noty.css';
import "../node_modules/noty/lib/noty.css";
import EventManager from "./helpers/events";
import './css/base.css'
import './css/adaptive.css'
import './fonts/style.css'
import './css/animate.css'
import './fonts/Montserrat/stylesheet.css'

import {
    EditorMain, Walkietalkie, AuthMain, Inventory, Phone, CircularMenu, AccountMenu,
    GunShop, CarRent, Dialog, Tatoo, Hud, IDCard, GovMenu, WorkID, License, Certificate,
    ModalInput, Notification, CarShop, Bank, Quickmenu
} from './components';

EventManager.addHandler('notify', value => {
    notify(value.type, value.layout, value.text, value.time)
});

Noty.setMaxVisible(3);

function notify(type, layout, message, time, theme) {
    // let types = ['information', 'error', 'success', 'warn'];
    var types = [
        'alert', 'error', 'success', 'information', 'warning'
    ];

    var layouts = [
        'top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 
        'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'
    ];
    
    var style = [ 
        '<div class="icons"><img src="https://push.wixcore.net/notify/alert.svg"></div>', 
        '<div class="icons"><img src="https://push.wixcore.net/notify/error.svg"></div>',
        '<div class="icons"><img src="https://push.wixcore.net/notify/success.svg"></div>',
        '<div class="icons"><img src="https://push.wixcore.net/notify/alert.svg"></div>',
        '<div class="icons"><img src="https://push.wixcore.net/notify/warning.svg"></div>'
    ]
    
    let notifyText = 'Информация!';
    switch (theme) {
        case 'error':
            notifyText = 'Ошибка!';
            break;
        case 'warning':
            notifyText = 'Предупреждение!';
            break;
        case 'info':
            notifyText = 'Информация!';
            break;
        case 'success':
            notifyText = 'Успешно!';
            break;
        default:
            break;
    }
    
    switch (type) {
        case 0:
            notifyText = 'Информация!';
        break;
        case 1:
            notifyText = 'Ошибка!';
        break;
        case 2:
            notifyText = 'Успешно!';
        break;
        case 3:
            notifyText = 'Предупреждение!';
        break;
        default:
        break;
    }

    message = '<div class="new_notify">' + style[type] + '<div class="descript">' + message + '</div></div>';
    
    new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: theme || 'wixcore',
        text: message,
        timeout: time,
        progressBar: true,
        animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
        }
    }).show();
}

setInterval(function () {
    mp.trigger('client:ui:checker'); // eslint-disable-line
}, 1000);


// notify(0, 1, 'Видимо произошла какая-то непредвиденная ошибка ', 10000)
// notify(1, 1, 'Видимо произошла какая-то непредвиденная ошибка', 10000)
// notify(2, 1, 'Видимо произошла какая-то непредвиденная ошибка', 10000)
// notify(3, 1, 'Видимо произошла какая-то непредвиденная ошибка', 10000)

const root = ReactDOM.createRoot(document.getElementById('ragemp-wixcore'));
root.render(
    <React.StrictMode>
        <EditorMain />
        <Walkietalkie />
        <div className="box" id="box">
            <AuthMain />
            <Inventory />
            <Phone />
            <CircularMenu />
            <AccountMenu />
            <GunShop />
            <CarRent />
            <Dialog />
            <Tatoo />
            <Hud />
            <IDCard />
            <GovMenu />
            <WorkID />
            <License />
            <Certificate />
            <ModalInput />
            <Notification />
            <CarShop />
            <Bank />
            <Quickmenu />
        </div>
    </React.StrictMode>
);

serviceWorker.unregister();

if (document.getElementById('disableZoom') === undefined) {
    if (window.outerWidth > 1900) {
        document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
    } else {
        document.getElementsByTagName('body')[0].style.zoom = 1;
    }
    window.onresize = () => {
        if (window.outerWidth > 1900) {
            document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
        } else {
            document.getElementsByTagName('body')[0].style.zoom = 1;
        }
    };
} else {
    document.getElementsByTagName('body')[0].style.zoom = 1;
}
