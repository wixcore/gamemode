import React from 'react';
import EventManager from "../../../EventManager";

class Hints extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            hints: [
                {key: 'M', text: 'Главное меню'},
                {key: 'F2', text: 'Курсор'},
                {key: 'O', text: 'Телефон'},
                {key: 'i', text: 'Инвентарь'},
                {key: '~', text: 'Предметы рядом'},
            ]
        }
    }

    componentDidMount() {
        EventManager.addHandler('hudk', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({hints: value.hints});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hudk');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="hud__hints">
                {this.state.hints.map((item, index) => (
                    <div className="hud__hints__element" key={`hud__hints__element-${index}`}>
                        <span className="hud__hints__element__key">
                            {item.key}
                        </span>
                        <span className="hud__hints__element__text">
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Hints
