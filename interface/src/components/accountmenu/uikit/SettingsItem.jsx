import React from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'
import '../css/settings.css'
import Button from './Button'

const SettingsItem = ({ name, type, active, setCheckbox, listmenu, prevVal, nextVal, params, btntext }) => {
    return (
        <div className="accountmenu__content__cards__setting__item">
            <span className="accountmenu__content__cards__setting__name">{name}</span>
            {type === 0 && (
                <div className="accountmenu__content__cards__setting__checkbox">
                    <span
                        className={active === 0 ? "accountmenu__content__cards__setting__checkbox__btn_off" : "accountmenu__content__cards__setting__checkbox__btn"}
                        onClick={() => setCheckbox()}
                    >
                        Выкл
                    </span>
                    <span
                        className={active === 1 ? "accountmenu__content__cards__setting__checkbox__btn_on" : "accountmenu__content__cards__setting__checkbox__btn"}
                        onClick={() => setCheckbox()}
                    >
                        Вкл
                    </span>
                </div>
            )}
            {type === 1 && (
                <div className="accountmenu__content__cards__setting__listmenu">
                    <div style={{cusor: 'pointer', justifyContent: 'center'}} onClick={() => prevVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_left" />
                    </div>
                    <span className="accountmenu__content__cards__setting__listmenu__name">{listmenu}</span>
                    <div style={{cusor: 'pointer', justifyContent: 'center'}} onClick={() => nextVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_right" />
                    </div>
                </div>
            )}
            {type === 2 && (
                <Button text={btntext} onPress={() => {
                    try {
                        mp.trigger('client:mainMenu:settings:btn', params); // eslint-disable-line
                    }
                    catch (e) {}
                }} />
            )}
        </div>
    )
}

export default SettingsItem