import React from 'react'
import '../css/reports.css'
import LineData from '../uikit/LineData'
import StatContainer from '../uikit/StatContainer'
import InfoBlock from '../uikit/InfoBlock'
import ProgressBar from '../uikit/ProgressBar'
import ProgressBarCircle from '../uikit/ProgressBarCircle'
import Card from '../uikit/Card'
import ButtonGps from '../uikit/ButtonGps'
import Button from '../uikit/Button'
import BusinessCard from '../uikit/BusinessCard'
import CarCard from '../uikit/CarCard'
import ReportItemList from '../uikit/ReportItemList'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Reports = ({ data, initValue }) => {
    const reportMessage = useRef(null)

    const messagesEndRef = useRef(null)

    const [reportData, setReportData] = useState(initValue ? initValue : {})

    const scrollToBottom = () => {
        try {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
        catch (e) {}
    };
      useEffect(() => scrollToBottom, [reportData])

      useEffect(() => initValue ? initValue.dialog.length > 0 ? messagesEndRef.current.scrollIntoView({ behavior: "smooth" }) : undefined : undefined, [initValue])


    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item">
                <div className="accountmenu__content__reports__container">
                    <div className="accountmenu__content__cards__container__info" style={{paddingLeft: '3.5rem'}}>
                        <span className="accountmenu__content__cards__reports__header">Все обращения</span>
                        <span className="accountmenu__content__cards__title">Задай вопрос или подай жалобу</span>
                    </div>
                    <div className="accountmenu__content__cards__item__list__reports">
                        <span className="accountmenu__content__cards__item__list__reports__name">Вопросы</span>
                        <div className="accountmenu__content__reports__list">
                            {data[0].map((item, index) => (
                                <ReportItemList
                                    status={item.status}
                                    text={item.text}
                                    time={item.time}
                                    number={item.number}
                                    type={0}
                                    key={'reports-ask-'+ index.toString()}
                                    setReportData={() => setReportData(data[0][index])}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="accountmenu__content__cards__item__list__reports">
                        <span className="accountmenu__content__cards__item__list__reports__name_red">Жалобы</span>
                        <div className="accountmenu__content__reports__list">
                            {data[1].map((item, index) => (
                                <ReportItemList
                                    status={item.status}
                                    text={item.text}
                                    time={item.time}
                                    number={item.number}
                                    type={1}
                                    key={'reports-report-'+ index.toString()}
                                    setReportData={() => setReportData(data[1][index])}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem">
            {reportData.number && ( 
               <div className="accountmenu__content__reports__dialog__container">
                    <div className="accountmenu__content__reports__dialog__header">
                        <div className="accountmenu__content__reports__dialog__header__data">
                            <img src={`https://state-99.com/client/images/icons/components/accountmenu/img/questio_icon.svg`} className="accountmenu__cards__question__icon" />
                            <span className="accountmenu__content__reports__dialog__header__num">{`запрос №${reportData.number}`}</span>
                            <span className="accountmenu__content__reports__dialog__header__time">{reportData.time}</span>
                        </div>
                        <div className="accountmenu__content__reports__dialog__header__buttons">
                            <div className="accountmenu__content__reports__dialog__header__btn">
                                <img src={'https://state-99.com/client/images/mmenu/all/icons/lock.svg'} className="accountmenu__content__reports__dialog__header__icon" />
                                <span className="accountmenu__content__reports__dialog__header__btn__text">закрыть тему</span>
                            </div>
                            <div className="accountmenu__content__reports__dialog__header__btn">
                                <img src={'https://state-99.com/client/images/mmenu/all/icons/delete.svg'} className="accountmenu__content__reports__dialog__header__icon" />
                                <span className="accountmenu__content__reports__dialog__header__btn__text">удалить</span>
                            </div>
                        </div>
                    </div>
                    <span className="accountmenu__content__reports__dialog__header__name">
                        {reportData.name}
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    <div className="accountmenu__content__reports__dialog__content">
                        {reportData.dialog ? reportData.dialog.map((item, index) => (
                            <div key={`report-msg-` + index} ref={messagesEndRef} className={item.type === 0 ? "accountmenu__content__reports__dialog__content__item__lcontainer" : "accountmenu__content__reports__dialog__content__item__rcontainer"}>
                                <div className="accountmenu__content__reports__dialog__content__item__header">
                                    {item.name && (
                                        <span className="accountmenu__content__reports__dialog__content__item__name">
                                            <span className="accountmenu__content__reports__dialog__content__item__name_b">

                                            </span>
                                            {` ${item.name}`}
                                        </span>
                                    )}
                                    <span className="accountmenu__content__reports__dialog__content__item__time">
                                        {item.time}
                                    </span>
                                    {!item.name && (
                                        <span className="accountmenu__content__reports__dialog__content__item__name">
                                            {`Вы`}
                                        </span>
                                    )}
                                </div>
                                <span className={item.type === 0 ? "accountmenu__content__reports__dialog__content__item__msg_to" : "accountmenu__content__reports__dialog__content__item__msg_frm"}>
                                    {item.text}
                                </span>
                            </div>
                        )) : null} 
                    </div>
                    <div className="accountmenu__content__reports__dialog__input">
                        <label style={{width: '70%', fontFamily: 'Gotham Pro Regular'}}>
                            <input onBlur={(e) => {
                                try {
                                    mp.trigger('client:mainMenu:sendReportOrAsk:focus', false); // eslint-disable-line
                                }
                                catch (e) {}
                            }} onFocus={(e) => {
                                try {
                                    mp.trigger('client:mainMenu:sendReportOrAsk:focus', true); // eslint-disable-line
                                }
                                catch (e) {}
                            }} onChange={(e) => this.inputChange(e)} ref={reportMessage} type="text" name="name" placeholder="Введите сообщение..." className="accountmenu__report__input" />
                        </label>
                        <Button text="Отправить" onPress={() => {
                            reportData.dialog.push({type: 0, text: reportMessage.current.value, time: 'Только что'});
                            try {
                                mp.trigger('client:mainMenu:sendReportOrAsk', reportMessage.current.value, reportData.type); // eslint-disable-line
                            }
                            catch (e) {}
                            reportMessage.current.value = '';
                        }} />
                    </div>
               </div>
               )}
            </div>
        </React.Fragment>
    )
}

export default Reports