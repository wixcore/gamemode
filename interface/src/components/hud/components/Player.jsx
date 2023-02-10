import React from 'react';
import EventManager from "../../../EventManager";

import Draggable from '../Draggable'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            microphone: false,
            drink: 5,
            eat: 60,
            wallet: "12.400.000$",
            card: "12.400$",
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Player.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('hudp', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({microphone: value.microphone});
                this.setState({drink: value.drink});
                this.setState({eat: value.eat});
                this.setState({wallet: value.wallet});
                this.setState({card: value.card});
                this.setState({background: value.background});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hudp');
    }

    formatCurrency(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="player-hud">
                    <div className="player-hud__box">
                        <div className="player-hud__box__row">
                            <Draggable id="player-money" className="phud-money">
                                <div className="money-box">
                                    <div className="wallet-text">{this.state.wallet}</div>
                                    <img src={`https://state-99.com/client/images/icons/hud/paper_money.svg`} width="13" />
                                </div>
                                <div className="money-box">
                                    <div className="credit-text">{this.state.card}</div>
                                    <img src={`https://state-99.com/client/images/icons/hud/card_money.svg`} width="13" />
                                </div>
                            </Draggable>
                            <Draggable id="player-mic" className="phud-mic" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                                <img src={this.state.microphone ? `https://state-99.com/client/images/icons/hud/mic_on.svg` : `https://state-99.com/client/images/icons/hud/mic-off.svg`} width="24" />
                            </Draggable>
                        </div>
                        <Draggable id="player-needs" className="phud-needs" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                                <div className="needs-box">
                                    <div className={this.state.drink <= 20 ? "needs-text-drink-low" : "needs-text-drink"}>{this.state.drink}%</div>
                                    <div className={this.state.drink <= 20 ? "liner-needs-drink-low" : "liner-needs-drink"}>
                                        <div className={this.state.drink <= 20 ? "color-liner-drink-low" : "color-liner-drink"}
                                            style={{width: this.state.drink + '%'}}></div>
                                    </div>
                                    <img src={`https://state-99.com/client/images/icons/components/hud/img/drink.svg`} width="10" style={{filter: this.state.drink <= 20 ? 'invert(57%) sepia(78%) saturate(6251%) hue-rotate(337deg) brightness(133%) contrast(113%)' : 'none'}} />
                                </div>
                                <div className="needs-box">
                                    <div className={this.state.eat <= 20 ? "needs-text-drink-low" : "needs-text-drink"}>{this.state.eat}%</div>
                                    <div className={this.state.eat <= 20 ? "liner-needs-drink-low" : "liner-needs-drink"}>
                                        <div className={this.state.eat <= 20 ? "color-liner-drink-low" : "color-liner-drink"}
                                            style={{width: this.state.eat + '%'}}></div>
                                    </div>
                                    <img src={`https://state-99.com/client/images/icons/components/hud/img/eat.svg`} style={{filter: this.state.eat <= 20 ? 'invert(57%) sepia(78%) saturate(6251%) hue-rotate(337deg) brightness(133%) contrast(113%)' : 'none'}} width="12" />
                                </div>
                        </Draggable>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Player;
