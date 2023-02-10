import React from 'react'
import './css/callingscreen.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import DeclineCallButton from './DeclineCallButton'
import DoCallButton from './DoCallButton'

const CallingScreen = ({ number = 'Не определён', avatar = 'https://a.rsg.sc/n/socialclub', name = 'Неизвестно', going, onAccept, onDecline, setLink }) => {
    
    number = number || 'Не определён'
    avatar = avatar || 'https://a.rsg.sc/n/socialclub'
    name = name || 'Неизвестно'

    const onCallDecline = () => {
        onDecline()
        setLink('/phone/android/calls')
    }

    const onCallAccept = () => {
        onAccept()

    }

    return (
        <div className="dedbit-menu calls__screen">
            <div className="calls__screen__data">
                <img src={avatar} alt="" className="calls__screen__data__avatar" />
                <span className="calls__screen__data__name">{name}</span>
                <span className="calls__screen__data__number">{number}</span>
            </div>
            <div className="calls__screen__buttons">
                <div className="calls__screen__buttons__item">
                    <DeclineCallButton action={onCallDecline} />
                    <span className="calls__screen__buttons__item__text">
                        {going ? 'Отклонить' : 'Отменить'}
                    </span>
                </div>
                {going && (
                <div className="calls__screen__buttons__item">
                    <DoCallButton action={onCallAccept} />
                    <span className="calls__screen__buttons__item__text">
                        Принять
                    </span>
                </div>
                )}
            </div>
        </div>
    )
}

export default CallingScreen