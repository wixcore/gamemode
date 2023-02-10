import React from 'react';

import "./css/certificate.css"

import img_woman from "./img/woman.png"
import img_man from "./img/man.png"
import flag from "./img/logo-2.png"
import gov from "./img/gov.png"
import fib from "./img/fib.png"
import lspd from "./img/lspd.png"
import sheriff from "./img/sheff.png"
import ems from "./img/ems.png"
import usmc from "./img/usmc.png"
import EventManager from "../../EventManager";

class Certificate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            type: 'gov',
            work: '',
            player_info: {
                name: 'Olejka Pelmeshka',
                sex: 'Мужской',
                dep: 'AirSupport Division',
                position: 'Специальный агент',
                id: '25',
                img: '',//https://a.rsg.sc/n/lendstoun
                subscribe: 'testerov'
            }
        }
    }

    componentDidMount() {

        EventManager.addHandler('certificate', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({player_info: value.info})
                this.setState({type: value.typef})
                this.setState({show: value.isShow})

                this.checkSexandImg();
                this.checkWork();
            } else return;
        })

        this.checkSexandImg();
        this.checkWork();
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Certificate.jsx', error, errorInfo); // eslint-disable-line
    }

    componentWillUnmount() {

        EventManager.removeHandler('certificate');

    }


    checkWork() {
        switch (this.state.type) {
            case 'gov':
                this.setState({work: 'Government of San Andreas', img_frac: `${gov}`})
                break;
            case 'fib':
                this.setState({work: 'Department of Investigations', img_frac: ` ${fib}`})
                break;
            case 'lspd':
                this.setState({work: 'LOS SANTOS POLICE DEPARTMENT', img_frac: ` ${lspd}`})
                break;
            case 'sheriff':
                this.setState({work: 'SHERIFF`S DEPARTMENT', img_frac: ` ${sheriff}`})
                break;
            case 'ems':
                this.setState({work: 'emergency medical services', img_frac: ` ${ems}`})
                break;
            case 'usmc':
                this.setState({work: 'united states marine corps', img_frac: ` ${usmc}`})
                break;
            case 'inv':
                this.setState({work: 'Life Invader News', img_frac: ``})
                break;
            default:
                break;
        }
    }

    labelBottom() {
        return (
            <React.Fragment>
                <div className={`${this.state.type} fib-btn-img`} />
            </React.Fragment>
        )
    }

    checkSexandImg() {
        if (this.state.player_info.img === '') {
            if (this.state.player_info.sex === 'Мужской') {
                this.setState({photo: img_man});
            } else {
                this.setState({photo: img_woman});
            }
        } else {
            this.setState({photo: this.state.player_info.img})
        }

    }

    render() {
        if (!this.state.show) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="fibcertificate-main">
                    <div className="fib-box">
                        <div className='fib-cert' style={{
                            background: `url(${this.state.img_frac}) no-repeat top 30px right, no-repeat -11% bottom`
                        }}>
                            <span className="fib-title-lic">{this.state.work}</span>
                            <div className="fib-pl-inf">
                                <div className="fib-img">
                                    <img src={this.state.photo} className="style-img-fib" alt=""/>
                                </div>
                                <div className="fib-second-inf">
                                    <div className="fib-second-inf-row">
                                        <span className="fib-name">{this.state.player_info.name}</span>
                                        <div className="fib-second-inf-line" />
                                    </div>
                                    <div className="box-fib-inf-tt">
                                        <span className="fib-grow ff-rr-kk">№</span>
                                        <span className="fib-black">{this.state.player_info.id}</span>
                                    </div>
                                    <div className="box-fib-inf-tt">
                                        <span className="fib-grow ff-rr-kk">Отдел</span>
                                        <span className="fib-black">{this.state.player_info.dep}</span>
                                    </div>
                                    <div className="box-fib-inf-tt">
                                        <span className="fib-grow ff-rr-kk">Должность</span>
                                        <span className="fib-black">{this.state.player_info.position}</span>
                                    </div>
                                    <div className="box-fib-inf-tt">
                                        <span className="fib-grow ff-rr-kk">Пол</span>
                                        <span className="fib-black">{this.state.player_info.sex}</span>
                                    </div>
                                    <div className="pl-cert-subscribe">
                                        <span className="pl-cert-subscribe-text"></span>
                                        <span className="pl-cert-subscribe-value">{this.state.player_info.subscribe}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fib-btn">
                            {this.labelBottom()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Certificate;
