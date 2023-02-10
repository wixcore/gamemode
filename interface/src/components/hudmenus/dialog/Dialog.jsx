import React from 'react'
import './css/main.css'
import DialogButton from './components/DialogButton';
import EventManager from "../../../EventManager";

class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: 'Имя Фамилия',
            subtitle: 'Сотрудник мэрии',
            qustion: 'Здравствуйте, меня зовут Имя Фамилия, чем могу помочь? ',
            buttons: [
                {
                    text: '1',
                    bgcolor: '',
                    params: {}
                },
                {
                    text: '2',
                    bgcolor: '',
                    params: {}
                },
                {
                    text: '3',
                    bgcolor: '',
                    params: {}
                },
                {
                    text: '4',
                    bgcolor: '',
                    params: {}
                }
            ]
        }
    }

    componentDidMount() {
        EventManager.addHandler('ndialog', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateItems') {
                try {
                    this.setState({show: true})
                    this.setState({name: value.name})
                    this.setState({subtitle: value.subtitle})
                    this.setState({qustion: value.qustion})
                    this.setState({buttons: value.buttons})
                }
                catch (e) {

                }
            }
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('ndialog');
    }
    
    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="dialog__container">
                <div className="dialog__content">
                    <span className="dialog__content__name">
                        {this.state.name}
                    </span>
                    <span className="dialog__content__subtitle">
                        {this.state.subtitle}
                    </span>
                    <span className="dialog__content__question">
                        {this.state.qustion}
                    </span>
                    <div className="dialog__content__buttons">
                        {this.state.buttons.map((item, index) => (
                            <DialogButton
                                text={item.text}
                                bgcolor={item.bgcolor}
                                params={item.params}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog