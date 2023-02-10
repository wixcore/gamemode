import React from 'react';
import Autosize from 'autosize';
import './css/modalinput.css'
import EventManager from "../../EventManager";

class ModalInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: 'А может и не может',
            value: ['Закрыть'],
            params: {name: null},
            text: '',
            defaultText: '',
            maxLength: 20,
        }
    }

    callback = (action, ...args) => {
        console.log(action, ...args)
        mp.trigger('client:modalinput:callBack', action, ...args); // eslint-disable-line
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'ModalInput.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('modalinput', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {

                this.setState({show: value.isShow});
                this.setState({title: value.title});
                this.setState({defaultText: value.text});
                this.setState({text: value.text});
                this.setState({maxLength: value.maxLength});

                this.textarea.focus();
                Autosize(this.textarea);
            } else return;
        })

        if (this.state.show) {
            this.textarea.focus();
            Autosize(this.textarea);
        } else return;
    }

    componentWillUnmount() {
        EventManager.removeHandler('modalinput');
    }

    textChange(e) {
        this.setState({text: e.target.value})
    }

    selecetButton(e, text) {
        try {
            console.log(e, text);
            this.setState({show: false, text: ''})

            try {
                mp.trigger('client:modalinput:callBack', '');// eslint-disable-line
                this.setState({show: false, text: ''})
            } catch (e) {
                console.log(e);
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            try {
                mp.trigger('client:modalinput:callBack', this.state.text);// eslint-disable-line
                this.setState({show: false, text: '', defaultText: ''});
            } catch (e) {
                console.log(e);
            }
        }
    };

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="position-modal">
                    <div className="main-input-modal">
                        <div className="modal-b-title">{this.state.title}</div>
                        <div className="modal-box-m">
                            <textarea ref={c => (this.textarea = c)} maxLength={this.state.maxLength}
                                      defaultValue={this.state.defaultText} onKeyPress={this.handleKeyPress}
                                      className="modal-b-input" onChange={(e => this.textChange(e))}/>
                            {this.state.value.map((e, i) => {
                                let index = `modalbtn${i}`
                                return (
                                    <span
                                        className="modal-btn"
                                        key={index}
                                        onClick={() => this.selecetButton(e, this.state.text)}
                                    >
                                        {e}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ModalInput;
