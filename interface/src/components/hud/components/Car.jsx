import React from 'react';
import EventManager from "../../../EventManager";
import Draggable from '../Draggable'



class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            isShowSmall: false,
            light: true,
            door: false,
            engine: false,
            turnLeft: false,
            turnRight: false,
            fuel: 80,
            fuelType: 'L',
            max_fuel: 100,// Максимальная вместимость топливного бака
            speed: 0,
            speedLabel: 'km/h',
            carname: 'Insurgent',
            deg: -45,
            color: '#48B9F2',
            background: 0.5,

            showRadar: false,
            radarRearSpeed: '',
            radarRearSpeedMax: '',
            radarFrontSpeed: '',
            radarFrontSpeedMax: '',
            radarPatrolSpeed: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Car.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        this.setState({ show: false })

        EventManager.addHandler('hudc', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({show: value.isShow});
                this.setState({isShowSmall: value.isShowSmall});
                this.setState({light: value.light});
                this.setState({door: value.door});
                this.setState({engine: value.engine});
                this.setState({fuel: value.fuel});
                this.setState({fuelType: value.fuelType});
                this.setState({max_fuel: value.max_fuel});
                this.setState({speed: value.speed});
                this.setState({speedLabel: value.speedLabel});
                this.setState({background: value.background});
                this.setState({carname: value.carname});
                this.setState({turnLeft: value.turnLeft});
                this.setState({turnRight: value.turnRight});
            }  else if (value.type === 'updateRadarValues') {
                this.setState({showRadar: value.showRadar});
                this.setState({radarRearSpeed: value.radarRearSpeed});
                this.setState({radarRearSpeedMax: value.radarRearSpeedMax});
                this.setState({radarFrontSpeed: value.radarFrontSpeed});
                this.setState({radarFrontSpeedMax: value.radarFrontSpeedMax});
                this.setState({radarPatrolSpeed: value.radarPatrolSpeed});
            } else return;
        })

        this.speed();
    }

    componentWillUnmount() {

        EventManager.removeHandler('hudc');

    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.speed !== prevState.speed) {
            this.speed();
        }
    }

    speed() { // Чуть позже добавлю перерисованный спидометр, ибо текущий с погрешностью

        let speedProcent = this.state.speed / 400 * 100;
        let deg = 180 * (speedProcent / 100);
        this.setState({deg: deg - 45});
    }

    /*<div className="car-hud">
                    <Draggable id="car-elements">
                        <div className="elements-auto"
                             style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className={this.state.light ? 'light-auto use-mic' : 'light-auto'}></div>
                            <div className={this.state.door ? 'on-door-auto' : 'off-door-auto'}></div>
                            <div className={this.state.engine ? 'key-auto use-mic' : 'key-auto'}></div>
                        </div>
                    </Draggable>
                    <Draggable id="car-fuel">
                        <div className="bak-oil" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className="oil-text">
                                <div className="oil-tt">Топливо</div>
                                <div className="oil-num">{this.state.fuel} {this.state.fuelType}</div>
                            </div>
                            <div className="oil-liner">
                                <div className="full-liner"
                                     style={{width: fuel_liner + '%', background: this.state.color}}></div>
                            </div>
                        </div>
                    </Draggable>
                </div>
                <Draggable id="car-speedbox" isShowSmall={this.state.isShowSmall}>
                    <div className={this.state.isShowSmall ? 'hide' : 'speedbox-main-small'}>
                        <div className="speedbox">
                            <div className="speedbox-score" style={speed_score}></div>
                            <div className="speedbox-groove"></div>
                        </div>
                        <div className="backg-speed">
                            <div className="speed-txt">{this.state.speed}</div>
                        </div>
                    </div>
                </Draggable>
                <Draggable id="car-speedbox-small" isShowSmall={this.state.isShowSmall}>
                    <div className={this.state.isShowSmall ? 'speedbox-small' : 'hide'}>
                        <div className="speed-txt">{this.state.speed}</div>
                        {this.state.speedLabel}
                    </div>
                </Draggable>
                */

    render() {
        let fuel_liner = (this.state.fuel * 100) / this.state.max_fuel;
        const speed_score = {
            transform: `rotate(${this.state.deg}deg)`,
            borderBottomColor: this.state.color,
            borderLeftColor: this.state.color
        };

        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="hud__speedometr"
                    style={{
                        backgroundImage: this.state.isShowSmall ? 'none' : `url('https://state-99.com/client/images/icons/hud/speedometer-bg.svg')`,
                        backgroundColor: this.state.isShowSmall ? 'none' : 'rgba(0, 0, 0, 0.5)'
                    }}>
                    {!this.state.isShowSmall && (
                    <svg className="svg-speedometer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                        <path
                            className="path-speedometer speedometer__fullbar"
                            d="M40,90 A40,40 0 1,1 60,90"
                            strokeDashoffset={60}
                        />
                        <path
                            className="path-speedometer speedometer__progress"
                            d="M40,90A40,40 0 1,1 60,90"
                            strokeDashoffset={233 - this.state.speed * 0.6216}
                        />
                    </svg>)}
                    <span className="hud__speedometr__speed">{this.state.speed}</span>
                    <span className="hud__speedometr__speed__subtitle">{this.state.speedLabel}</span>
                    <img
                        src={this.state.light ? `https://state-99.com/client/images/icons/hud/light_on.svg` : `https://state-99.com/client/images/icons/hud/light_default_on.svg`}
                        className="hud__speedometr__light-on"
                    />
                    <img
                        src={this.state.light ? `https://state-99.com/client/images/icons/hud/light_default_off.svg` : `https://state-99.com/client/images/icons/hud/light_off.svg`}
                        className="hud__speedometr__light-off"
                    />
                    <img
                        src={this.state.door ? `https://state-99.com/client/images/icons/hud/car_lock_off_default.svg` : `https://state-99.com/client/images/icons/hud/car_lock_off.svg`}
                        className="hud__speedometr__door-on"
                    />
                    <img
                        src={this.state.door ? `https://state-99.com/client/images/icons/hud/car_lock_on.svg` : `https://state-99.com/client/images/icons/hud/car_lock_on_default.svg`}
                        className="hud__speedometr__door-off"
                    />
                    <img
                        src={this.state.turnLeft ? `https://state-99.com/client/images/icons/hud/arrow_left_on.svg` : `https://state-99.com/client/images/icons/hud/arrow_left_off.svg`}
                        className="hud__speedometr__arrow-left"
                    />
                    <img
                        src={this.state.turnRight ? `https://state-99.com/client/images/icons/hud/arrow_right_on.svg` : `https://state-99.com/client/images/icons/hud/arrow_right_off.svg`}
                        className="hud__speedometr__arrow-right"
                    />
                    <div className="hud__speedometr__info">
                        <div className="hud__speedometr__info__row">
                            <img
                                src={this.state.fuelType === '%' ? `https://state-99.com/client/images/icons/hud/power.svg` : `https://state-99.com/client/images/icons/hud/fuel.svg`}
                                className="hud__speedometr__info__fuel"
                                width="14"
                                style={{filter: ((this.state.max_fuel / 10 >= this.state.fuel) && this.state.fuelType !== '%') ? 'invert(57%) sepia(78%) saturate(6251%) hue-rotate(337deg) brightness(133%) contrast(113%)' : 'none'}}
                            />
                            <span className="hud__speedometr__info__fuel__text">{`${this.state.fuel}/${this.state.max_fuel}`}</span>
                        </div>
                        {!this.state.isShowSmall && (
                            <span className="hud__speedometr__info__carname">
                            {this.state.carname}
                        </span>)}
                    </div>
                </div>
                

            </React.Fragment>
        )
    }
}

export default Car;
