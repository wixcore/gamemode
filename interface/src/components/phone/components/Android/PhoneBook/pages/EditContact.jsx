import React from 'react';

import MaterialIcon from 'material-icons-react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save'
import AddCircleIcon from '@material-ui/icons/AddCircle';

class EditContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {}
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'EditContact.jsx', error, errorInfo); // eslint-disable-line
    }

    componentWillMount() {
        if (this.props.editing_contact) {
            this.setState({contact: {...this.props.selected_contact}})
        } else {
            this.setState({contact: {name: '', numbers: [''], mail: '', img: '', isFavorite: false}})
        }
    }

    componentWillUnmount() {
        this.setState({
            contact: {name: '', numbers: [''], mail: '', img: '', isFavorite: false}
        })
    }

    changeName(e, type, index) {
        e.persist()
        switch (type) {
            case 'firstname':
                this.setState(prevState => ({...prevState.contact.name = e.target.value}))
                break;
            case 'number':
                if (!isNaN(parseInt(e.target.value.slice(-1)))) {
                    this.setState(prevState => ({...prevState.contact.numbers[index] = e.target.value}))
                } else {
                    return;
                }
                break;
            case 'email':
                //this.setState(prevState => ({ ...prevState.contact.mail = e.target.value }))
                break;
            default:
                break;
        }
    }

    addNumber() {
        this.setState(
            prevState => ({...prevState.contact.numbers = [...this.state.contact.numbers].concat([''])})
        )
    }

    backBtn() {
        if (this.props.editing_contact) {
            /* if(this.state.contact !== this.props.selected_contact){
              // Вы точно хотите отменить изменения?
            } */
        }
        this.props.historyGoBack();
    }

    saveBtn() {
        if (this.props.editing_contact) {
            this.props.saveContact(this.state.contact, this.props.selected_contact)
            mp.trigger('client:phone:editContact', JSON.stringify(this.state.contact), JSON.stringify(this.props.selected_contact)); // eslint-disable-line
        } else {
            this.props.addContact(this.state.contact);
            try {
                mp.trigger('client:phone:addContact', JSON.stringify(this.state.contact)); // eslint-disable-line
            } catch (e) {
            }
        }
        this.props.historyGoBack();
    }

    render() {
        return (
            <React.Fragment>
                <div className="editcontact-box">
                    <div className="u-title">
                        <div className="dedbit-u-texttittle">
                            <div className="u__back__container">
                                <img src={`https://state-99.com/client/images/icons/components/phone/img/back.svg`} className="u__back" height="16" onClick={() => this.props.historyGoBack()} />
                            </div>
                            <span className="u-texttittle">Редактирование</span>
                            {/*<div className="edit-btn-save-position">
                                <IconButton aria-label="save" onClick={() => this.saveBtn()}>
                                    <SaveIcon/>
                                </IconButton>
                            </div>*/}
                        </div>
                    </div>
                    <div className="editcontact-main">
                        <div className="box-img-e">
                            <img src="https://a.rsg.sc//n/socialclub" alt="" className="img-profileeditconatact"/>
                        </div>
                        <div className="editcontact-box-e">
                            <div className="e-boxeditor">
                                <div className="text-place-m-mes">Имя</div>
                                <div className="m-mes-txtfield">
                                    <TextField id="standard-basic1" label="" value={this.state.contact.name}
                                        placeholder="Введите имя" className="text-filed"
                                        onChange={(e) => this.changeName(e, 'firstname')}
                                    />
                                </div>
                            </div>
                            <div className="e-boxeditor">
                                <div className="text-place-m-mes">Телефон</div>
                                <div className="e-clmn-ed">
                                    {this.state.contact.numbers.map((e, i) => {
                                        let index = `phoneedit${i}`;
                                        return (
                                            <div className="m-mes-txtfield">
                                                <TextField id={index} label="" value={e}
                                                    placeholder="Введите номер телефона" className="text-filed"
                                                    onChange={(e) => this.changeName(e, 'number', i)}
                                                    maxLength="11"
                                                />
                                                {i === this.state.contact.numbers.length - 1 && this.state.contact.numbers[i].length > 0 ?
                                                    <div className="add-posit-btn">
                                                        <span className="add-posit-btn-text" onClick={() => this.addNumber()}>
                                                            + Добавить ещё номер
                                                        </span>
                                                    </div>
                                                    : null}
                                            </div>
                                        )
                                    })}
                                    {/* {this.addNumber()} */}
                                </div>
                            </div>
                            <div className="e-boxeditor">
                                <div className="text-place-m-mes">E-Mail</div>
                                <div className="m-mes-txtfield">
                                    <TextField id={`standard-basic3`} label="" value={this.state.contact.mail}
                                        placeholder="Введите E-Mail" className="text-filed"
                                        onChange={(e) => this.changeName(e, 'email')}
                                        maxLength="11"
                                    />
                                </div>
                            </div>
                            <div className="ios__button__container">
                                <span className="ios__button" onClick={() => this.saveBtn()}>Сохранить</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditContact;