import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from '../Android/Loader';

class AddChat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            message: '',
            message_timeout: false,
            loading: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'AddChat.jsx', error, errorInfo); // eslint-disable-line
    }

    inputNumber(number) {
        if (number.target.value.toString().length >= 20) return;
        this.setState({ number: number.target.value })
    }

    inputMessage(message) {
        if (message.target.value.toString().length >= 500) return;
        this.setState({ message: message.target.value })
    }

    sendMessage() {
        if (this.state.message === "") return;
        if (this.state.number.toString().replace(/\D/g,'') === "") return;
        if (this.state.message_timeout) return; // Нельзя отправлять сообщения так часто
        this.setState({ message_timeout: true, loading: true });
        setTimeout(function () {
            this.setState({ message_timeout: false, loading: false })
        }.bind(this), 2000); // 1 секунда таймаут на отправку сообщения

        let chat = null;
        this.props.data.forEach((e) => {
            if (e.phone_number === this.state.number.toString().replace(/\D/g,'')) {
                chat = e;
            }
        })
        if (chat != null) {
            this.setState({
                chat: chat,
                render: true,
                contact: this.props.getContactByNumber(chat.phone_number)
            }, () => this.setState(prevState => ({
                ...prevState.chat.message = [...this.state.chat.message]
                    .sort(
                        function (a, b) {
                            if (a.date === b.date) {
                                return b.time > a.time;
                            }
                            return a.date < b.date ? 1 : -1;
                        })
            })))
        } else {
            this.setState({
                chat: {
                    phone_number: this.state.number.toString().replace(/\D/g,''),
                    is_online: false, // был(а) в сети 12.01.2019
                    last_login: '',
                    message: []
                },
                render: true,
                contact: this.props.getContactByNumber(this.state.number.toString().replace(/\D/g,''))
            })
        }
        
        if (this.state.message.length >= 500)
            this.setState({ message: this.state.message.substr(0, 500) }); // Макс длинна сообщения 500 символов

        setTimeout(() => {
            let text = this.state.message;

            this.setState(prev => ({
                ...prev.chat.message = [{
                    type: 2,
                    text: text,
                    time: this.props.time,
                    date: this.props.date,
                }].concat(this.state.chat.message)
            }), () => {
                this.props.sendMessage(this.state.number.toString().replace(/\D/g,''), this.state.chat, text);
                this.props.historyGoBack();

                try {
                    mp.trigger('client:phone:sendMessage', this.state.number.toString().replace(/\D/g,''), this.state.chat, text); // eslint-disable-line
                } catch (e) {
                }
            });
        }, 1000);
    }

    render() {
        return (
            <React.Fragment>
                <div className="dedbit-menu">
                    <div className="u-title">
                        <div className="dedbit-u-texttittle">
                            <div className="u__back__container">
                                <img src={`https://state-99.com/client/images/icons/components/phone/img/back.svg`} className="u__back" height="16" onClick={() => this.props.historyGoBack()} />
                            </div>
                            <span className="u-texttittle">Onion Messenger</span>
                        </div>
                    </div>
                    <div className="messenger-addchat">
                        {!this.state.loading ? 
                        <React.Fragment>
                        <div className="text-place-m-mes">Введите номер телефона</div>
                        <div className="m-mes-txtfield">
                            <TextField id="standard-basic1" label="" value={this.state.number}
                                placeholder="Номер телефона" className="text-filed"
                                onChange={(e) => this.inputNumber(e)}
                            />
                        </div>
                        <div className="text-place-m-mes">Введите сообщение</div>
                        <div className="m-mes-txtfield">
                            <TextField
                                value={this.state.message}
                                id="standard-multiline-static"
                                label=""
                                placeholder="Поле для ввода сообщения..."
                                multiline
                                rows="10"
                                onChange={(e) => this.inputMessage(e)}
                            />
                        </div>
                        <div className="position-btn-addchat">
                            <span className="ios__button" onClick={() => this.sendMessage()}>Отправить</span>                      
                        </div>
                        </React.Fragment>
                        :
                        <div className="loader-style-addchat">
                            <Loader />
                        </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddChat;
