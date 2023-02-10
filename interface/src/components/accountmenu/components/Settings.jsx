import React from 'react'
import '../css/settings.css'
import { useState } from 'react'
import SettingsItem from '../uikit/SettingsItem'

const Settings = ({ data, activeData }) => {

    const [active, setActive] = useState(activeData)
    const [settings, setSettings] = useState(data);

    const updateCheckbox = (index) => {
        let newSettings = [...settings]
        newSettings[active].settings[index].active = newSettings[active].settings[index].active === 0 ? 1 : 0
        setSettings(newSettings)

        try {
            mp.trigger('client:mainMenu:settings:updateCheckbox', newSettings[active].settings[index].params, newSettings[active].settings[index].active); // eslint-disable-line
        }
        catch (e) {}
    }

    const nextVal = (index) => {
        let newSettings = [...settings]
        newSettings[active].settings[index].active = newSettings[active].settings[index].listmenu.length  === newSettings[active].settings[index].active + 1 ? 0 : newSettings[active].settings[index].active + 1
        setSettings(newSettings)

        try {
            mp.trigger('client:mainMenu:settings:updateList', newSettings[active].settings[index].params, newSettings[active].settings[index].active); // eslint-disable-line
        }
        catch (e) {}
    }

    const prevVal = (index) => {
        let newSettings = [...settings]
        newSettings[active].settings[index].active = newSettings[active].settings[index].active  === 0 ? newSettings[active].settings[index].listmenu.length - 1 : newSettings[active].settings[index].active - 1
        setSettings(newSettings)

        try {
            mp.trigger('client:mainMenu:settings:updateList', newSettings[active].settings[index].params, newSettings[active].settings[index].active); // eslint-disable-line
        }
        catch (e) {}
    }

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__settings__container">
                    <span className="accountmenu__content__cards__settings__header__type">Общие</span>
                    <span className="accountmenu__content__cards__settings__header__name">Игра</span>
                    <div className="accountmenu__content__cards__settings__list">
                        {settings.map((item, index) => (
                            <span
                                className={index === active ? "accountmenu__content__cards__settings__list__item_selected" : "accountmenu__content__cards__settings__list__item"}
                                onClick={() => setActive(index)}
                                key={index.toString() + '_settingslist'}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__settings__container">
                    <span className="accountmenu__content__cards__settings__bcontainer__name">{settings[active].name}</span>
                    <span className="accountmenu__content__cards__settings__bcontainer__desc">{settings[active].desc}</span>
                    <div className="accountmenu__hr" style={{marginTop: '15px', marginBottom: '15px'}} />
                    {settings[active].settings.map((item, index) => (
                        <SettingsItem
                            name={item.name}
                            key={index.toString() + item.name}
                            type={item.type}
                            active={item.active}
                            index={index}
                            setCheckbox={() => updateCheckbox(index)}
                            listmenu={item.listmenu ? item.listmenu[item.active] : []}
                            nextVal={() => nextVal(index)}
                            prevVal={() => prevVal(index)}
                            params={item.params}
                            btntext={item.btntext}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Settings