/* eslint-disable */
import React from 'react';
import { Animated } from 'react-animated-css';

import './css/phone.css'
import '../../css/animate.css'
import Android from './components/Android';
import EventManager from "../../EventManager";

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            visible: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Phone.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('phone', value => {
            if (value.type === 'show') {
                this.setState({ show: true, visible: true })
            } else if (value.type === 'hide') {
                this.setState({ visible: false })
                setTimeout(() => {
                    this.setState({ show: false })
                }, 300);
            } else if (value.type === 'showOrHide') {
                let status = !this.state.show;
                if (!status) {
                    this.setState({ visible: false })
                    setTimeout(() => {
                        this.setState({ show: status })
                    }, 300);
                } else {
                    this.setState({ show: status, visible: true })
                }
                try {
                    mp.trigger('client:phone:status', status); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('phone');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="phone-position">
                    <Animated animationIn="slideInUp" animationOut="slideOutDown" animationInDuration="300" animationOutDuration="300" isVisible={this.state.visible}>
                        <Android />
                    </Animated>
                </div>
            </React.Fragment>
        )
    }
}

export default Phone;
