import React, {useState} from 'react'
import Quest from '../../accountmenu/uikit/Quest'
import BigButton from '../../accountmenu/uikit/BigButton'
import '../css/jobsgov.css'
import MdPerson from 'react-ionicons/lib/MdPerson'

const JobsGov = ({ jobIndex , jobname }) => {

    const jobs = [
        {
            title: 'Работа 1',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет'
        },
        {
            title: 'Работа 2',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет'
        },
        {
            title: 'Работа 3',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет'
        },
        {
            title: 'Работа 4',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет'
        },
        {
            title: 'Работа 5',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Работа доступна с рабочим опытом от 3-х лет'
        }
    ]

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <span className="accountmenu__content__cards__header__name">
                        Работы
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    {jobIndex !== -1 && jobname && (
                    <React.Fragment>
                        <div className="govmenu__jobbar">
                            <span className="govmenu__jobbar__text">
                                Текущая работа:
                            </span>
                            <span className="govmenu__jobbar__name">
                                {jobname}
                            </span>
                        </div>
                        <BigButton
                            text={'Уволиться'}
                            onPress={() => console.log('ты утсроился')}
                            disabled={false}
                            type={1}
                        />
                    </React.Fragment>
                    )}
                    <div className="accountmenu__cards__question__container">
                        {jobs.map((item, index) => (
                            <Quest
                                title={item.title}
                                subtitle={item.subtitle}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                                done={item.done}
                                children={<MdPerson fontSize="32px" color="white" />}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem">
                <div className="accountmenu__content__cards__questinfo__container">
                    <img src={'https://state-99.com/client/images/mmenu/all/quest-bg.png'} className="accountmenu__content__cards__questinfo__img__container" alt="" />
                    <div className="accountmenu__content__cards__questinfo__header">
                        <span className="accountmenu__content__cards__questinfo__header__name">
                            {jobs[active].title}
                        </span>
                        <span className="accountmenu__content__cards__questinfo__header__count">
                            {jobs[active].minidesc}
                        </span>
                        <div
                            className="govmenu__content__cards__answer__text__container" 
                            dangerouslySetInnerHTML={{__html: jobs[active].desc}}
                        />
                        <BigButton
                            text={jobIndex === -1 ? "Устроиться" : jobIndex === active ? 'Уволиться' : 'Устроиться'}
                            onPress={() => console.log('ты утсроился')}
                            disabled={false}
                            type={jobIndex === -1 ? 0 : jobIndex === active ? 1 : 0}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default JobsGov