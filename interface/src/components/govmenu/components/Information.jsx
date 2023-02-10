import React from 'react'
import '../css/information.css'
import Quest from '../../accountmenu/uikit/Quest'
import BigButton from '../../accountmenu/uikit/BigButton'
import { useState } from 'react'
import ProgressBarCircle from '../../accountmenu/uikit/ProgressBarCircle'
import MdInformation from 'react-ionicons/lib/MdInformation'

const Information = ({  }) => {

    const governor = { name: 'Donald Trump', date: '8 августа 2021 года' }

    const circlesInfo = [
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        },
        {
            toptext: "Текущий налог",
            midtext: "2.342$",
            btmtext: "",
        }
    ]

    const info = [
        {
            title: 'Общая информация',
            img: '',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Тестовое описание',
            id: 'info',
            children: <MdInformation fontSize="36px" color="white" />
        },
        {
            title: 'Правительство Сан Андреас',
            img: 'https://lh6.googleusercontent.com/oFew15zemjnXuYyXj0Ws6QkrMsR0a2I-4NJ8iROdkqGR_CxO9x5MW3KmetvQdoxYvPAxW-oyh3F2MpkjHM3i2FWyrjfAc3pf65q086qd_ROrk8aHndVwOxQMZCX6A-IpGTtxJyn4',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Правительство состоит из трех ветвей власти:
                    <ol>
                        <li class="accountmenu__content__cards__answer__li">
                            Исполнительная, состоящая из Губернатора, Вице-губернатора, окружного Мэра, заместителя окружного Мэра, избранные народом раз в 14 месяцев путём голосования.
                        </li>
                        <li class="accountmenu__content__cards__answer__li">
                            Законодательная, состоящая из Генерального Совета штата, в него входят все главы государственных организаций и лица, избранные народом раз в 6 месяцев путём голосования.
                        </li>
                        <li class="accountmenu__content__cards__answer__li">
                            Судебная, состоящая из Верховного суда Сан Андреас, окружного Суда и апелляционного суда. Судебная власть распространяется на все дела, которые рассматриваются по общему праву и праву справедливости, и возникают на основе настоящей Конституции, законов штата Сан Андреас и договоров, заключенных или заключаемых от их имени; на все дела, касающиеся представителей государственных организаций, их заместителей, председателей политический партий, председателя и членов генерального совета
                        </li>
                    </ol>
                </p>
                <br>
                <p class="accountmenu__content__cards__answer__text">
                Существует также местное самоуправление, состоящее из округов, городов, правительственных учреждений и офисов, которые работают независимо друг от друга на конституционную, статутной или общее право основы. Государство также позволяет прямое участие избирателей по инициативе, референдума, отзыва и ратификации.
                </p>
            `,
            subtitle: 'Правительство',
            minidesc: 'Является правительственной структурой штата Сан Андреас, установленной Конституцией Сан Андреас.',
            id: 'government'
        },
        {
            title: 'ИСТОРИЯ ШТАТА САН АНДРЕАС',
            img: 'https://lh4.googleusercontent.com/3btCqxMUuzQwFZlgEqzRGg-asMHTXdB5CJAzMUTNxtXMDR5smj5LVece08iEvKLpZJhMfh6v3qr-o9U90yA0eUSlIYe97HxiGmFDj6Q_2IeEYPjKfYDLKMAdeaEfuVsUhK-_AxWI',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Сан Андреас был территорией Мексики в 1800-х годах, что объясняет высокую долю этнических мексиканцев в населении штата и многочисленные испаноязычные географические названия. Город Лос Сантос был основан в 1781 году, когда эта территория еще была под контролем Испанской империи. Старые испанские роды, такие как Мануэль, живут здесь на протяжении более 300 лет и считают себя более американскими, чем сами американцы.
                </p>
                <br>
                <p class="accountmenu__content__cards__answer__text">
                    Американские поселенцы прибыли в Сан Андреас, победили мексиканскую администрацию территории (не без помощи США) и установили Республику Сан Андреас. В конце 2009 года произошло присоединение Сан Андреас к США, штат сохранил свой республиканский флаг, а также формально оставил за собой статус республики. Первым губернатором Штата Сан Андреас являлся Диего Гарсия от Республиканской партии.
                </p>
                <br>
                <p class="accountmenu__content__cards__answer__text">
                    Округ Лос Сантос был создан в 1889 году, через много лет после основания округа Блэйн. В 21-м веке Сан Андреас стал центром американской массовой культуры, в частности, Вайнвуд является символом американского кинематографа.
                </p>    
                <br>
                <p class="accountmenu__content__cards__answer__text">
                    Округ Блэйн был основан в 1823 году, только через два года после того, как Мексика получила независимость.
                </p>    
                <br>
                <p class="accountmenu__content__cards__answer__text">
                    Бобр является официальным животным штата Сан Андреас. Бобра можно увидеть на государственном флаге штата, на гербе Лос Сантоского окружного Шерифского департамента и на печати города Лос Сантос.
                </p>
                <br>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Столица - Лос Сантос, население - 9.000.000, площадь 126,9 км².',
            id: 'history'
        },
        {
            title: 'ГЕОГРАФИЯ ШТАТА САН АНДРЕАС',
            img: 'https://lh4.googleusercontent.com/ptC61qqh5LXW6RXBKcaFrnXxri811LPNPaltiDvoOcXeH58eLQf4m3zUDOKCXmohFEp7riH5umbzQapHbeLcJN8SZsL2e6n3otrBlg6fIy2Z9KyD2lrLeOikpjQBS9NpPCkqqKAO',
            desc: `
                <p class="accountmenu__content__cards__answer__text">
                    Весь штат географически разнообразен, как и его климат, ведь присутствует каждый биом, даже снег, а также только здесь вы можете наблюдать от травянистых равнин до засушливых пустынь, лесов и горных хребтов. В лесах Сан Андреаса преобладают могучие деревья, возвышающиеся над землей. Сан Андреас расположен на западном побережье Соединенных Штатов Америки и стоит на Тихом океане. Штат Сан Андреас состоит из двух округов, которые вы сейчас видите на стенде: городского округа Лос-Сантос и в основном сельского округа Блейн. Граница между двумя округами проходит вдоль Шоссе № 68, возле Сэнди Шорс и форта Занкудо.
                </p>
                <br>
                <p class="accountmenu__content__cards__answer__text">
                    Округ Блэйн находится на севере Сан Андреас, в основном он известен по нетронутой живой природе: пустыням, высокогорьям, соленому озеру Аламо Си и чистым лесам. В округе присутствует 5 деревень: Стаб-Сити, Гэлили, Кейл-Кэтфиш, Гэрмони и Дайнти-Вилледж. В округе находится три города: Сэнди Шорс, Грейпсид и Палето Бэй. Также, в округе находится одна из самых посещаемых достопримечательностей штата - гора Чилиад.
                </p>
                <br>
                <ol>
                    <li class="accountmenu__content__cards__answer__li">
                        Гора Чилиад - это самая высокая точка штата, которая высотой в 798 метров или 2619 футов. А найти её вы можете вблизи Грейпсид или Палето Бэй.
                    </li>
                    <li class="accountmenu__content__cards__answer__li">
                        Гора Джосайя является по второй высоте вершины штата. Гора полностью окружена водой: Кэссиди-Крик на севере, Аламо Си на востоке, река Занкудо на западе и океан на западе. Гора расположена к Северу от форта Занкудо и к западу от Аламо Си.
                    </li>
                    <li class="accountmenu__content__cards__answer__li">
                        Гора Гордо является самой маленькой вершиной в штате. Расположена она на северо-востоке Округа Блейн. Небольшое озеро и водоём можно найти на горе, но путь на эту гору довольно опасен на транспортном средстве.
                    </li>
                    <li class="accountmenu__content__cards__answer__li">
                        Также, еще имеется Горный хребет, который называется Сан-Шаньский, он является самым длинным горным хребтом, расположенным от горы Гордо до ветряной электростанции Рон-Альтернат.
                    </li>
                </ol>
                <p class="accountmenu__content__cards__answer__text">
                    В округе Лос Сантоса находятся города: Лос Сантос и Чумаш. Округ также включает в себя неурбанизированные территории, такие как огромный лес и пустыня - излюбленные места для туристов, поскольку здесь можно поохотиться и заняться другими видами активного отдыха. Основная отрасль экономики - международная торговля, осуществляемая в основном через порт города Лос Сантос, развиты индустрия, кино, телевидение, звукозапись, авиакосмическая промышленность.
                    Горные системы, долины и холмы также присутствуют: Каньон Бэнхэм, Грейт-Чапаррал, Нагорья Паломино, Татавиамские горы, Тонгва-Хиллз, Долина Тонгва.                
                </p>
                <br>
            `,
            subtitle: 'Очищай город от грязи',
            minidesc: 'Сан Андреас и ряд более мелких островов в архипелаге с ним лежат в Тихом океане и на многие километры отделены им от суши.',
            id: 'geography'
        }
    ]

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <span className="accountmenu__content__cards__header__name">
                        Информация
                    </span>
                    <div className="accountmenu__cards__question__container">
                        {info.map((item, index) => (
                            <Quest
                                title={item.title}
                                subtitle={item.subtitle}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                                done={item.done}
                                children={item.children ? item.children : null}
                                empty={item.children ? false : true}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
                {info[active].img && (<div className="govmenu__propertygov__imgheader" style={{backgroundImage: `url('${info[active].img}')`, marginBottom: '6vh'}} />)}
                <div className="accountmenu__content__cards__questinfo__container">
                    {
                        info[active].img ?
                            null :
                            <img src={'https://state-99.com/client/images/mmenu/all/quest-bg.png'} className="accountmenu__content__cards__questinfo__img__container" alt="" />
                    }
                    {info[active].id === 'info' ? (
                        <React.Fragment>
                            <div className="govmenu__worker">
                                <div className="govmenu__worker__info">
                                    <span className="accountmenu__content__cards__questinfo__header__name">
                                        {`Губернатор штата`}
                                    </span>
                                    <span className="govmenu__propertygov__info__balance" style={{fontSize: '1.8rem', marginTop: '2%'}}>
                                        {`${governor.name}`}
                                    </span>
                                    <span className="accountmenu__content__cards__questinfo__header__count">
                                        {`Избран до ${governor.date}`}
                                    </span>
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                            {circlesInfo.map((item, index) => (
                                <div style={{width: '33%', marginTop: '2%', marginBottom: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <ProgressBarCircle toptext={item.toptext} midtext={item.midtext} btmtext={item.btmtext} />
                                </div>
                            ))}
                            </div>
                        </React.Fragment>
                    ) : (
                    <div className="accountmenu__content__cards__questinfo__header">
                        <span className="accountmenu__content__cards__questinfo__header__name">
                            {info[active].title}
                        </span>
                        <span className="accountmenu__content__cards__questinfo__header__count">
                            {info[active].minidesc}
                        </span>
                        <div
                            className="govmenu__content__cards__answer__text__container" 
                            dangerouslySetInnerHTML={{__html: info[active].desc}}
                        />
                    </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Information