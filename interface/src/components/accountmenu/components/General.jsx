import React from 'react'
import '../css/general.css'
import LineData from '../uikit/LineData'
import StatContainer from '../uikit/StatContainer'
import InfoBlock from '../uikit/InfoBlock'
import Card from '../uikit/Card'
import BigButton from '../uikit/BigButton'

const General = ({ listElements, accountData, setActivePage }) => {

    /*let listElements = [
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
    ]

    let accountData = {
        nickname: "Andrey Knyazev",
        fraction: "LSPD",
        gender: "Мужской",
        age: "30",
        husband: "Name Name",
        hours: "300",
        lastlogin: "01.07.2020 12:23",
        created: "01.05.2020 11:00",
        friends: 100,
        maxFriends: 200,
        death: 32,
        maxdeath: 100,
        kills: 100,
        maxkills: 500,
        status: "Гражданин",
        statusDate: "_________",
        pocketmoney: "100000000",
        cardmoney: "30000000",
        medDate: "01.01.2020",
        medPercent: "100"
    }*/

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item">
                <div className="accountmenu__content__cards__finance">
                    <span className="accountmenu__content__cards__title_medium" style={{marginTop: '5%'}}>
                        Финансы
                    </span>
                    <div className="accountmenu__content__cards__finance__container">
                        <Card 
                            icon="wallet"
                            title="Наличные"
                            subtitle={`$ ${accountData.pocketmoney.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                        />
                        <Card 
                            icon="card"
                            title="На счету"
                            subtitle={`$ ${accountData.cardmoney.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                        />
                    </div>
                </div>
                <div className="accountmenu__content__cards__status">
                    <span className="accountmenu__content__cards__medicine__text">Статус игрока</span>
                    <span className="accountmenu__content__cards__status__card">
                        {accountData.status}
                    </span>
                </div>
                <div className="accountmenu__cards__btnreports">
                    <div style={{width: '35%'}}>
                        <BigButton text="Жалоба" type={3} onPress={() => setActivePage('accmenu-reports', 1)} />
                    </div>
                    <div style={{width: '35%', marginLeft: '1rem'}}>
                        <BigButton text="Вопрос" type={4} onPress={() => setActivePage('accmenu-reports', 0)} />
                    </div>
                </div>
                <div className="accountmenu__content__cards__medicine__container">
                    <div className="accountmenu__content__cards__medicine">
                        <span className="accountmenu__content__cards__medicine__text">Медицинская страховка</span>
                        <span className="accountmenu__content__cards__medicine__name">San Andreas Medicial Center</span>
                        <div className="accountmenu__content__cards__medicine__status__container">
                            <div className="accountmenu__content__cards__medicine__status__container__date">
                                <span className="accountmenu__content__cards__medicine__status__container__date__text">
                                    <span className="accountmenu__content__cards__medicine__status">Статус: </span>
                                    {`Ваша медицинская страховка активна до ${accountData.medDate}`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__item__general__person">
                    <div className="accountmenu__cards__nickname">
                        <div className="wrapper__progress">
                            <span className="accountmenu__cards__nickname__text">
                                {accountData.nickname}
                            </span>
                        </div>
                    </div>
                    <div className="accountmenu__cards__fraction">
                        <span className="accountmenu__cards__fraction__name">
                            Организация:
                        </span>
                        <span className="accountmenu__cards__fraction__text">
                            {accountData.fraction}
                        </span>
                    </div>
                    <div className="accountmenu__cards__stats">
                        <StatContainer
                            title="Выносливость"
                            value={accountData.friends}
                            maxvalue={accountData.maxFriends}
                        />
                        <StatContainer
                            title="Сила"
                            value={accountData.death}
                            maxvalue={accountData.maxdeath}
                        />
                        <StatContainer
                            title="Стрельба"
                            value={accountData.kills}
                            maxvalue={accountData.maxkills}
                        />
                    </div>
                    <LineData
                        leftinfo="Пол:"
                        rightinfo={accountData.gender}
                    />
                    <LineData
                        leftinfo="Дата рождения:"
                        rightinfo={`${accountData.age}`}
                    />
                    <LineData
                        leftinfo="Супруг(а):"
                        rightinfo={accountData.husband}
                    />
                    <div className="accountmenu__cards__logindata">
                        <InfoBlock
                            title="Часов в игре"
                            subtitle={accountData.hours}
                        />
                        <InfoBlock
                            title="Последний вход"
                            subtitle={accountData.lastlogin}
                        />
                        <InfoBlock
                            title="Дата создания"
                            subtitle={accountData.created}
                        />
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__item">
                <span className="accountmenu__content__cards__title_medium" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem', marginTop: '5%', marginBottom: '5%'}}>
                    Статистика
                </span>
                <div className="accountmenu__list">
                {listElements.map((item, index) => (
                    <div className="accountmenu__content__cards__item__list" key={index.toString()}>
                        <span className="accountmenu__content__cards__item__list__title">
                            {item.title}
                        </span>
                        <span className="accountmenu__content__cards__item__list__subtitle">
                            {item.subtitle}
                        </span>
                    </div>
                ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default General