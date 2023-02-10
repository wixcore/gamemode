import React from 'react'
import '../css/quests.css'
import Button from '../uikit/Button'
import { useState } from 'react'
import Quest from '../uikit/Quest'
import ButtonOver from '../uikit/ButtonOver'
import ButtonDone from '../uikit/ButtonDone'
import QuestMenu from '../uikit/QuestMenu'

const Quests = ({ quests }) => {

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <div className="accountmenu__content__cards__container__info">
                        <span className="accountmenu__content__cards__header__name">
                            Квесты
                        </span>
                        <span className="accountmenu__content__cards__title">
                            начни выполнять задания и получай награды
                        </span>
                    </div>
                    <div className="accountmenu__cards__question__container">
                        {quests.map((item, index) => (
                            <QuestMenu
                                title={item.title}
                                subtitle={item.subtitle}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                                done={item.done}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__questinfo__container">
                    <div className="accountmenu__content__cards__questinfo__img_contain">
                        <img src={'https://dednet.ru/client/images/mmenu/all/quest-bg.png'} className="accountmenu__content__cards__questinfo__img__container" alt="" />
                    </div>
                    <div className="accountmenu__content__cards__questinfo__header">
                        <span className="accountmenu__content__cards__questinfo__header__name">
                            {quests[active].title}
                        </span>
                        <span className="accountmenu__content__cards__questinfo__header__count">
                            {quests[active].subtitle}
                        </span>
                    </div>
                    <div className="accountmenu__content__cards__questinfo__list">
                        {quests[active].tasks.map((item, index) => (
                            <div className="accountmenu__content__cards__questinfo__list__item" key={index.toString() + quests[active].title}>
                                <div className="accountmenu__content__cards__questinfo__list__item__info">
                                    <span className="accountmenu__content__cards__questinfo__item__name">{`${item.title}`}</span>
                                    <span className="accountmenu__content__cards__questinfo__item__info">{item.text}</span>
                                    <div className="accountmenu__content__cards__questinfo__item__btmdata">
                                        <span className="accountmenu__content__cards__questinfo__item__reward">{`Награда: ${item.reward}`}</span>
                                        
                                    </div>
                                </div>
                                {item.complete === 2 ? <ButtonOver text="Не доступно" /> : item.complete === 1 ? <Button onPress={() => {
                                        try {
                                            mp.trigger('client:mainMenu:sendPos', item.x, item.y); // eslint-disable-line
                                        }
                                        catch (e) {}
                                    }} text="Проложить путь" /> : <ButtonDone text="Завершено" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Quests