import React from 'react';
import './css/main.css'
import Header from './components/Header';
import Content from './components/Content'
import EventManager from "../../EventManager";

class AccountMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            panels: [
                {name: 'Общее', id: 'accmenu-main'},
                {name: 'Имущество', id: 'accmenu-property'},
                {name: 'FAQ', id: 'accmenu-faq'},
                {name: 'Обращения', id: 'accmenu-reports'},
                {name: 'Настройки', id: 'accmenu-settings'},
                {name: 'Квесты', id: 'accmenu-quests'},
                //{name: 'Донат', id: 'accmenu-donat'}
            ],
            activePage: 0,
            accountId: 1,
            nick: 'James Lantana',
            balance: 10000000,
            initValueReports: null,
            generalData: {
                nickname: "Andrey Knyazev",
                fraction: "LSPD",
                gender: "Мужской",
                age: "30",
                husband: "Name Name",
                hours: "300",
                lastlogin: "01.07.2020 12:23",
                created: "01.05.2020 11:00",
                friends: 100,
                maxFriends: 100,
                death: 32,
                maxdeath: 100,
                kills: 100,
                maxkills: 100,
                status: "Гражданин",
                statusDate: "_________",
                pocketmoney: "100000000",
                cardmoney: "30000000",
                medDate: "01.01.2020",
                medPercent: "активна",
                medActive: 100
            },
            generalList: [
                {title: 'Репутация', subtitle: '12323'},
            ],

            propertyHouse: {
                type: 'Загрузка',
                name: 'Загрузка',
                address: 'Загрузка',
                doors: 'Загрузка',
                roommate: 0,
                carplace: 'Загрузка',
                gprice: 'Загрузка'
            },
            propertyBusiness: [
                {
                    type: 1,
                    title: 'Склад',
                    price: '1250000',
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.13',
                    doors: 'Закрыты',
                    img: 'https://state-99.com/client/images/mmenu/stock.jpg'
                },
                {
                    type: 2,
                    title: 'Бизнес',
                    price: '1777000',
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.14',
                    doors: 'Открыты',
                    img: 'https://state-99.com/client/images/mmenu/office.jpg'
                },
                {
                    type: 0,
                    title: 'Квартира',
                    price: '1777000',
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.14',
                    doors: 'Открыты',
                    img: 'https://state-99.com/client/images/mmenu/condo.jpg'
                },
                {
                    type: 0,
                    title: 'Апартаменты',
                    price: '1777000',
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.14',
                    doors: 'Открыты',
                    img: 'https://state-99.com/client/images/mmenu/office.jpg'
                },
                {
                    type: 0,
                    title: 'Яхта',
                    price: '1777000',
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.14',
                    doors: 'Открыты',
                    img: 'https://state-99.com/client/images/mmenu/yacht.jpg'
                }
            ],
            propertyCars: [
                {
                    type: 'Автомобиль',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Neon',
                    vin: 1337,
                    carclass: 'A',
                    def: 'Есть',
                    number: 'NUMBER'
                }
            ],

            reportData: [
                [
                    {
                        status: 0,
                        type: 0,
                        text: "Здравствуйте! помогите решить проблему с покупкой дома",
                        time: "01.07.2020 | 21:00",
                        number: 123123,
                        dialog: [

                        ]
                    }
                ],
                [
                    {
                        status: 0,
                        type: 1,
                        text: "Здравствуйте! помогите решить проблему с покупкой дома",
                        time: "01.07.2020 | 21:00",
                        number: 123123,
                        dialog: [
                            {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                            {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'},
                            {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                            {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'},
                            {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                            {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'},
                            {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                            {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'}
                        ]
                    }
                ]
            ],

            questData: [
                {
                    title: 'Фруктовый вор', subtitle: '3 задания', done: true, tasks: [
                        {title: 'Кража апельсинов', text: 'Украсть 2 кг апельсин', reward: '$ 5 000', complete: 0},
                        {title: 'Кража ананасов', text: 'Украсть 5 кг ананасов', reward: '$ 1 000', complete: 1},
                        {title: 'Кража ананасов', text: 'Украсть 5 кг ананасов', reward: '$ 1 000', complete: 2},
                        {title: 'Кража арбузов', text: 'Украсть 10 кг арбузов', reward: '$ 500', complete: 2}
                    ]
                },
                {
                    title: 'Механик', subtitle: '1 задание', tasks: [
                        {title: 'Починить 20 машин', text: 'Пора бы починить 20 машинок для жителей города', reward: '$ 2 000', complete: 0}
                    ]
                },
                {
                    title: 'Фруктовый вор', subtitle: '3 задания', tasks: [
                        {title: 'Кража апельсинов', text: 'Украсть 2 кг апельсин', reward: '$ 5 000', complete: 0},
                        {title: 'Кража ананасов', text: 'Украсть 5 кг ананасов', reward: '$ 1 000', complete: 1},
                        {title: 'Кража ананасов', text: 'Украсть 5 кг ананасов', reward: '$ 1 000', complete: 2},
                        {title: 'Кража арбузов', text: 'Украсть 10 кг арбузов', reward: '$ 500', complete: 2}
                    ]
                },
            ],

            settingsActive: 0,
            settingsData: [
                {
                    name: 'Основное',
                    desc: 'test',
                    settings: [
                        {type: 0, name: 'Показывать худ', params: 'reload1', active: 0},
                        {type: 1, name: 'Вид спидометра', params: 'reload2', active: 0, listmenu: ['Цифровой', 'Буквенный', 'Интуитивный']},
                        {type: 2, name: 'Голосовой чат', params: 'reload', btntext: "Перезагрузить"}
                    ]
                },
                {
                    name: 'Интерфейс',
                    settings: [
                        {type: 0, name: 'Показывать худ', active: 0},
                        {type: 1, name: 'Вид спидометра', active: 0, listmenu: ['Цифровой', 'Буквенный', 'Интуитивный']},
                        {type: 2, name: 'Голосовой чат', params: 'reload', btntext: "Перезагрузить"}
                    ]
                },
                {
                    name: 'Голосовой чат',
                    settings: [
                        {type: 0, name: 'Показывать худ', active: 0},
                        {type: 1, name: 'Вид спидометра', active: 0, listmenu: ['Цифровой', 'Буквенный', 'Интуитивный']},
                        {type: 2, name: 'Голосовой чат', params: 'reload', btntext: "Перезагрузить"}
                    ]
                },
                {
                    name: 'Текстовый чат',
                    settings: [
                        {type: 0, name: 'Показывать худ', active: 0},
                        {type: 1, name: 'Вид спидометра', active: 0, listmenu: ['Цифровой', 'Буквенный', 'Интуитивный']},
                        {type: 2, name: 'Голосовой чат', params: 'reload', btntext: "Перезагрузить"}
                    ]
                },
                {
                    name: 'Дизайн меню',
                    settings: [
                        {type: 0, name: 'Показывать худ', active: 0},
                        {type: 1, name: 'Вид спидометра', active: 0, listmenu: ['Цифровой', 'Буквенный', 'Интуитивный']},
                        {type: 2, name: 'Голосовой чат', params: 'reload', btntext: "Перезагрузить"}
                    ]
                },
                {
                    name: 'Назначение клавиш',
                    settings: [
                        {type: 0, name: 'Показывать худ', active: 0},
                        {type: 1, name: 'Вид спидометра', active: 0, listmenu: ['Цифровой', 'Буквенный', 'Интуитивный']},
                        {type: 2, name: 'Голосовой чат', params: 'reload', btntext: "Перезагрузить"}
                    ]
                },
            ]
        }
    }

    componentDidMount() {
        EventManager.addHandler('accmain', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'showOrHide') {
                let status = !this.state.show;
                this.setState({ show: status })
                try {
                    mp.trigger('client:mainMenu:status', status); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
            } else if (value.type === 'activePage') {
                this.setState({activePage: value.page})
            } else if (value.type === 'updateInfo') {
                this.setState({accountId: value.accountId})
                this.setState({nick: value.nick})
                this.setState({balance: value.balance})
            } else if (value.type === 'updateInfoGeneral') {
                this.setState({generalList: value.generalList})
                this.setState({generalData: value.generalData})
            } else if (value.type === 'updateInfoProperty') {
                this.setState({propertyHouse: value.propertyHouse})
                this.setState({propertyBusiness: value.propertyBusiness})
                this.setState({propertyCars: value.propertyCars})
            } else if (value.type === 'updateInfoReport') {
                this.setState({reportData: value.reportData})
            } else if (value.type === 'updateInfoQuest') {
                this.setState({questData: value.questData})
            } else if (value.type === 'updateInfoSettings') {
                this.setState({settingsData: value.settingsData})
                this.setState({settingsActive: value.settingsActive})
            }
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('accmain');
    }

    onChangePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    setActivePage = (name, type) => {
        const page = this.state.panels.findIndex(val => val.id === name)
        this.setState({
            activePage: page,
            initValueReports: this.state.reportData[type][0]
        })
    }

    setHide = () => {
        this.setState({
            show: false
        })
        try {
            mp.trigger('client:mainMenu:hide'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    handleKeyPress = (key) => {
        if (key === 81) {
            if (this.state.activePage === 0) {
                this.setState({
                    activePage: this.state.panels.length - 1
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage - 1}
                ))
            }
        }
        else if (key === 69) {
            if (this.state.activePage === this.state.panels.length - 1) {
                this.setState({
                    activePage: 0
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage + 1}
                ))
            }
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="accountmenu">
                <Header
                    accountId={this.state.accountId}
                    donateBalance={this.state.balance}
                    nick={this.state.nick}
                    setHide={this.setHide}
                />
                <Content
                    initValueReports={this.state.initValueReports}
                    setActivePage={this.setActivePage}
                    panels={this.state.panels}
                    page={this.state.panels[this.state.activePage]}
                    onChangePage={this.onChangePage}
                    handleKeyPress={this.handleKeyPress}
                    generalList={this.state.generalList}
                    generalData={this.state.generalData}
                    propertyHouse={this.state.propertyHouse}
                    propertyBusiness={this.state.propertyBusiness}
                    propertyCars={this.state.propertyCars}
                    reportData={this.state.reportData}
                    questData={this.state.questData}
                    settingsData={this.state.settingsData}
                    settingsActive={this.state.settingsActive}
                    activeIndex={this.state.activePage}
                />
            </div>
        )
    }
}

export default AccountMenu;
