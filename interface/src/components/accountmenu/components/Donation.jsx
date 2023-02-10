import React from 'react'
import '../css/faq.css'
import BigButton from '../uikit/BigButton'
import Question from '../uikit/Question'
import { useState } from 'react'
import Quest from '../uikit/Quest'
import DonationRouter from './DonationRouter'
import IosClipboard from 'react-ionicons/lib/IosClipboard'
import IosCheckbox from 'react-ionicons/lib/IosCheckbox'
import IosMedal from 'react-ionicons/lib/IosMedal'
import IosCar from 'react-ionicons/lib/IosCar'
import LogoUsd from 'react-ionicons/lib/LogoUsd'


const Donation = ({ onChangePage }) => {

    const categories = [
        {
            title: 'Наборы',
            subtitle: 'Выгодные предложения по низким ценами',
            type: 0,
            children: <IosCheckbox fontSize="32px" color="white" />,
            items: [
                {
                    type: 0,
                    name: 'Стартовый набор',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    carchoice: [
                        {name: 'Ubermacht Oracle', img: 'https://state-99.com/client/images/cars/Oracle_1.jpg'},
                        {name: 'Declasse Rancher XL', img: 'https://state-99.com/client/images/cars/RancherXL_1.jpg'},
                        {name: 'Maxwell Asbo', img: 'https://state-99.com/client/images/cars/Asbo_1.jpg'},
                        {name: 'Karin Futo', img: 'https://state-99.com/client/images/cars/Futo_1.jpg'}
                    ],
                    price: 299,
                    buyed: 1
                },
                {
                    type: 0,
                    name: 'Полный набор',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    carchoice: [
                        {name: 'Ubermacht Oracle', img: 'https://state-99.com/client/images/cars/Oracle_1.jpg'},
                        {name: 'Declasse Rancher XL', img: 'https://state-99.com/client/images/cars/RancherXL_1.jpg'},
                        {name: 'Maxwell Asbo', img: 'https://state-99.com/client/images/cars/Asbo_1.jpg'},
                        {name: 'Karin Futo', img: 'https://state-99.com/client/images/cars/Futo_1.jpg'}
                    ],
                    price: 299,
                    buyed: 0
                },
                {
                    type: 0,
                    name: 'Коллекционный набор',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    carchoice: [
                        {name: 'Ubermacht Oracle', img: 'https://state-99.com/client/images/cars/Oracle_1.jpg'},
                        {name: 'Declasse Rancher XL', img: 'https://state-99.com/client/images/cars/RancherXL_1.jpg'},
                        {name: 'Maxwell Asbo', img: 'https://state-99.com/client/images/cars/Asbo_1.jpg'},
                        {name: 'Karin Futo', img: 'https://state-99.com/client/images/cars/Futo_1.jpg'}
                    ],
                    price: 299,
                    buyed: 0
                },
                {
                    type: 1,
                    name: 'Малые наборы',
                    list: [
                        {
                            name: 'Набор 1',
                            items: [
                                'Автомобиль на выбор',
                                '$75.000',
                                '7 дней VIP Hard'
                            ],
                            img: 'https://i.imgur.com/WCSEoWP.jpg',
                            price: 99
                        },
                        {
                            name: 'Набор 2',
                            items: [
                                'Автомобиль на выбор',
                                '$175.000',
                                '7 дней VIP Hard'
                            ],
                            img: 'https://i.imgur.com/WCSEoWP.jpg',
                            price: 199
                        },
                        {
                            name: 'Набор 3',
                            items: [
                                'Автомобиль на выбор',
                                '$275.000',
                                '7 дней VIP Hard'
                            ],
                            img: 'https://i.imgur.com/WCSEoWP.jpg',
                            price: 499
                        },
                    ],
                    buyed: 0
                },
                {
                    type: 1,
                    name: 'Элитные наборы',
                    list: [
                        {
                            name: 'Набор 4',
                            items: [
                                'Автомобиль на выбор',
                                '$75.000',
                                '7 дней VIP Hard'
                            ],
                            img: 'https://i.imgur.com/WCSEoWP.jpg',
                            price: 99
                        },
                        {
                            name: 'Набор 5',
                            items: [
                                'Автомобиль на выбор',
                                '$175.000',
                                '7 дней VIP Hard'
                            ],
                            img: 'https://i.imgur.com/WCSEoWP.jpg',
                            price: 199
                        },
                        {
                            name: 'Набор 6',
                            items: [
                                'Автомобиль на выбор',
                                '$275.000',
                                '7 дней VIP Hard'
                            ],
                            img: 'https://i.imgur.com/WCSEoWP.jpg',
                            price: 499
                        },
                    ],
                    buyed: 0
                }
            ]
        },
        {
            title: 'VIP статус',
            subtitle: 'Получай больше и стань лучше',
            type: 1,
            children: <IosMedal fontSize="32px" color="white" />,
            items: [
                [[{
                    name: 'VIP Light',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    prices: [
                        {
                            days: 7,
                            price: 100
                        },
                        {
                            days: 11,
                            price: 1100
                        },
                        {
                            days: 17,
                            price: 1300
                        },
                        {
                            days: 7,
                            price: 1040
                        },
                        {
                            days: 7,
                            price: 1500
                        },
                        {
                            days: 7,
                            price: 1100
                        },
                        {
                            days: 67,
                            price: 11090
                        },
                        {
                            days: 7,
                            price: 1800
                        }
                    ],
                    buyed: 1
                },
                {
                    name: 'VIP Hard',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    prices: [
                        {
                            days: 7,
                            price: 100
                        },
                        {
                            days: 11,
                            price: 1100
                        },
                        {
                            days: 17,
                            price: 1300
                        },
                        {
                            days: 7,
                            price: 1040
                        },
                        {
                            days: 7,
                            price: 1500
                        },
                        {
                            days: 7,
                            price: 1100
                        },
                        {
                            days: 67,
                            price: 11090
                        },
                        {
                            days: 7,
                            price: 1800
                        }
                    ],
                    buyed: 1
                }]]
            ]
        },
        {
            title: 'Обмен валюты',
            subtitle: 'Перевод DC в игровую валюту',
            type: 2,
            children: <LogoUsd fontSize="32px" color="white" />,
            items: [
                [[{
                    name: 'VIP Light',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    prices: [
                        {
                            days: 7,
                            price: 100
                        },
                        {
                            days: 11,
                            price: 1100
                        },
                        {
                            days: 17,
                            price: 1300
                        },
                        {
                            days: 7,
                            price: 1040
                        },
                        {
                            days: 7,
                            price: 1500
                        },
                        {
                            days: 7,
                            price: 1100
                        },
                        {
                            days: 67,
                            price: 11090
                        },
                        {
                            days: 7,
                            price: 1800
                        }
                    ],
                    buyed: 1
                },
                {
                    name: 'VIP Hard',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    prices: [
                        {
                            days: 7,
                            price: 100
                        },
                        {
                            days: 11,
                            price: 1100
                        },
                        {
                            days: 17,
                            price: 1300
                        },
                        {
                            days: 7,
                            price: 1040
                        },
                        {
                            days: 7,
                            price: 1500
                        },
                        {
                            days: 7,
                            price: 1100
                        },
                        {
                            days: 67,
                            price: 11090
                        },
                        {
                            days: 7,
                            price: 1800
                        }
                    ],
                    buyed: 1
                }]]
            ]
        },
        {
            title: 'Услуги',
            subtitle: 'От смены ника до прокачки характеристик',
            type: 3,
            children: <IosClipboard fontSize="32px" color="white" />,
            items: [
                [[{
                    title: 'Прокачать все скиллы',
                    subtitle: 'ыфвотфыолвфылвфы',
                    type: 0,
                    price: 222
                },
                {
                    title: 'Прокачать все скиллы',
                    subtitle: 'ыфвотфыолвфылвфы',
                    type: 1,
                    price: 222,
                    items: [
                        'Русский',
                        'Американец',
                        'Испанец'
                    ]
                },
                {
                    title: 'Прокачать все скиллы',
                    subtitle: 'ыфвотфыолвфылвфы',
                    type: 2,
                    price: 222
                },
                {
                    title: 'Прокачать все скиллы',
                    subtitle: 'ыфвотфыолвфылвфы',
                    type: 0,
                    price: 222
                },
                {
                    title: 'Прокачать все скиллы',
                    subtitle: 'ыфвотфыолвфылвфы',
                    type: 1,
                    price: 222,
                    items: [
                        'Русский',
                        'Американец',
                        'Испанец'
                    ]
                },
                {
                    title: 'Прокачать все скиллы',
                    subtitle: 'ыфвотфыолвфылвфы',
                    type: 2,
                    price: 222
                }]]
            ]
        },
        {
            title: 'Пополнить Dedcoin',
            subtitle: 'Пополните счет, чтобы совершать покупки',
            type: 4,
            hidden: true,
            items: [
                [[{
                    name: 'VIP Light',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    prices: [
                        {
                            days: 7,
                            price: 100
                        },
                        {
                            days: 11,
                            price: 1100
                        },
                        {
                            days: 17,
                            price: 1300
                        },
                        {
                            days: 7,
                            price: 1040
                        },
                        {
                            days: 7,
                            price: 1500
                        },
                        {
                            days: 7,
                            price: 1100
                        },
                        {
                            days: 67,
                            price: 11090
                        },
                        {
                            days: 7,
                            price: 1800
                        }
                    ],
                    buyed: 1
                },
                {
                    name: 'VIP Hard',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    prices: [
                        {
                            days: 7,
                            price: 100
                        },
                        {
                            days: 11,
                            price: 1100
                        },
                        {
                            days: 17,
                            price: 1300
                        },
                        {
                            days: 7,
                            price: 1040
                        },
                        {
                            days: 7,
                            price: 1500
                        },
                        {
                            days: 7,
                            price: 1100
                        },
                        {
                            days: 67,
                            price: 11090
                        },
                        {
                            days: 7,
                            price: 1800
                        }
                    ],
                    buyed: 1
                }]]
            ]
        },
        {
            title: 'Уникальный транспорт',
            subtitle: 'Эксклюзив на котором вы будете выделятся',
            type: 5,
            children: <IosCar fontSize="32px" color="white" />,
            carslots: 3,
            items: [
                [[{
                    type: 0,
                    name: 'Стартовый набор',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    carchoice: [
                        {name: 'Ubermacht Oracle', img: 'https://state-99.com/client/images/cars/Oracle_1.jpg'}
                    ],
                    price: 299,
                    buyed: 1
                },
                {
                    type: 0,
                    name: 'Полный набор',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    carchoice: [
                        {name: 'Ubermacht Oracle', img: 'https://state-99.com/client/images/cars/Oracle_1.jpg'}
                    ],
                    price: 299,
                    buyed: 0
                },
                {
                    type: 0,
                    name: 'Коллекционный набор',
                    list: [
                        'Автомобиль на выбор',
                        '$75.000',
                        '7 дней VIP Hard',
                        '1 доп. уровень рабочего стажа',
                        'A, B и C лицензии на 24 месяца',
                        'Случайная редкая маска'
                    ],
                    carchoice: [
                        {name: 'Ubermacht Oracle', img: 'https://state-99.com/client/images/cars/Oracle_1.jpg'}
                    ],
                    price: 299,
                    buyed: 0
                }]]
            ]
        }
    ]

    const donationBalance = 111

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
        <div className="accountmenu__content__cards__item accountmenu__scrollable">
            <div className="accountmenu__content__cards__container">
                <span className="accountmenu__content__cards__header__name">
                    ДОНАТ
                </span>
                <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                <React.Fragment>
                        <div className="govmenu__jobbar">
                            <span className="govmenu__jobbar__text">
                                Баланс:
                            </span>
                            <span className="govmenu__jobbar__name">
                                {`${donationBalance} DC`}
                            </span>
                        </div>
                        <BigButton
                            text={'Пополнить'}
                            onPress={() => setActive(4)}
                            disabled={false}
                            type={0}
                        />
                </React.Fragment>
                <div className="accountmenu__cards__question__container">
                    {categories.map((item, index) => (
                        <Quest
                            title={item.title}
                            subtitle={item.subtitle}
                            key={index.toString()}
                            index={index}
                            active={active}
                            setActive={() => setActive(index)}
                            done={item.buyed}
                            children={item.children}
                            empty={item.children ? false : true}
                            hidden={item.hidden ? true : false}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
            {categories[active].items.map((item, index) => (
                    <DonationRouter
                        type={categories[active].type}
                        props={{...item}}
                        carslots={categories[active].carslots || null}
                        key={`govmenu-propertycard-${index}`}
                    />
            ))}
        </div>
    </React.Fragment>
    )
}

export default Donation