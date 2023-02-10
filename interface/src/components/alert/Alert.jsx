import React from 'react';
import './css/notification.css'
import EventManager from "../../EventManager";

class Alert extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            type: this.props.type === 0 ? 0 : this.props.type,
            position: 'center', //leftTop,left,leftBottom,centerTop,center,centerBottom,rightTop,right,rightBottom
            icon: 'unicorm', //unicorm
            title: this.props.title || 'заголовок подсказки', //Для type 2 title: '!'
            text: this.props.text || `Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений.
            `,
            isShowClose: false,
            value: this.props.value || [{text: 'Далее', type: -1}],
            playerIdInput: '',
            priceInput: ''
        }
    }

    escapeRegExp = function(str) {
        return str.toString().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    replaceAll(str, find, replace){
        return str.toString().replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
        //return str.toString().split(find).join(replace);
    };

    closeBtn() {

        try {
            this.props.setAlert(false)
            mp.trigger('client:events:dialog:onClose'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    clickBtn() {
        try {
            this.props.setAlert(false)
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
                <div className={styleNotifi} style={{background: 'rgba(0,0,0,0.9)', zIndex: 100}}>
                    {this.state.type === 2 && (
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
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="accountmenu__content__reports__dialog__input" style={{width: '100%', height: 'auto'}}>
                                        <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <input style={{width: '100%'}} type="text" name="name" placeholder="Введите ID игрока..." className="accountmenu__report__input" value={this.state.playerIdInput} onChange={(event) => this.setState({playerIdInput: event.target.value})} />
                                        </label>
                                    </div>
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
                                        <div
                                            onClick={this.clickBtn.bind(this)}
                                            className={`n-btn-box ${e.type ? `alert-access-btn` : `alert-decline-btn`} `}
                                            key={index}
                                        >
                                            <span style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                                                {e.text}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    {this.state.type === 1 && (
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
                                        <div
                                            onClick={this.clickBtn.bind(this)}
                                            className={`n-btn-box ${e.type ? `alert-access-btn` : `alert-decline-btn`} `}
                                            key={index}
                                        >
                                            <span style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                                                {e.text}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    {this.state.type === 0 && (
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
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="accountmenu__content__reports__dialog__input" style={{width: '30%', height: 'auto'}}>
                                        <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <input style={{width: '100%'}} type="text" name="name" placeholder="Введите ID игрока..." className="accountmenu__report__input" value={this.state.playerIdInput} onChange={(event) => this.setState({playerIdInput: event.target.value})} />
                                        </label>
                                    </div>
                                    <div className="accountmenu__content__reports__dialog__input" style={{width: '70%', height: 'auto'}}>
                                        <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <input style={{width: '70%'}} type="text" name="name" placeholder="Введите сумму продажи..." className="accountmenu__report__input" value={this.state.priceInput} onChange={(event) => this.setState({priceInput: event.target.value})} />
                                        </label>
                                    </div>
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
                                        <div
                                            onClick={this.clickBtn.bind(this)}
                                            className={`n-btn-box ${e.type ? `alert-access-btn` : `alert-decline-btn`} `}
                                            key={index}
                                        >
                                            <span style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                                                {e.text}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Alert;
