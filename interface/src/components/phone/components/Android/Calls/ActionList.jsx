import React from 'react'
import './css/calls.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const ActionList = ({ number }) => {
    
    const actions = [
        {icon: 'person_add', text: 'Создать новый контакт', action: () => console.log(`Создаю новый контакт ${number}`)},
        {icon: 'person', text: 'Добавить в контакты', action: () => console.log(`Добавляю в контакты ${number}`)},
        {icon: 'message', text: 'Отправить СМС', action: () => console.log(`Отправляю СМС ${number}`)},
    ]

    return (
        <div className="calls__actions">
            {actions.map((item, index) => (
                <div className="calls__actions__item" onClick={item.action} key={item.text}>
                    <div className="calls__actions__item__icon">
                        <MaterialIcon icon={item.icon} size={20} color="#1C3AA9" />
                    </div>
                    <span className="calls__actions__item__text">{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default ActionList