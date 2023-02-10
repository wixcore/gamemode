import React from 'react';

import "./css/workid.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"
import EventManager from "../../EventManager";

class WorkID extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            player_info: {
                firstname: 'Olejka',
                lastname: 'Pelmeshka',
                sex: 'Мужской',
                age: '25.01.1996',
                first_work: 'Строитель',
                second_work: 'Таксист',
                lvl_work: '10',
                experience: '2',
                data: '05.02.2020',
                idwork: 'WID10-79292724055',
                subscribe: 'Testerov',
                img: '',//https://a.rsg.sc/n/lendstoun
            },
            photo: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'WorkID.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('workid', value => {
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
        EventManager.removeHandler('workid');
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
                    <div className="workid-box">
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
                                            <div className="pl-age pl-clm-inf-n name-styl-id name-pff">
                                                <span className="pl-grow row-tsp otsp_work">Пол</span>
                                                <span className="pl-black pl-workid-sex">{this.state.player_info.sex}</span>
                                            </div>
                                        </div>
                                        <div className="pl-clm-inf-n name-styl-id name-pff btm-last">
                                            <span className="pl-grow tsp-topname">Фамилия</span>
                                            <span className="pl-black">{this.state.player_info.lastname}</span>
                                        </div>
                                        <div className="pl-row">
                                            <div className="pl-workcard">
                                                <span className="pl-grow row-tsp otsp_work">Основная работа</span>
                                                <span className="pl-black">{this.state.player_info.first_work}</span>
                                            </div>
                                            <div className="pl_work_birthday">
                                                <span className="pl-grow row-tsp otsp_work">Дата рождения</span>
                                                <span className="pl-black">{this.state.player_info.age}</span>
                                            </div>
                                        </div>
                                        <div className="pl-row">
                                            <div className="pl-workcard">
                                                <span className="pl-grow row-tsp otsp_work">Уровень рабочего</span>
                                                <span className="pl-black">{this.state.player_info.lvl_work}</span>
                                            </div>
                                            <div className="pl-work2">
                                                <span className="pl-grow row-tsp otsp_work">Опыт рабочего</span>
                                                <span className="pl-black">{this.state.player_info.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-age pl-clm-inf-n name-styl-id name-pff pl-work-id-date-block">
                                        <span className="pl-grow row-tsp otsp_work">Дата получения</span>
                                        <span className="pl-black pl-work-id-date">{this.state.player_info.data}</span>
                                    </div>
                                    <div className="pl-clm-docs-work">
                                        <span className="pl-clm-inf-docs">Номер документа</span>
                                        <span className="pl-clm-inf-docs-num">{this.state.player_info.idwork}</span>
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

export default WorkID;
