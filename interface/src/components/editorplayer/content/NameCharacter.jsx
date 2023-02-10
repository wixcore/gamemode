import React from 'react';
import SliderEditor from './PageEditor/Elements/SliderEditor';
// import { Link } from 'react-router-dom';

class NameCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'NameCharacter.jsx', error, errorInfo); // eslint-disable-line
    }

    changeAge(val) {
        try {
            mp.trigger('client:events:custom:updateAge', // eslint-disable-line
                val);
        } catch (e) {
            console.log(e);
        }
    }

    registerPlayer() {
        try {
            mp.trigger('client:events:custom:register', // eslint-disable-line
                this.props.first_name, this.props.last_name, this.props.old_input, this.props.promocode, this.props.referer, this.props.nationality[this.props.index_help]);
        } catch (e) {
            console.log();
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="menu-editor-default def-style">
                    <div className="title-block">Шаг 1</div>
                    <span className="title-in-block">Введите свои данные</span>
                    <div className="create-info-input">
                        <input type="text" placeholder="Имя (Англ)" name="firstname-create" pattern="[a-zA-Z]*"
                               className="auth-input-style" value={this.props.first_name}
                               onChange={this.props.valueFirstName.bind(this)}/>

                        <input type="text" placeholder="Фамилия (Англ)" name="lastname-create" pattern="[a-zA-Z]*"
                               className="auth-input-style" value={this.props.last_name}
                               onChange={this.props.valueLastName.bind(this)}/>

                        <input type="text" placeholder="Возраст (От 18 до 60)" min="18" max="60" pattern="[0-9]*"
                               onInput={this.props.onCheckNumber.bind(this)}
                               onChange={this.changeAge(this.props.old_input)} value={this.props.old_input}
                               name="old-create" className="auth-input-style"/>

                        <input type="text" placeholder="Промокод (Если есть)" name="lastname-create" pattern="[a-zA-Z]*"
                               className="auth-input-style" value={this.props.promocode}
                               onChange={this.props.valuePromocode.bind(this)}/>

                        <input type="text" placeholder="Ник пригласившего (Если есть)" name="lastname-create" pattern="[a-zA-Z]*"
                               className="auth-input-style" value={this.props.referer}
                               onChange={this.props.valueReferer.bind(this)}/>
                    </div>
                    <div
                        className="box-change box-change__row otstup-box"
                        style={{flexDirection: 'column'}}
                    >
                        <span className="box-editor-title__namechar">{this.props.title}</span>
                        <div className="box-in-change editor-box-style">
                            <span className="chevron-left"
                                onClick={() => this.props.clickLeftArrow(0)}></span>
                            <div
                                className="label-change color-white">{this.props.nationality[this.props.index_help] !== undefined ? this.props.nationality[this.props.index_help] : this.props.nationality}</div>
                            <span className="chevron-right"
                                onClick={() => this.props.clickRightArrow(0)}></span>
                        </div>
                        <span className="box-editor-title__namechar-desc">{this.props.desc}</span>
                    </div>
                    <div className="last-button-menu">
                        <div className="box-last-btn">...</div>
                        <div className="box-last-btn" onClick={this.props.reset.bind(this)}>Сброс</div>
                        <div className="box-last-btn" onClick={this.registerPlayer.bind(this)}>Далее</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NameCharacter;
