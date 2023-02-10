import React from 'react';
import UMenu from './apps/UMenu';
import DefaultPage from './Android/DefaultPage';
import TopBar from './Android/TopBar';
import BottomBar from './Android/BottomBar';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EventManager from "../../../EventManager";
import iphoneBox from '../img/iphone_frame.png'
import PhoneBook from './Android/PhoneBook/PhoneBook';
import ProfileContact from './Android/PhoneBook/pages/ProfileContact';
import Scrollbar from './apps/Scrollbar';
import Modal from './apps/Modal';
import InputModal from './apps/InputModal';
import UTable from "./apps/UTable";
import Messenger from './apps/Messenger';
import Chat from './apps/Chat';
import EditContact from './Android/PhoneBook/pages/EditContact';
import Console from './Android/Console';
import Achiev from './apps/Achiev';
import AddChat from './apps/AddChat';
import Calls from './apps/Calls'
import CallingScreen from './Android/Calls/CallingScreen';

class Android extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '/phone/android/defaultpage',
            history: ['/phone/android/defaultpage'],
            rotate: false,
            bg_img_url: 'https://i.imgur.com/8lOLNXr',
            bg_color: `url('https://i.imgur.com/2sCY5Vo.png') center no-repeat`,
            top_bar: {
                time: '00:00', // Сервер должен регулировать время на телефоне/обновлять раз в минуту (скорее всего)
                dateFull: '01.01.1990',
                battery: 11, // max 11
                wifi: false,
                network: 5, // max 5
                temperature: '+21°C',
                date: '15 декабря',
                color_bar: ''
            },
            apps: [
                { link: "/phone/android/umenu", action: 'app', img: 'apps', name: 'App' },
                { link: "/phone/android/umenu", action: 'gps', img: 'gps', name: 'GPS' },
                { link: "/phone/android/phonebook", action: 'cont', img: 'cont', name: 'Контакты' },
                { link: "/phone/android/messenger", action: 'sms', img: 'sms', name: 'SMS' },
                { link: "/phone/android/console", action: 'console', img: 'console', name: 'Console' },
                { link: "/phone/android/calls", action: 'calls', img: 'uveh', name: 'Звонки' },
                { link: "/phone/android/callScreen", action: 'callScreen', img: 'uveh', name: 'Вызов' },
                { link: "/phone/android/achiev", action: 'achiev', img: 'achiev', name: 'Достижения' },
                { link: "/phone/android/umenu", action: 'invader', img: 'uveh' },
                /*{ link: "/phone/android/umenu", action: 'maze', img: 'maze' },
                { link: "/phone/android/umenu", action: 'pacific', img: 'pacific' },
                { link: "/phone/android/umenu", action: 'fleeca', img: 'fleeca' },
                { link: "/phone/android/umenu", action: 'blaine', img: 'blaine' },
                { link: "/phone/android/umenu", action: 'invader', img: 'invader' },
                { link: "/phone/android/umenu", action: 'invader', img: 'news' },
                { link: "/phone/android/umenu", action: 'invader', img: 'community' },
                { link: "/phone/android/umenu", action: 'invader', img: 'bcsd' },
                { link: "/phone/android/umenu", action: 'invader', img: 'gov' },
                { link: "/phone/android/umenu", action: 'invader', img: 'uveh' },
                { link: "/phone/android/umenu", action: 'invader', img: 'lspd2' },*/

            ],
            menu: {
                UUID: '11223',
                title: 'App',
                items: [
                    {
                        title: 'Загрузка...',
                        hidden: false,
                        umenu: [
                            /*{
                                title: "С картинкой",
                                text: "И описанием",
                                type: 0,
                                value: 'https://state-99.com/client/images/cars/Elegy_1.png',
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Итем по умолчанию",
                                text: "",
                                type: 1,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Checkbox",
                                text: "",
                                value: true,
                                type: 2,
                                clickable: false,
                                params: { name: "null"}
                            },
                            {
                                title: "User Name",
                                text: "",
                                img: "https://i.imgur.com/v4aju8F.jpg",
                                online: true,
                                type: 4,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Radio Input",
                                text: "",
                                scrollbarTitle: 'Выберите должность',
                                scrollbar: [{title: 'Name1', params: { name: 'memberNewRank'}}, {title: 'Name2', params: { name: 'memberNewRank'}}, {title: 'Name3', params: { name: 'memberNewRank'}}],
                                type: 5,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Картинка",
                                value: "https://i.imgur.com/v4aju8F.jpg",
                                type: 6,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Модальное окно",
                                modalTitle: 'Вы долбаеб?',
                                modalButton: ['Отмена', 'Создать'],
                                type: 7,
                                clickable: true,
                                params: { name: "null"}
                            },
                            {
                                title: 'Окно ввода текста',
                                modalTitle: 'Введите название раздела',
                                modalButton: ['Отмена', 'Создать'],
                                type: 8,
                                params: { name: "createFractionDepF" },
                                clickable: true,
                            },
                            {
                                title: 'Таблица',
                                columns: [
                                    { title: '№', field: 'id' },
                                    { title: 'Имя', field: 'name' },
                                    { title: 'Описание', field: 'text' },
                                ],
                                data: [
                                    {id: '#1', name: 'Name', text: 'text'},
                                    {id: '#1', name: 'Name', text: 'text'},
                                    {id: '#1', name: 'Name', text: 'text'},
                                    {id: '#1', name: 'Name', text: 'text'},
                                    {id: '#1', name: 'Name', text: 'text'},
                                    {id: '#1', name: 'Name', text: 'text'},
                                    {id: '#1', name: 'Name', text: 'text'},
                                ],
                                readonly: true,
                                type: 10,
                                params: { },
                                clickable: true,
                            },*/
                        ],
                    },
                ],
            },
            phonebook: {
                editing_contact: false,
                selected_contact: {/*
                    name: 'Godvil Moretti',
                    numbers: ['222-2346837'],
                    mail: 'godvil.moretti@ded.net',
                    img: 'https://a.rsg.sc//n/socialclub',*/
                },
                history: [

                    {
                        number: '222-2346837',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_made', // call_made - исходящий звонок \ call_received - принятый звонок
                        data: '20190212-1553'
                    },
                    {
                        number: '999-9999999',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_missed', // call_made - исходящий звонок \ call_received - принятый звонок
                        data: '20190212-1553'
                    },
                    {
                        number: '222-3567347',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_received',
                        data: '20190112-1453'
                    },
                    {
                        number: '222-9746753',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_made',
                        data: '20190212-1453'
                    },
                ],
                contact: [
                    {
                        name: 'Wika Aretti',
                        numbers: ['222-1234212', '555-6347544'],
                        mail: 'wika.aretti@ded.net',
                        isFavorite: false,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },
                    {
                        name: 'Godvil Moretti',
                        numbers: ['222-2346837'],
                        mail: 'godvil.moretti@ded.net',
                        isFavorite: true,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },
                    {
                        name: 'Nika Moretti',
                        numbers: ['222-9746753', '555-7653765'],
                        mail: 'nika.moretti@ded.net',
                        isFavorite: true,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },
                    {
                        name: 'Aika Aretti',
                        numbers: ['222-3567347', '555-5367433'],
                        mail: 'aika.aretti@ded.net',
                        isFavorite: false,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },

                ],
            },
            messenger: {
                current_chat: '2223567347'
            },
            chats: [
                /*{
                    phone_number: '2223567347',
                    is_online: true, // был(а) в сети 12.01.2019
                    last_login: '12.01.2020',
                    new_messages: 1,
                    message: [
                        { type: 2, text: 'Все хорошо, а у тебя как?', date: '10.01.2020', time: '12:00:02' },
                        { type: 1, text: 'Привет, как дела?', date: '10.01.2020', time: '12:00:02' },
                        //{type: 0, text: '1 января'},
                    ]
                },
                {
                    phone_number: '2229746753',
                    is_online: true, // был(а) в сети 12.01.2019
                    last_login: '12.01.2020',
                    new_messages: 3,
                    message: [
                        { type: 2, text: 'Все хорошо, а у тебя как?', date: '10.01.2020', time: '02:01:00' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '11.01.2020', time: '03:00:00' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '10.01.2020', time: '01:00:01' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '13.01.2020', time: '05:00:03' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '11.01.2020', time: '04:00:02' },
                    ]
                },
                {
                    phone_number: '2229746456',
                    is_online: true, // был(а) в сети 12.01.2019
                    last_login: '29.01.2020',
                    new_messages: 1,
                    message: [
                        { type: 2, text: 'Товар на месте?', date: '10.01.2020', time: '12:00:02' },
                    ]
                }*/
            ],
            console_message: ['Welcome To Console v0.1\nGNU/Linux 4.15.0-55-generic x86_64\n\nuse "help" command\n\n'],
            achiev: [
                {
                    title: 'Достижения',
                    achiev_map:
                        [
                            { name: 'Пополнить кошелек', desc: 'Для выполнения данный ачивки вам нужно зарабоать 100$ зараб', value: [50, 200], result: '$50', img: 'https://i.imgur.com/yrOXeE3.png', info_show: false, },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png'},
                        ],
                },
                {
                    title: 'Ежедневные задания',
                    achiev_map:
                        [
                            { name: 'Пополнить кошелек', desc: 'Для выполнения данный ачивки вам нужно зарабоать 100$', value: [99, 200], result: '$50000', img: 'https://i.imgur.com/6lgnAZs.png', info_show: false, },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 3], result: '$999', img: 'https://i.imgur.com/QAgIlRS.png', info_show: false, },
                        ],
                },
            ],
            // topbar_color: false,
            // Все нижние массивы это временно для демонстрации работы
            scrollbar: {
                show: false,
                title: 'Выберите ранг',
                list: [
                    { title: 'Ранг 1', checked: true, params: { name: "null" } },
                    { title: 'Ранг 2', params: { name: "null" } },
                    { title: 'Ранг 3', params: { name: "null" } },
                ],
            },
            modal: {
                show: false,
                title: 'Выберите ранг',
                text: 'Вы точно хотите всё это сделать? Обратной дороги нет, остановись',
                buttons: ['Нет', 'Да'],
            },
            inputmodal: {
                show: false,
                title: 'Выберите ранг',
                text: 'Вы точно хотите всё это сделать? Обратной дороги нет, остановись',
                value: '',
                buttons: ['Нет', 'Да'],
                params: { name: "null" },
            },
            phonecall: {
                number: '333345',
                name: 'Неизвестный',
                avatar: '',
                going: true
            }
        }
    }

    setCallNumber(phone) {
        // Сами вызываем, получаем информацию о номере и передаем

        if (phone === undefined)
            return;

        this.setState(prevState => ({ ...prevState.phonecall.number = phone, ...prevState.phonecall.going = false }))
        this.setLink(`/phone/android/callScreen`);

        try {
            mp.trigger('client:phone:call:setCall', phone); // eslint-disable-line
        } catch (e) {
        }
        console.log('setCallNumber', phone);
    }

    acceptCall() {
        this.setState(prevState => ({ ...prevState.phonecall.going = false }))
        this.setState(prevState => ({ ...prevState.phonecall.name = 'Неизвестный' }))
        this.setState(prevState => ({ ...prevState.phonecall.avatar = '' }))
        console.log('acceptCall');
        try {
            mp.trigger('client:phone:call:accept'); // eslint-disable-line
        } catch (e) {
        }
    }

    cancelCall() {
        this.setState(prevState => ({ ...prevState.phonecall.going = false }))
        try {
            mp.trigger('client:phone:call:cancel'); // eslint-disable-line
        } catch (e) {
        }
        console.log('cancelCall');
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Android.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('phone3', value => {
            if (value.type === 'updateMenu') {
                try {
                    this.setState({ menu: value.menu });
                    //UMenu.forceUpdate();
                    window.scrollTo(0, 0); //TODO Не работает((
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateApps') {
                try {
                    this.setState({ apps: value.apps });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updatePhonebook') {
                try {
                    this.setState({ phonebook: value.phonebook });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateMessenger') {
                try {
                    this.setState({ chats: value.chats });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateMessengerChat') {
                try {
                    this.setState(prevState => ({ ...prevState.chats[value.idx].message = value.messages }))
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'addMessengerMessage') {
                try {
                    console.log(value.phone, value.text, value.date, value.time);
                    this.newMessage(value.phone, value.text, value.date, value.time);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'selectChat') {
                try {
                    this.selectChat(value.phone);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'addConsoleCommand') {
                try {
                    this.consoleCommand(value.command);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateAchiev') {
                try {
                    this.setState({achiev: value.achiev});
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateTopBar') {
                this.setState({ top_bar: value.bar })
            }
            if (value.type === 'updateBg') {
                this.setState({ bg_img_url: value.url })
            }
            if (value.type === 'toPage') {
                this.setState({ path: value.page })
            }
            if (value.type === 'updatePhone') {
                this.setState({ phonecall: value.phonecall })
            }
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('phone3');
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.path !== prevState.path) {
            if (this.state.path !== this.state.history[this.state.history.length - 1])
                this.historyPush()
            window.scrollTo(0, 0);
            if (this.state.path !== '/phone/android/phonebook/profilecontact/editcontact' && this.state.phonebook.editing_contact) {
                this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
            }
        }
    }

    historyPush(customLink) {
        if (customLink === this.state.path) return;
        if (customLink !== undefined && customLink !== null && customLink !== '') {
            this.setState({ history: this.state.history.concat([customLink]), path: customLink })
            return;
        }
        if (this.state.path === '/phone/android/defaultpage') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '' }))
            this.setState({ bg_color: '' })
        }
        if (this.state.path === '/phone/android/phonebook/profilecontact') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }
        if (this.state.path === '/phone/android/phonebook') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
            this.setState({ bg_color: '#1C3AA9' })
        }
        if (this.state.path === '/phone/android/messenger') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }
        if (this.state.path === '/phone/android/phonebook/profilecontact/editcontact') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
            this.setState({ bg_color: '#1C3AA9' })
        }
        if (this.state.path === '/phone/android/console') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }
        if (this.state.path === '/phone/android/calls') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
            this.setState({ bg_color: '#fff' })
        }
        if (this.state.path === '/phone/android/callScreen') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = 'rgba(0, 0, 0, 0.34)' }))
            this.setState({ bg_color: `url(${this.state.bg_img_url}) no-repeat center` })
        }
        if (this.state.path === '/phone/android/achiev') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }

        this.setState({ history: this.state.history.concat([this.state.path]) })
    }

    historyClear() {
        this.setState({ history: ['/phone/android/defaultpage'] })
    }

    historyGoBack() {
        if (this.state.history.length > 1) {
            if (this.state.history[this.state.history.length - 2] === '/phone/android/phonebook/profilecontact/editcontact') {
                this.setState({ history: this.state.history.slice(0, -1) })
            }
            if (this.state.history[this.state.history.length - 2] === '/phone/android/messenger/addchat') {
                this.setState({ history: this.state.history.slice(0, -1) })
            }
            if (this.state.history[this.state.history.length - 2] === this.state.path) {
                this.setState({ history: this.state.history.slice(0, -1) })
            }
            if (this.state.history[this.state.history.length - 2].split('?')[0] === '/phone/android/umenu' &&
                this.state.history[this.state.history.length - 2].split('?').length > 1) {
                try {
                    console.log(this.state.history[this.state.history.length - 2])
                    if (this.state.history[this.state.history.length - 2].search('appmainpage') !== -1) {
                        mp.trigger('client:phone:apps', this.state.history[this.state.history.length - 2].split(':')[1]) // eslint-disable-line
                    } else {
                        let params1 = JSON.parse(
                            '{"' + this.state.history[this.state.history.length - 2].split('?')[1]
                                .split(':')[0].replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }
                        );
                        let params2 = {};
                        if (this.state.history[this.state.history.length - 2].split(':')[1] !== '')
                            params2 = JSON.parse(
                                '{"' + this.state.history[this.state.history.length - 2].split(':')[1]
                                    .replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }
                            );
                        mp.trigger('client:phone:callBack', params1.action, params1.UUID, parseInt(params1.id), JSON.stringify(params2)); // eslint-disable-line
                    }
                } catch (e) { console.log(e) }
            }
            setTimeout(() => {
                this.setState({
                    path: this.state.history[this.state.history.length - 2],
                }, () => this.setState({ history: this.state.history.slice(0, -1) }))
            }, 20);
        }
    }

    rotateAndroid() {
        this.setState({ rotate: !this.state.rotate }) //нужно придумать на какое действие перевернуть телефон
        try {
            mp.trigger('client:phone:rotate', this.state.rotate); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    clickApps(event, i) {
        
        let link = event.link.split('?')[0]

        switch(link) {
            case '/phone/android/umenu': {
                this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
                this.setState({ bg_color: '#000' })
                this.setState({ path: `${event.link}?appmainpage:${event.action}` })
    
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                    //#1C3AA9
                }
                break;
            }
            case '/phone/android/phonebook': {
                this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
                this.setState({ bg_color: '#1C3AA9' })
                this.setState({ path: event.link })
    
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/android/messenger': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/android/calls': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/android/console': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/android/achiev': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            default:
                break;
        }
    }

    saveContact(contact, selected_contact) {
        let index = this.state.phonebook.contact.findIndex(e => e === selected_contact);
        if (index !== -1) {
            this.setState(prevState => ({
                ...prevState.phonebook.contact[index] = contact
            }))
        } else {
            this.addContact(contact)
        }
        this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
    }

    addContact(contact) {
        contact.numbers = contact.numbers.filter(Boolean) // Удаляет пустые элементы массива
        if (contact.img === '' || contact.img === undefined) contact.img = 'https://a.rsg.sc//n/socialclub';
        this.setState(prevState => ({
            ...prevState.phonebook.contact = [...this.state.phonebook.contact].concat([contact])
        }))
        this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
    }

    getContactByNumber(number) {
        let data = null;
        this.state.phonebook.contact.map((contact) => {
            contact.numbers.forEach(function (el) {
                if (el === number) {
                    data = contact;
                }
            })
        })
        return data;
    }

    getContactByName(name) {
        let contact = this.state.phonebook.contact.filter(obj => {
            return obj.name === name
        })
        if (contact.length > 0) return contact[0];
        return null;
    }

    editContact() {
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = true }))
        this.setState({ path: '/phone/android/phonebook/profilecontact/editcontact' });
    }

    clickBack() {
        //this.setState({ topbar_color: false });
        this.historyGoBack();
        //this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
    }

    clickHome() {
        this.setState(prevState => ({ ...prevState.top_bar.color_bar = '' }))
        this.setState({ bg_color: '' })
        this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
        this.historyClear();
    }

    clickContact(contact) {
        console.log(contact)
        let data = null;
        if (contact.number !== undefined)
            data = this.getContactByNumber(contact.number)
        else
            data = this.getContactByName(contact.name)
        console.log(data)
        if (data !== null) {
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact = data }))
        } else {
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact.numbers = [contact.number] }))
        }
        this.setState({ path: '/phone/android/phonebook/profilecontact' }); //TODO Чет не работает
    }

    closeModal(boolean) {
        this.setState({ modal: { show: false } })
        if (this.state.path === "/phone/android/phonebook/profilecontact") {
            if (boolean) {
                this.historyGoBack();
                this.deleteContact(this.state.phonebook.selected_contact);
            }
        }
    }

    closeInputModal() {
        this.setState({ inputmodal: { show: false } })

        try {
            mp.trigger('client:phone:inputModal', false); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    openModal(title, text, buttons, params) {
        this.setState({
            modal: {
                show: true,
                title: title,
                text: text,
                buttons: buttons,
                params: params
            }
        });
    }

    openInputModal(title, buttons, value, params) {
        this.setState({
            inputmodal: {
                show: true,
                title: title,
                value: value,
                buttons: buttons,
                params: params
            }
        });

        try {
            mp.trigger('client:phone:inputModal', true); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    closeScrollbar() {
        this.setState({ scrollbar: { show: false } })
    }

    openScrollbar(title, items) {
        let data = {
            show: true,
            title: title,
            list: items,
        };
        this.setState({ scrollbar: data });
    }

    // Console
    consoleCommand(command) {
        let console_messages = [...this.state.console_message];
        console_messages = [command].concat(console_messages)
        console.log(console_messages)
        if (console_messages.length > 99) console_messages.splice(-1, 1);
        this.setState({ console_message: console_messages });
    }

    // CHAT
    sendMessage(current_chat, chat) {
        let ind = -1;
        this.state.chats.forEach((e, i) => {
            if (e.phone_number === current_chat) {
                ind = i;
            }
        })
        console.log(chat);
        if (ind !== -1) {
            let chats = this.state.chats;
            chats[ind] = chat;
            this.setState({ chats: chats })
        } else {
            //console.log(chat)
            this.setState({ chats: [...this.state.chats, chat] })
        }
    }

    newMessage(phone_number, text, date, time) {
        // {
        //   phone_number: '222-3567347',
        //   is_online: true, // был(а) в сети 12.01.2019
        //   last_login: '12.01.2020',
        //   new_messages: 1,
        //   message: [
        //     { type: 2, text: 'Все хорошо, а у тебя как?', date: '10.01.2020', time: '12:00:02' },
        //     { type: 1, text: 'Привет, как дела?', date: '10.01.2020', time: '12:00:02' },
        //     { type: 0, text: '1 января' },
        //   ]
        // }
        let index = this.state.chats.findIndex(e => e.phone_number === phone_number);
        if (index !== -1) {
            this.setState(prevState => ({
                ...prevState.chats[index].message = [...this.state.chats[index].message]
                    .concat([{ type: 1, text: text, date: date, time: time }])
            }));
            this.setState(prevState => ({ ...prevState.chats[index].new_messages = this.state.chats[index].new_messages++ }));
        } else {
            this.setState(prevState => ({
                ...prevState.chats = [...this.state.chats]
                    .concat([
                        {
                            phone_number: phone_number,
                            is_online: false, // был(а) в сети 12.01.2019
                            last_login: date,
                            new_messages: 1,
                            message: [
                                { type: 1, text: text, date: date, time: time },
                            ]
                        }
                    ])
            }));
        }
    }

    selectChat(phone_number) {
        let index = this.state.chats.findIndex(e => e.phone_number === phone_number);
        if (index !== -1) {
            this.setState(prevState => ({ ...prevState.chats[index].new_messages = 0 }))

            try {
                mp.trigger('client:phone:selectChat', phone_number, index); // eslint-disable-line
            } catch (e) {
            }
        }
        this.setState(prevState => ({ ...prevState.messenger.current_chat = phone_number }), () => {
            this.setState({ path: "/phone/android/messenger/chat" })
        });
    }

    favoriteContact(contact) {
        let index = this.state.phonebook.contact.findIndex(e => e === contact);
        if (index !== -1) {
            this.setState(prevState => ({ ...prevState.phonebook.contact[index].isFavorite = !this.state.phonebook.contact[index].isFavorite }))
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact = this.state.phonebook.contact[index] }))

            try {
                mp.trigger('client:phone:favoriteContact', JSON.stringify(contact)); // eslint-disable-line
            } catch (e) {
            }
        }
    }

    deleteContact(contact) {

        this.historyGoBack()
        let newContacts = [...this.state.phonebook.contact]
        let index = newContacts.findIndex(e => e === contact);
        if (index !== -1) {
            newContacts.splice(index, 1)
            console.log(newContacts)
            this.setState(prevState => ({
                ...prevState.phonebook.contact = newContacts
            }))
        }

    }

    deleteChat(phone_number) {        
        this.historyGoBack()
        let newChats = [...this.state.chats]
        let index = newChats.findIndex(e => e.phone_number === phone_number);
        if (index !== -1) {
            newChats.splice(index, 1)
            console.log(newChats)
            this.setState(prevState => ({
                ...prevState.chats = newChats
            }))
        }
        try {
            mp.trigger('client:phone:deleteChat', phone_number); // eslint-disable-line
        } catch (e) {
        }
    }

    setLink(link) {
        this.setState({ path: link })
    }
    openInfoShow(achievIndex, index) {
        this.setState(prev => ({ ...prev.achiev[achievIndex].achiev_map[index].info_show = !this.state.achiev[achievIndex].achiev_map[index].info_show }))
    }

    render() {
        const bg = {
            backgroundImage: this.state.bg_color,
        };
        if (this.state.path === '/phone/android/defaultpage')
            bg.backgroundImage = `url(${this.state.bg_img_url})`;
        return (
            <React.Fragment>
                <div onContextMenu={() => this.rotateAndroid()} className={this.state.rotate ? "android-phone rotate-androind" : "android-phone"}>
                    <img className="phone__box" src={`https://state-99.com/client/images/icons/components/phone/img/iphone_frame.png`} />
                    <div className="phone-gradient">
                        <div className="phone-bg" style={bg}>
                            <div className={this.state.rotate ? "rotate-components" : 'main-phone-box-flex'}>
                                <TopBar data={this.state.top_bar} />
                                <Router>
                                    <Route exact path="/phone/android/defaultpage">
                                        <DefaultPage historyPush={this.historyPush.bind(this)} data={this.state.apps}
                                            clickApps={this.clickApps.bind(this)} top_bar={this.state.top_bar} />
                                    </Route>
                                    <Scrollbar data={this.state.scrollbar} closeScrollbar={this.closeScrollbar.bind(this)} />
                                    <Modal data={this.state.modal} closeModal={this.closeModal.bind(this)} />
                                    <InputModal data={this.state.inputmodal}
                                        closeInputModal={this.closeInputModal.bind(this)} />
                                    <Route exact path="/phone/android/umenu">
                                        <UMenu historyPush={this.historyPush.bind(this)} data={this.state.menu}
                                            openModal={this.openModal.bind(this)} path={this.state.path}
                                            openInputModal={this.openInputModal.bind(this)}
                                            openScrollbar={this.openScrollbar.bind(this)} rotate={this.state.rotate} />
                                    </Route>
                                    <Route exact path="/phone/android/utable">
                                        <UTable historyPush={this.historyPush.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/android/console">
                                        <Console console_message={this.state.console_message} consoleCommand={this.consoleCommand.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/android/calls">
                                        <PhoneBook
                                            onCall={this.setCallNumber.bind(this)}
                                            historyPush={this.historyPush.bind(this)} data={this.state.phonebook}
                                            clickContact={this.clickContact.bind(this)}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            defaultValue={'calls'}
                                            going={this.state.phonecall.going}
                                            onAccept={this.acceptCall.bind(this)}
                                            onDecline={this.cancelCall.bind(this)}
                                        />
                                    </Route>
                                    <Route exact path="/phone/android/callScreen">
                                        <CallingScreen
                                            onCall={this.setCallNumber.bind(this)}
                                            number={this.state.phonecall.number}
                                            name={this.state.phonecall.name}
                                            avatar={this.state.phonecall.avatar}
                                            setLink={this.setLink.bind(this)}
                                            going={this.state.phonecall.going}
                                            onAccept={this.acceptCall.bind(this)}
                                            onDecline={this.cancelCall.bind(this)}
                                        />
                                    </Route>
                                    <Route exact path="/phone/android/achiev">
                                        <Achiev data={this.state.achiev} openInfoShow={this.openInfoShow.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/android/phonebook">
                                        <PhoneBook
                                            onCall={this.setCallNumber.bind(this)}
                                            historyPush={this.historyPush.bind(this)} data={this.state.phonebook}
                                            clickContact={this.clickContact.bind(this)}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            defaultValue={'calls'}
                                            going={this.state.phonecall.going}
                                            onAccept={this.acceptCall.bind(this)}
                                            onDecline={() => console.log(`Ты отменил вызов от ${this.state.phonecall.number}`)}
                                        />
                                    </Route>
                                    <Route exact path="/phone/android/phonebook/profilecontact">
                                        <ProfileContact historyPush={this.historyPush.bind(this)}
                                            data={this.state.phonebook}
                                            deleteContact={this.deleteContact.bind(this)}
                                            historyGoBack={this.historyGoBack.bind(this)}
                                            setCallNumber={this.setCallNumber.bind(this)}
                                            selectChat={this.selectChat.bind(this)}
                                            editContact={this.editContact.bind(this)}
                                            openModal={this.openModal.bind(this)}
                                            profile_contact_btn={this.state.profile_contact_btn} />
                                    </Route>
                                    <Route exact path="/phone/android/phonebook/profilecontact/editcontact">
                                        <EditContact historyGoBack={this.historyGoBack.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            addContact={this.addContact.bind(this)}
                                            saveContact={this.saveContact.bind(this)}
                                            selected_contact={this.state.phonebook.selected_contact}
                                            editing_contact={this.state.phonebook.editing_contact}
                                            clickContact={this.clickContact.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/android/messenger">
                                        <Messenger data={this.state.chats}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            selectChat={this.selectChat.bind(this)}
                                            setLink={this.setLink.bind(this)}/>
                                    </Route>
                                    <Route exact path="/phone/android/messenger/addchat">
                                        <AddChat data={this.state.chats}
                                        sendMessage={this.sendMessage.bind(this)} time={this.state.top_bar.time} date={this.state.top_bar.dateFull}
                                        getContactByNumber={this.getContactByNumber.bind(this)}
                                        setLink={this.setLink.bind(this)}
                                        historyGoBack={this.historyGoBack.bind(this)}/>
                                    </Route>
                                    <Route exact path="/phone/android/messenger/chat">
                                        <Chat data={this.state.chats} messenger={this.state.messenger}
                                            sendMessage={this.sendMessage.bind(this)} time={this.state.top_bar.time} date={this.state.top_bar.dateFull}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            openModal={this.openModal.bind(this)}
                                            deleteChat={this.deleteChat.bind(this)}
                                            />
                                    </Route>
                                    <Redirect to={this.state.path} push />
                                </Router>
                                <Router>
                                    <BottomBar
                                        clickBack={this.clickBack.bind(this)}
                                        clickHome={this.clickHome.bind(this)}
                                        rotateAndroid={this.rotateAndroid.bind(this)}
                                        data={this.state.apps}
                                        clickApps={this.clickApps.bind(this)}
                                        isMainScreen={this.state.path === '/phone/android/defaultpage'}
                                    />
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Android;
