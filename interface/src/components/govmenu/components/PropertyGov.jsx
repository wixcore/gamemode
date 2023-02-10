import React, {useState} from 'react'
import Quest from '../../accountmenu/uikit/Quest'
import PropertyCard from '../uikit/PropertyCard'
import '../css/licensegov.css'
import MdCar from 'react-ionicons/lib/MdCar'
import MdGrid from 'react-ionicons/lib/MdGrid'
import IosHome from 'react-ionicons/lib/IosHome'
import IosBoat from 'react-ionicons/lib/IosBoat'
import MdBriefcase from 'react-ionicons/lib/MdBriefcase'
import LogoDropbox from 'react-ionicons/lib/LogoDropbox'

const PropertyGov = ({ setAlert }) => {

    const property = [
        {
            title: 'Транспорт',
            type: 0,
            children: <MdCar fontSize="32px" color="white" />,
            items: [
                {
                    type: 'Мотоцикл',
                    name: 'Bagger',
                    id: 'Bagger',
                    mark: 'Western Motorcycle Company',
                    vin: 'q123e',
                    price: 11500,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Коммерческий',
                    name: 'Phantom',
                    id: 'Phantom',
                    mark: 'Jobuilt',
                    vin: 'q123e',
                    price: 399999,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Спорт. классика',
                    name: 'Manana',
                    id: 'Manana',
                    mark: 'Albany',
                    vin: 'q123e',
                    price: 4999,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Суперкар',
                    name: 'Entity2',
                    id: 'Entity2',
                    mark: 'Överflöd',
                    vin: 'q123e',
                    price: 4800000,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Рабочий',
                    name: 'Guardian',
                    id: 'Guardian',
                    mark: 'Vapid',
                    vin: 'q123e',
                    price: 139999,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Спорткар',
                    name: 'Comet3',
                    id: 'Comet3',
                    mark: 'Pfister',
                    vin: 'q123e',
                    price: 610000,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Седан',
                    name: 'Cognoscenti',
                    id: 'Cognoscenti',
                    mark: 'Enus',
                    vin: 'q123e',
                    price: 230000,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Маслкар',
                    name: 'Gauntlets',
                    id: 'Gauntlets',
                    mark: 'Bravado',
                    vin: 'q123e',
                    price: 142000,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Мотоцикл',
                    name: 'Bagger',
                    id: 'Bagger',
                    mark: 'Western Motorcycle Company',
                    vin: 'q123e',
                    price: 11500,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Фургон',
                    name: 'Rumpo2',
                    id: 'Rumpo2',
                    mark: 'Bravado',
                    vin: 'q123e',
                    price: 12000,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                },
                {
                    type: 'Вертолет',
                    name: 'Havok',
                    id: 'Havok',
                    mark: 'Nagasaki',
                    vin: 'q123e',
                    price: 500000,
                    tax: 150,
                    balance: 130,
                    maxbalance: 5000,
                    fuel: 'Бензин'
                }
            ],
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 0
        },
        {
            title: 'Квартира',
            type: 1,
            children: <MdGrid fontSize="32px" color="white" />,
            items: [
                {
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.13',
                    gprice: '1522000',
                    tax: 1500,
                    balance: 1300,
                    maxbalance: 15000
                }
            ],
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 0
        },
        {
            title: 'Дом',
            items: [
                {
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.13',
                    gprice: '1522000',
                    garageTypes: ['большой', 'маленький', 'подводный'],
                    garageCount: 3,
                    roommatefree: 2,
                    roommatemax: 100,
                    roommates: [
                        {name: 'Stas Baretskiy'},
                        {name: 'Stas Baretskiy'},
                        {name: 'Stas Baretskiy'}
                    ],
                    tax: 1500,
                    balance: 1300,
                    maxbalance: 15000
                }
            ],
            type: 2,
            children: <IosHome fontSize="32px" color="white" />,
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 0
        },
        {
            title: 'Склад',
            items: [
                {
                    address: 'Саут-Рокфорд-драйв,  д. 0112, кв.13',
                    gprice: '1522000',
                    stockType: 'большой',
                    tax: 1500,
                    balance: 1300,
                    maxbalance: 15000
                }
            ],
            type: 3,
            children: <LogoDropbox fontSize="32px" color="white" />,
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 0
        },
        {
            title: 'Бизнес',
            items: [
                {
                    name: 'GunShop #4',
                    gprice: '1522000',
                    tax: 1500,
                    balance: 1300,
                    maxbalance: 15000   
                }
            ],
            type: 4,
            children: <MdBriefcase fontSize="32px" color="white" />,
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 0
        },
        {
            title: 'Яхта',
            items: [
                {
                    name: 'xXx_DARKSTALKER2006_xXx',
                    gprice: '1522000',
                    tax: 1500,
                    balance: 1300,
                    maxbalance: 15000   
                }
            ],
            type: 5,
            children: <IosBoat fontSize="32px" color="white" />,
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 0
        }
    ]

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <span className="accountmenu__content__cards__header__name">
                        Имущество
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    <div className="accountmenu__cards__question__container">
                        {property.map((item, index) => (
                            <Quest
                                title={item.title}
                                subtitle={item.subtitle}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                                done={item.buyed}
                                children={item.children}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
                    {property[active].items.map((item, index) => (
                            <PropertyCard
                                type={property[active].type}
                                setAlert={setAlert}
                                props={{...item}}
                                key={`govmenu-propertycard-${index}`}
                            />
                    ))}
            </div>
        </React.Fragment>
    )
}

export default PropertyGov