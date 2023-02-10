import React from 'react';
import MaterialIcon from 'material-icons-react';

import Avatar from '@material-ui/core/Avatar';

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            message_timeout: false,
            render: false
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Chat.jsx', error, errorInfo); // eslint-disable-line
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.props.data !== prevProp.data) {
            this.updateChat();
            window.scrollTo(0,document.body.scrollHeight);
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress);
        this.updateChat();
        window.scrollTo(0,document.body.scrollHeight);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
        this.setState({ chat: {}, render: false, contact: null })
    }

    updateChat(){
        let chat = null;
        this.props.data.forEach((e) => {
            if (e.phone_number === this.props.messenger.current_chat) {
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
                    phone_number: this.props.messenger.current_chat,
                    is_online: false, // был(а) в сети 12.01.2019
                    last_login: '',
                    message: []
                },
                render: true,
                contact: this.props.getContactByNumber(this.props.messenger.current_chat)
            })
        }
    }

    inputChange(message) {
        if (message.target.value.toString().length >= 500) return; // Макс длинна сообщения 600 символов
        this.setState({ text: message.target.value })
    }

    inputFocus(focus) {
        try {
            mp.trigger('client:phone:inputModal', true); // eslint-disable-line
        } catch (e) {
        }
    }

    inputBlur(focus) {
        try {
            mp.trigger('client:phone:inputModal', false); // eslint-disable-line
        } catch (e) {
        }
    }

    sendMessage() {
        if (this.state.message_timeout) return; // Нельзя отправлять сообщения так часто
        this.setState({ message_timeout: true });
        setTimeout(function () {
            this.setState({ message_timeout: false })
        }.bind(this), 1000); // 1 секунда таймаут на отправку сообщения
        if (this.state.text.length >= 500)
            this.setState({ text: this.state.text.substr(0, 500) }); // Макс длинна сообщения 500 символов
        if (this.state.text === "")
            return;

        let text = this.state.text;

        this.setState(prev => ({
            ...prev.chat.message = [{
                type: 2,
                text: text,
                time: this.props.time,
                date: this.props.date,
            }].concat(this.state.chat.message)
        }), () => {
            this.props.sendMessage(this.props.messenger.current_chat, this.state.chat, text);

            try {
                mp.trigger('client:phone:sendMessage', this.props.messenger.current_chat, this.state.chat, text); // eslint-disable-line
            } catch (e) {
            }
        });
        this.setState({ text: '' });
    }

    render() {
        if (!this.state.render) return null;
        return (
            <React.Fragment>
                <div className="dedbit-menu">
                    <div className="u-title" style={{ height: 50 + 'px' }}>
                        <div className="dedbit-u-texttittle">
                            <img src={`https://state-99.com/client/images/icons/components/phone/img/back.svg`} className="u__back-nabs" height="16" onClick={() => this.props.setLink("/phone/android/messenger")} />
                            {this.state.contact === null ?
                                null
                                :
                                <span className="dedbit__messenger__chatname">
                                    {this.state.contact.name.substring(0, 1)}
                                </span>
                            }
                            <div className="u-title-row spiceal-ts-chat">
                                <div
                                    className="dedbit-title-name">{this.state.contact !== null ? this.state.contact.name : this.state.chat.phone_number}</div>
                                <div className="dedbit-title-text">{this.state.chat.online}</div>
                            </div>
                            <div className="posit-icon-del-chat" onClick={() => this.props.deleteChat(this.state.chat.phone_number) /* this.props.openModal('','Вы уверены в том что хотите удалить всю переписку?', ['Да','Нет'], 'params') */}>
                            <MaterialIcon icon="delete" size={18} color="#fff"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="messenger-main clm-reverse-chat">
                        {this.state.chat.message.map((e, i) => {
                            let index = `dedchat${i}`
                            return (
                                <React.Fragment key={index}>
                                    {e.type === 1 ?
                                        <div className="ded-messenge">
                                            <div className="testmes ded-vxod">
                                                <div className="block-sms-ded">{e.text}
                                                    <div
                                                        className="hide-time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.time}</div>
                                                </div>
                                                <div className="block-sms-info-time">{e.time.substr(0, 5)}</div>
                                            </div>
                                        </div>
                                        : null}
                                    {e.type === 2 ?
                                        <div className="ded-messenge isxod-left">
                                            <div className="testmes ded-isxod">
                                                <div className="block-sms-ded">{e.text}
                                                    <div
                                                        className="hide-time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.time}</div>
                                                </div>
                                                <div className="block-sms-info-time">{e.time.substr(0, 5)}</div>
                                            </div>
                                        </div>
                                        : null}
                                    {i === this.state.chat.message.length - 1 ?
                                        <div className="ded-meta-center">
                                            <div className="dedmeta-text">{e.date}</div>
                                        </div>
                                        : null}
                                    {i < this.state.chat.message.length - 1 && 
                                    e.date.substring(6, 10) +
                                    e.date.substring(3, 5)  +
                                    e.date.substring(0, 2)  > 
                                    this.state.chat.message[i + 1].date.substring(6, 10) +
                                    this.state.chat.message[i + 1].date.substring(3, 5) +
                                    this.state.chat.message[i + 1].date.substring(0, 2) ?
                                        <div className="ded-meta-center">
                                            <div className="dedmeta-text">{e.date}</div>
                                        </div>
                                        : null}
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="ded-input-text">
                        <MaterialIcon icon="insert_emoticon" size={22} color="#7D8B97" />
                        <input type="text" placeholder="Введите сообщение..." className="ded-text-ipn"
                            value={this.state.text} onBlur={(e) => this.inputBlur(e)} onFocus={(e) => this.inputFocus(e)} onChange={(e) => this.inputChange(e)} />
                        <MaterialIcon icon="send" size={22} color="#67B1F8" onClick={() => this.sendMessage()} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;
