import React from 'react';
import EventManager from "../../../../EventManager";

class Console extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '>/ Console',
            text: '',
            current_user: 'root',
            current_server: 'localhost',
            history_counter: 0
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Console.jsx', error, errorInfo); // eslint-disable-line
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.sendMessage();
        } else if (event.key === 'ArrowUp') {
            console.log(this.state.history_counter)
            console.log(this.props.console_message)
            if (this.props.console_message.length <= this.state.history_counter) {
                this.setState({ history_counter: 0 }, () => this.setState({ text: this.props.console_message[0] }))
            } else {
                this.setState({ text: this.props.console_message[0 + parseInt(this.state.history_counter)] })
            }
            this.setState({ history_counter: this.state.history_counter + 1 })
        } else if (event.key === 'ArrowDown') {
            this.setState({ history_counter: this.state.history_counter - 1 })
            console.log(this.state.history_counter)
            console.log(this.props.console_message)
            if (this.state.history_counter < 0) {
                this.setState({ history_counter: this.props.console_message.length - 1 }, () => this.setState({ text: this.props.console_message[this.props.console_message.length - 1] }))
            } else {
                this.setState({ text: this.props.console_message[0 + parseInt(this.state.history_counter)] })
            }
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);

        EventManager.addHandler('phone_console', value => {
            if (value.type === 'updateUser') {
                this.setState({ current_user: value.user })
            } else if (value.type === 'updateServer') {
                this.setState({ current_server: value.server })
            } else return;
        })
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
        EventManager.removeHandler('phone_console');
    }

    inputChange(message) {
        if (this.state.text && this.state.text.length >= 500) return; // Макс длинна сообщения 600 символов
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
        if (this.state.text !== undefined || this.state.text === '') {
            this.props.consoleCommand(`[${this.state.current_user}@${this.state.current_server}:~ ] $ ${this.state.text}`);

            try {
                mp.trigger('client:phone:consoleCallback', this.state.text); // eslint-disable-line
            } catch (e) {
            }
        }
        this.setState({ text: '', history_counter: 0 })
    }
    render() {
        return (
            <React.Fragment>
                <div className="dedbit-menu">
                    <div className="console-main">
                    <span className="iphone__app__name">Консоль</span>
                        <ul className="console-chat-ul">
                            {this.props.console_message.map((e, i) => {
                                let index = `consolelist${i}`
                                return (
                                    <li key={index}>{e}</li>
                                    /*<li key={index}><a>[{this.state.current_user}@{this.state.current_server}:~ ] $ </a>{e}</li>*/
                                )
                            })}
                        </ul>
                        <div className="console-input">
                            {/* <textarea ref={c => (this.textarea = c)} 
                                className="c-i-style " /> */}
                            <span>{`$:>`}</span>
                            <input type="text" className="c-i-style"
                                value={this.state.text} onBlur={(e) => this.inputBlur(e)} onFocus={(e) => this.inputFocus(e)} onChange={(e) => this.inputChange(e)}
                            />
                            {/* <MaterialIcon icon="send" size={22} color="#67B1F8" onClick={() => this.sendMessage()} /> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Console;
