import React from 'react';

import "./css/idcard.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"
import EventManager from "../../EventManager";

class IDCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            player_info: {
                firstname: 'Olejka',
                lastname: 'Pelmeshka',
                sex: 'Мужской',
                age: '25.01.1996',
                nation: 'Американец',
                regist: '',
                idcard: '00252',
                subscribe: 'Pojarou',
                img: '',//https://a.rsg.sc/n/lendstoun
            },
            photo: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'IDCard.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('cardid', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({player_info: value.info});
                this.setState({show: value.isShow});

                this.checkSexandImg();
            } else return;
        });

        this.checkSexandImg();
    }

    componentWillUnmount() {
        EventManager.removeHandler('cardid');
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
                <div className="idcard-main">
                    <div className="idcard_box">
                        <div className="osn-idcard">
                            <div className="clm-2-idcard">
                                <div className="plash_right">
                                    <div className="photo_player">
                                        <img src={this.state.photo} className="img-size-card" alt=""/>
                                    </div>
                                    <div className="pl_inf">
                                        <div className="pl-row">
                                            <div className="pl-clm-inf-n name-styl-id name-pff">
                                                <span className="pl-grow tsp-topname">Имя</span>
                                                <span className="pl-black">{this.state.player_info.firstname}</span>
                                            </div>
                                            <div className="pl-clm-inf-n name-styl-id name-pff btm-last">
                                                <span className="pl-grow tsp-topname">Фамилия</span>
                                                <span className="pl-black">{this.state.player_info.lastname}</span>
                                        </div>
                                    </div>
                                        <div className="pl-row">
                                            <div className="pl-sex">
                                                <span className="pl-grow row-tsp">Пол</span>
                                                <span className="pl-black">{this.state.player_info.sex}</span>
                                            </div>
                                            <div className="pl-age">
                                                <span className="pl-grow row-tsp">Возраст</span>
                                                <span className="pl-black">{this.state.player_info.age}</span>
                                            </div>
                                        </div>
                                        <div className="pl-clm">
                                            <div className="pl-clm-inf">
                                                <span className="pl-grow pl-clm-f">Национальность</span>
                                                <span className="pl-black">{this.state.player_info.nation}</span>
                                            </div>
                                            <div className="pl-clm-inf">
                                                <span className="pl-grow pl-clm-f">Регистрация</span>
                                                <span
                                                    className="pl-black">{this.state.player_info.regist === '' ? '--------------' : this.state.player_info.regist}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-clm-docs">
                                            <span className="pl-clm-inf-docs">Номер документа</span>
                                            <span className="pl-clm-inf-docs-num">{this.state.player_info.idcard}</span>
                                    </div>
                                    <div className="pl-idcard-subscribe">
                                        <span className="pl-idcard-subscribe-text">Личная подпись: </span>
                                        <span className="pl-idcard-subscribe-value">{this.state.player_info.subscribe}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default IDCard;
