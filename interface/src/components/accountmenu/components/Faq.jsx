import React from 'react'
import '../css/faq.css'
import BigButton from '../uikit/BigButton'
import Question from '../uikit/Question'
import { useState } from 'react'

const Faq = ({ onChangePage }) => {

    const questions = [
        {
            text: "Как начать играть?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Первое, с чего стоит начать, это приехать в здание правительства и начать свой путь.<br><br>
                    Нет, если серьезно, открой вкладку "Квесты" и пройди квествовую линию "Первые шаги"<br><br>
                </p>
                <ol>
                <li class="accountmenu__content__cards__answer__li">Наш сайт: state-99.com</li>
                <li class="accountmenu__content__cards__answer__li">Наш VK: vk.com/gtav.state</li>
                </ol>
            `
        },
        {
            text: "Как работает реферальная программа?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    После того, как ваш знакомый введет ваш ник в поле при регистрации персонажа (Через пробел по примеру: Alexey Navalniy) вы получите бонус в виде Bonus Point на ваш личный кабинет. Благодаря этим Bonus поинтам вы можете пользоваться донат-услугами или обменивать их на игровую валюту. После того, как ваш знакомый отыграет 24 часа на сервере, он получит бонус в виде $20.000 и 100bp, а вы на кабинет вашего персонажа 500bp<br><br>
                    Список всех ваших рефералов можно посмотреть на сайте, в статистике персонажа<br><br>
                </p>
                <ol>
                <li class="accountmenu__content__cards__answer__li">Наш сайт: state-99.com</li>
                <li class="accountmenu__content__cards__answer__li">Наш VK: vk.com/gtav.state</li>
                </ol>
            `
        },
        {
            text: "Как устроиться на работу?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Устроиться на работу можно в здании правительства в разделе "работа".<br><br>
                    Работы становятся доступны по мере увеличения уровня рабочего. Его можно прокачать, получая опыт во время работы. Отслеживать продвижение по карьерной лестнице можно в статистике.
                    <br><br>Список доступных работ:
                </p>
                <ol>
                <li class="accountmenu__content__cards__answer__li">Уровень 1 – Разнорабочий, садовник</li>
                <li class="accountmenu__content__cards__answer__li">Уровень 2 – Водитель автобуса, таксист</li>
                <li class="accountmenu__content__cards__answer__li">Уровень 3 – Почтальон, фотограф, механик</li>
                <li class="accountmenu__content__cards__answer__li">Уровень 4 – Инкассатор, дальнобойщик на фургоне</li>
                <li class="accountmenu__content__cards__answer__li">Уровень 8 – Дальнобойщик на грузовике</li>
                <li class="accountmenu__content__cards__answer__li">Уровень 12 – Дальнобойщик на тягаче с прицепом</li>
                </ol>
            `
        },
        {
            text: "Где купить лицензии?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Лицензии на транспорт можно купить в лицензионном центре, который находится в здании правительства. Чтобы приобрести лицензию на бизнес, охоту или рыбалку, обратитесь к сотрудникам правительства.
<br><br>
                    Лицензию на оружие выдают сотрудники LSPD и BCSD. Но для начала Вам понадобится мед. страховка, которую можно купить в аптеке или у сотрудников EMS.
                </p>
            `
        },
        {
            text: "Где купить банковские карты?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Банковские карты приобретаются в любом отделении банка Fleeca, Maze, Blaine или Pacific. Между собой они отличаются только расположением и комиссией на снятие средств в банкомате. Но по началу игры, можно выбрать любой банк, не стоит переживать.
                </p>
            `
        },
        {
            text: "Как получить донат-услуги?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Донат-услугами можно воспользоваться в разделе "Донат" на сайте state-99.com
                </p>
            `
        },
        {
            text: "Как оставить жалобу на игрока или администратора?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Жалобу на игрока или администратора Вы можете оставить на сайте <a>state-99.com</a> в разделе "Жалоба".
                </p>
            `
        },
        {
            text: "Всё про транспорт",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                   Всего существует 10 слотов под транспортные средства. Вы можете иметь до 5 машин без дома, остальные 5 слотов приобретаются на сайте <a>state-99.com</a> в разделе "Донат".
                </p>
                <br><br>
                <h1>Где купить транспорт?</h1><br>
                <p class="accountmenu__content__cards__answer__text">
                   Автосалоны помечены на карте значком гаража с долларом или в телефоне во вкладке GPS. Самый дешёвый находится в Сенди-Шорс, там можно купить транспорт до $2000
                </p>
                <br><br>
                <h1>Как взаимодействовать с транспортом?</h1><br>
                <p class="accountmenu__content__cards__answer__text">
                    Откройте телефон (по стандарту на англ. O) и запустите приложение UVeh.<br><br>
                    Чтобы открыть/закрыть транспорт нажмите L (стандартно).<br><br>
                    Чтобы запустить/заглушить двигатель нажмите B (стандартно).
                </p>
                <br><br>
                <h1>Сколько скорости мне даёт тюнинг авто?</h1><br>
                <p class="accountmenu__content__cards__answer__text">
                    Турбо даёт +10 к скорости транспорта, а 4 уровень двигателя +20, итого при полной прокачке автомобиля вы получите +30 к максимальной скорости
                </p>
                <br><br>
                <h1>Как украсть транспорт другого игрока? И что мне с ним делать?</h1><br>
                <p class="accountmenu__content__cards__answer__text">
                    Угнать транспорт можно с помощью отмычек или посредством взлома через консоль. Вы можете сдать машину через консоль с помощью специальных команд.
                </p>
            `
        },
        {
            text: "Как купить дом?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Приобрести дом можно двумя способами:
                </p>
                <ol>
                <li class="accountmenu__content__cards__answer__li">Выбрать нужный дом, и если он свободен, то подойти на метку входа в дом, нажать [E] и купить.</li>
                <li class="accountmenu__content__cards__answer__li">Если дом принадлежит другому игроку, то купить жильё у него с рук за его выставленную цену в здании правительства, в разделе «Имущество»</li>
            
                </ol>
            `
        },
        {
            text: "Как работают налоги на имущество?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    На весь Ваш транспорт и жильё распространяются налоги. Получить информацию о налогах и оплатить их можно в здании правительства, в разделе "Налоговый кабинет".
                </p>
            `
        },
        {
            text: "Как ускорить прокачку навыков?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Почаще бегайте, деритесь, стреляйтесь или плавайте. Если хотите прокачать навыки сразу, то можете приобрести соответствую услугу в разделе "Донат" на сайте state-99.com.
                </p>
            `
        },
        {
            text: "Что такое консоль? Как её получить и где находится Ламар?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Консоль – это специальное приложение для хакерства. Получить консоль нужно у Ламара, который находится в Гетто (отмечен на карте как жёлтый человек).
                </p>
            `
        },
        {
            text: "Как найти мафию, банду или любую другую криминальную организацию?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Банды отмечены иконками черепов на карте в Гетто. Мафии и неофициальные криминальные организации скрыты с карты. Их местоположение можно узнать через других игроков.
                </p>
            `
        },
        {
            text: "Что такое колесо удачи и что там падает?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Колесо удачи – это рулетка, которую можно крутить каждый реальный день, отыграв всего 3 часа на сервере. Колесо удачи доступно в казино, среди выигрышей попадаются редкие маски, дорогие автомобиль или VIP.
                </p>
            `
        },
        {
            text: "Как мне утолить жажду и голод?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Купите еду и напитки в 24\\7. Если Вы не будете вовремя утолять потребности, то ваш персонаж начнёт падать и в конце концов потеряет сознание.
                </p>
            `
        },
        {
            text: "Как устроиться в какую-либо гос. организацию?",
            answer: `
                <p class="accountmenu__content__cards__answer__text">
                    Всего существует 5 гос. организаций: LSPD, BCSD, FIB, EMS, USMC, Life Invader и GOV. Чтобы устроиться в одну из них, нужно прийти в главное здание организации (отмечено на карте) и обратиться к одному из сотрудников и узнать подробности вступления.
                <br>
                <br>
                <ol>
                <li class="accountmenu__content__cards__answer__li">LSPD (Полицейский департамент) - Занимаются правопорядком нашего города</li>
                <li class="accountmenu__content__cards__answer__li">BCSD (Департамент шерифов) - Занимаются правопорядком округа блейн</li>
                <li class="accountmenu__content__cards__answer__li">GOV (Правительство) - Финансирование гос. организаций, постановления и написание законов</li>
                <li class="accountmenu__content__cards__answer__li">EMS (Больница) - Выдает мед. страховки, лечит людей и ликвидирует аварии</li>
                <li class="accountmenu__content__cards__answer__li">FIB (Федеральное Бюро Расследований) - Контроллирует гос. органы и их порядок</li>
                <li class="accountmenu__content__cards__answer__li">USMC (Армия) - Занимается поставками и охраной штата</li>
                <li class="accountmenu__content__cards__answer__li">Life Invader (Новости) - Пишет новости, проводит мероприятия и редактирует объявления</li>
                </ol>
                </p>
            `
        },
    ]

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item question accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <div className="accountmenu__content__cards__container__info" style={{paddingLeft: '3.5rem'}}>
                        <span className="accountmenu__content__cards__reports__header">Все обращения</span>
                        <span className="accountmenu__content__cards__title">Задай вопрос или подай жалобу</span>
                    </div>
                    <span className="accountmenu__content__cards__title_single">
                        Часто задаваемые вопросы
                    </span>
                    <div className="accountmenu__cards__question__container">
                        {questions.map((item, index) => (
                            <Question
                                text={item.text}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__bitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__container answer">
                    <div
                        className="accountmenu__content__cards__answer__img"
                    />
                    <div className="accountmenu__cards__question__icon__container__active">
                        <img src={`https://state-99.com/client/images/icons/components/accountmenu/img/questio_icon.svg`} className="accountmenu__cards__question__icon" />
                        <span className="accountmenu__content__cards__answer__title">
                            {questions[active].text}
                        </span>
                    </div>
                    <div
                        className="accountmenu__content__cards__answer__text__container" 
                        dangerouslySetInnerHTML={{__html: questions[active].answer}}
                    />
                </div>
            </div>
            <div className="accountmenu__content__cards__sitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__container__help">
                    <span className="accountmenu__content__cards__title_heavy">
                        Не нашли ответ на свой вопрос?
                    </span>
                    <div className="accountmenu__content__cards__ptext__container">
                        <span className="accountmenu__content__cards__ptext">
                            Задайте его нашим администраторам
                        </span>
                    </div>
                    <BigButton
                        onPress={() => onChangePage(3)}
                        text="Задать вопрос"
                    />
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Faq