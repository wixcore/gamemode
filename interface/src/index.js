import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Noty from 'noty';
import './css/theme-noty.css';
import "../node_modules/noty/lib/noty.css";
import "animate.css"

import EventManager from "./EventManager";

EventManager.addHandler('notify', value => {
    notify(value.type, value.layout, value.text, value.time)
});

Noty.setMaxVisible(3);


/*
*
* theme: error, warning, info, success
*
*/

/*
* 0 = Info
* 1 = Warn
* 2 = Success
* 3 = White
* */

function notify(type, layout, message, time, theme) {
    let types = ['information', 'error', 'success', 'warn'];
    let layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'];
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
        case 1:
            notifyText = 'Ошибка!';
            break;
        case 3:
            notifyText = 'Предупреждение!';
            break;
        case 0:
            notifyText = 'Информация!';
            break;
        case 2:
            notifyText = 'Успешно!';
            break;
        default:
            break;
    }
    message = `
    <div class="message__notify__container message__notify__color__${type}">
        <span class="message__notify__type">${notifyText}</span>
        <span class="message__notify">${message}</span>
    </div>`;
    let ntf = new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: theme || 'dednet',
        text: message,
        timeout: time,
        progressBar: false,
        animation: {
            open: 'animated fadeInLeft',
            close: 'animated fadeOutLeft'
        }
    });
    ntf.show();
    /*ntf.onClose((id, type) => {

    });*/
}

setInterval(function () {
    try {
        mp.trigger('client:ui:checker'); // eslint-disable-line
    }
    catch (e) {
    }
}, 1000);

/*notify(0, 1, 'Видимо произошла какая-то непредвиденная ошибка ', 5000000)
notify(1, 1, 'Видимо произошла какая-то непредвиденная ошибка', 300000)
notify(2, 1, 'Видимо произошла какая-то непредвиденная ошибка', 2000000)
notify(3, 1, 'Видимо произошла какая-то непредвиденная ошибка', 2000000)*/

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (document.getElementById('disableZoom') === undefined) {
    if (window.outerWidth > 1900)
        document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
    else
        document.getElementsByTagName('body')[0].style.zoom = 1;

    window.onresize = () => {
        if (window.outerWidth > 1900)
            document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
        else
            document.getElementsByTagName('body')[0].style.zoom = 1;
    };
}
else
    document.getElementsByTagName('body')[0].style.zoom = 1;
