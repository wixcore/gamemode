import React from 'react';

import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import IconBackIOS from '../../../../img/back.svg'

class ProfileContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        try {
            mp.trigger('client:ui:debug', 'ProfileContact.jsx', error, errorInfo); // eslint-disable-line
        }
        catch (e) {}
    }

    deleteContact(contact) {
        // Вы точно хотите навсегда удплить выбранный контакт?
        //this.props.openModal("Вы уверены, что хотите удалить?", "",['Нет', 'Да'], "");
        console.log(contact.numbers[0]);
        try {
            mp.trigger('client:phone:deleteContact', JSON.stringify(contact)); // eslint-disable-line
        } catch (e) {
        }
        this.props.deleteContact(contact)
    }

    render() {
        return (
            <React.Fragment>
                <div className="u-profilecontact">
                    <div className="u-title">
                        <div className="dedbit-u-texttittle">
                            <div className="u__back__container">
                                <img src={`https://state-99.com/client/images/icons/components/phone/img/back.svg`} className="u__back" height="16" onClick={() => this.props.historyGoBack()} />
                            </div>
                            <span className="u-texttittle">Просмотр контакта</span>
                            {/*<div className="edit-btn-save-position">
                                <IconButton aria-label="save" onClick={() => this.saveBtn()}>
                                    <SaveIcon/>
                                </IconButton>
                            </div>*/}
                        </div>
                    </div>
                    <div className="box-img-e">
                            <img src={this.props.data.selected_contact.img !== undefined && this.props.data.selected_contact.img !== '' ?
                                    this.props.data.selected_contact.img : 'https://a.rsg.sc//n/socialclub'} alt="" className="img-profileeditconatact"/>
                            <div className="p-nameplayer-p">{this.props.data.selected_contact.name}</div>
                    </div>
                    <div className="p-topbar">
                        <div className="posit-icon-topbar">
                            <div className="posit-icon-topbar__element" onClick={() => this.props.setCallNumber(this.props.data.selected_contact.numbers[0])}>
                                <MaterialIcon icon="call" size={19} color="#fff" />
                                <span className="posit-icon-topbar__element__text">Позвонить</span>
                            </div>
                            <div className="posit-icon-topbar__element" onClick={() => this.deleteContact(this.props.data.selected_contact)}>
                                <MaterialIcon icon="delete_forever" size={19} color="#fff" />
                                <span className="posit-icon-topbar__element__text">Удалить</span>
                            </div>
                            <div className="posit-icon-topbar__element" onClick={() => this.props.editContact()}>
                                <MaterialIcon icon="create" size={19} color="#fff" />
                                <span className="posit-icon-topbar__element__text">Редактировать</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-info-player">
                        <div className="p-box-mob_email">
                            <div className="text-place-m-mes">Телефон</div>
                            {this.props.data.selected_contact.numbers.map((e, i) => {
                                let index = `number${i}`
                                return (
                                    <div className="number" key={index}>
                                        <div className="p-box-num">
                                            <div className="p-num-num-p" onClick={() => this.props.selectChat(e)}>{e}</div>
                                            <div className="p-num-num-p-info">Мобильный</div>
                                        </div>
                                    </div>
                                )
                            })}
                            {this.props.data.selected_contact.mail !== undefined ?
                                <React.Fragment>
                                    <div className="text-place-m-mes">E-Mail</div>
                                    <div className="number">
                                        <div className="p-box-num">
                                            <div className="p-num-num-p">{this.props.data.selected_contact.mail}</div>
                                            <div className="p-num-num-p-info">Почта</div>
                                        </div>
                                        {/* <MaterialIcon icon="message" size={19} color="#607D8B" /> */}
                                    </div>
                                </React.Fragment>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProfileContact;
