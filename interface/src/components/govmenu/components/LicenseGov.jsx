import React, {useState} from 'react'
import Quest from '../../accountmenu/uikit/Quest'
import BigButton from '../../accountmenu/uikit/BigButton'
import '../css/licensegov.css'

const LicenseGov = ({ licIndex }) => {

    const licenses = [
        {
            title: 'Лицензия 1',
            img: '',
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
            title: 'Лицензия 2',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'ДО 22 АВГУСТА 2030 ГОДА',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет',
            buyed: 1
        },
        {
            title: 'Лицензия 3',
            img: '',
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
            title: 'Лицензия 4',
            img: '',
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
            title: 'Лицензия 5',
            img: '',
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
                        Лицензии
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    <div className="accountmenu__cards__question__container">
                        {licenses.map((item, index) => (
                            <Quest
                                title={item.title}
                                subtitle={item.subtitle}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                                done={item.buyed}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__questinfo__container">
                    <img src={'https://state-99.com/client/images/mmenu/all/quest-bg.png'} className="accountmenu__content__cards__questinfo__img__container" alt="" />
                    <div className="accountmenu__content__cards__questinfo__header">
                        <span className="accountmenu__content__cards__questinfo__header__name">
                            {licenses[active].title}
                        </span>
                        <span className="accountmenu__content__cards__questinfo__header__count">
                            {licenses[active].minidesc}
                        </span>
                        <div
                            className="govmenu__content__cards__answer__text__container" 
                            dangerouslySetInnerHTML={{__html: licenses[active].desc}}
                        />
                        <BigButton
                            text={licenses[active].buyed ? "Уже куплено" : 'Купить'}
                            onPress={() => console.log('ты купил')}
                            disabled={false}
                            type={licenses[active].buyed ? -1 : 0}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LicenseGov