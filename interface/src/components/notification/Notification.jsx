import React from 'react';
import './css/notification.css'
import EventManager from "../../EventManager";

class Notification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            type: 0,
            position: 'center', //leftTop,left,leftBottom,centerTop,center,centerBottom,rightTop,right,rightBottom
            icon: 'unicorm', //unicorm
            title: 'Заголовок подсказки', //Для type 2 title: '!'
            text: `Таким образом сложившаяся структура организации~br~позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений.
            `,
            isShowClose: true,
            value: ['Далее']
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Notification.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('dialog', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                if (this.state.show)
                    this.closeBtn.bind(this);

                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({show: value.isShow});
                this.setState({isShowClose: value.isShowClose});
                this.setState({type: value.dtype});
                this.setState({position: value.position});
                this.setState({icon: value.icon});
                this.setState({title: value.title});
                this.setState({text: value.text});
                this.setState({value: value.buttons});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('dialog');
    }

    escapeRegExp = function(str) {
        return str.toString().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    replaceAll(str, find, replace){
        return str.toString().replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
        //return str.toString().split(find).join(replace);
    };

    closeBtn() {
        this.setState({show: false});

        try {
            mp.trigger('client:events:dialog:onClose'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    clickBtn() {
        try {
            this.setState({show: false});
            mp.trigger('client:events:dialog:click'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const styleNotifi = `notifi-type notifi-position-${this.state.position}`;
        const styleIcons = `icons-${this.state.icon}`;
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className={styleNotifi} >
                    {this.state.type === 0 ?
                        <div className="notifi-first-box">
                            <div className="notifi-f-main">
                                {this.state.isShowClose && (<div onClick={this.closeBtn.bind(this)} className="notifi-close" />)}
                                <div
                                    className="notifi-text-box-z"
                                    dangerouslySetInnerHTML={{__html: this.replaceAll(this.state.text, '~br~', '<br>')}}
                                />
                            </div>
                            <div className="notifi-btn">
                                {this.state.value.map((e, i) => {
                                    let index = `notifibtnt${i}`
                                    return (
                                        <div onClick={this.clickBtn.bind(this)} className="n-btn-box"
                                             key={index}>{e}</div>
                                    )
                                })}
                            </div>
                        </div>
                        : null}
                    {this.state.type === 1 ?
                        <div className="notifi-first-box">
                            <div className="notifi-f-main">
                                <div className="notifi-head">
                                    {this.state.title !== "" ?
                                        <div className="notifi-title">
                                            {this.state.title}
                                        </div>
                                        : null}
                                    {this.state.isShowClose && (<div onClick={this.closeBtn.bind(this)} className="notifi-close" />)}
                                </div>
                                <div
                                    className="notifi-text-box"
                                    dangerouslySetInnerHTML={{__html: this.replaceAll(this.state.text, '~br~', '<br>')}}
                                />
                            </div>
                            <div className="notifi-btn">
                                {this.state.value.map((e, i) => {
                                    let index = `notifibtnt${i}`
                                    return (
                                        <div onClick={this.clickBtn.bind(this)} className="n-btn-box"
                                             key={index}>{e}</div>
                                    )
                                })}
                            </div>
                        </div>
                        : null}
                    {this.state.type === 2 ?
                        <div className="notifi-first-box">
                            <div className="notifi-f-main">
                                <div className="notifi-head">
                                    {this.state.title !== "" ?
                                        <div className="notifi-title-text">{this.state.title}</div>
                                        : null}
                                    {this.state.isShowClose && (<div onClick={this.closeBtn.bind(this)} className="notifi-close" />)}
                                </div>
                                <div
                                    className="notifi-text-box-last"
                                    dangerouslySetInnerHTML={{__html: this.replaceAll(this.state.text, '~br~', '<br>')}}
                                />
                            </div>
                            <div className="notifi-btn">
                                {this.state.value.map((e, i) => {
                                    let index = `notifibtnt${i}`
                                    return (
                                        <div onClick={this.clickBtn.bind(this)} className="n-btn-box"
                                             key={index}>{e}</div>
                                    )
                                })}
                            </div>
                        </div>
                        : null}
                </div>
            </React.Fragment>
        )
    }
}

export default Notification;
