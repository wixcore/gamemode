import React from 'react';
import EventManager from "../../../EventManager";
import Draggable from '../Draggable'

class Watch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showGreen: true,
            showYellow: false,
            time: '00:00',
            date: '01.01.1990',
            temp: '12°С',
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Watch.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('hudw', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({show: value.isShow});
                this.setState({time: value.time});
                this.setState({date: value.date});
                this.setState({temp: value.temp});
                this.setState({showGreen: value.showGreen});
                this.setState({showYellow: value.showYellow});
                this.setState({background: value.background});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hudw');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                    <Draggable id="zone" className="zone-box">
                        <div className={this.state.showGreen ? 'time-img-greenzone' : 'hide'}>
                            <img src={`https://state-99.com/client/images/icons/components/hud/img/Union.svg`} />
                        </div>
                        <div className={this.state.showYellow ? 'time-img-yellowzone' : 'hide'}></div>
                    </Draggable>
                    <Draggable id="watch" className="watch-main">
                        <div className="time-box">
                            <div className="time">{this.state.time}</div>
                            <div className="date">
                                {this.state.date}
                                <span className="degrees">{this.state.temp}</span>
                            </div>
                        </div>
                    </Draggable>
            </React.Fragment>
        )
    }
}

export default Watch;
