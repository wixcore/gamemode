import React from 'react'
import '../css/quests.css'

const QuestMenu = ({ active, index, title, setActive, subtitle, done, children, empty, hidden }) => {
    return (!hidden ? (
        <div
            onClick={setActive}
            className={active === index ? "accountmenu__cards__quest__active" : "accountmenu__cards__quest"}
        >
            <div className={done ? "accountmenu__cards__questmenu__icon__container_done" : "accountmenu__cards__questmenu__icon__container"}>
                    {done ? '✔' :`+`}
            </div>
            <div className="accounmenu__cards__quest__data__container">
                <span className="accountmenu__cards__quest__text">
                    {title}
                </span>
                <span className="accountmenu__cards__quest__subtitle">
                    {subtitle}
                </span>
            </div>
        </div>
    ) : (<div></div>))
}

export default QuestMenu