import React from 'react';
import EventManager from "../../../EventManager";
import Button from '../uikit/Button';
import Title from '../uikit/Title'
import authImageBg from '../img/auth.png'
import regImageBg from '../img/reg.png'
import IconVolumeOn from '../img/volume_on.svg'
import IconVolumeOff from '../img/volume_off.svg'
import music from '../img/music.mp3'

class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAuto: true,
            acceptRules: false,
            isMusicPlay: true,
            login: '',
            password: '',
            mailReg: '',
            loginReg: '',
            passwordReg: '',
            passwordRegCheck: '',
            pagePlayer: '',
            audioUrl: '',
            defaultLogin: '',
            modalrules: false,
        }
    };

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo); // eslint-disable-line
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.showAuto) this.clickLogin();
            else this.clickReg();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);

        EventManager.addHandler('authMain:2', value => {
            if (value.type === 'login') {
                this.setState({defaultLogin: value.login})

            } else return;
        })

        this.audio = new Audio(music)
        this.audio.load()
    }


    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
        EventManager.removeHandler('authMain:2');
    }

    handleChange(value) {
        this.setState({ showAuto: value });
    };

    valueLogin(event) {
        this.setState({ login: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePassword(event) {
        this.setState({ password: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valueMailReg(event) {
        this.setState({ mailReg: event.target.value })
    };

    valueLoginReg(event) {
        this.setState({ loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePasswordReg(event) {
        this.setState({ passwordReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePasswordRegCheck(event) {
        this.setState({ passwordRegCheck: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };



    clickLogin() {
        try {
            if (!this.state.login)
            {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.defaultLogin, this.state.password);
            }
            else {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.login, this.state.password);
            }
        } catch (e) {
            console.log(e);
        }
    };

    clickReg() {
        try {
            mp.trigger('client:user:auth:register', // eslint-disable-line
                this.state.mailReg, this.state.loginReg,
                this.state.passwordReg, this.state.passwordRegCheck,
                this.state.acceptRules);
        } catch (e) {
            console.log(e);
        }
    };

    musicChangeState = () => {
        this.setState((value) => (
            {isMusicPlay: !value.isMusicPlay}
        ))
        if (this.state.isMusicPlay) {
            this.audio.play()
        } else {
            this.audio.pause()
        }
    }

    acceptRules = () => {
        this.setState({
            acceptRules: !this.state.acceptRules
        });
    };
    clickCheckRules() {
        this.setState({
            modalrules: true,
        });
    }
    closeRules() {
        this.setState({
            modalrules: false,
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="auth-main" style={{
                    /*backgroundImage: `url(${this.state.showAuto ? authImageBg : regImageBg})`,
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'bottom',
                    backgroundSize: '50%'*/
                }}>
                    <div className="auth__background" />
                    <div className="content-main">
                        <div className="auth__music" onClick={() => this.musicChangeState()}>
                            <img src={this.state.isMusicPlay ? IconVolumeOff : IconVolumeOn } width="64" />
                        </div>
                        <div className="content-auth">
                            <div className="button-main">
                                <input type="radio" id="btn-radio-auth1" name="btn-radio-auth" defaultChecked="true"
                                    onChange={() => this.handleChange(true)} />
                                <label htmlFor="btn-radio-auth1" className="button-auth">Авторизация</label>
                                <input type="radio" id="btn-radio-auth2" name="btn-radio-auth"
                                    onChange={() => this.handleChange(false)} />
                                <label htmlFor="btn-radio-auth2" className="button-auth">Регистрация</label>
                            </div>
                            {this.state.showAuto ?
                                <React.Fragment>
                                    <div className="auth-input">
                                        <div className="auth-input__text__container">
                                            <Title text="Добро пожаловать на State 99" size="xxl" />
                                            <Title text="Авторизуйтесь, чтобы продолжить" size="xl-regular" />
                                        </div>
                                        <input type="text" pattern="[a-zA-Z0-9]*" placeholder="Введите логин"
                                            name="login-auth" className="auth-input-style"
                                            onChange={this.valueLogin.bind(this)}
                                            //value={this.state.login}
                                            defaultValue={this.state.defaultLogin}
                                        />
                                        <input type="password" pattern="[a-zA-Z0-9]*" placeholder="Введите пароль"
                                            name="password-auth" className="auth-input-style"
                                            value={this.state.password} onChange={this.valuePassword.bind(this)}
                                        />
                                    </div>
                                    <Button text="Войти" onClick={this.clickLogin.bind(this)} />
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="auth-input">
                                        <div className="auth-input__text__container">
                                            <Title text="Добро пожаловать на State 99" size="xxl" />
                                            <Title text="Пройдите регистрацию для начала игры" size="xl-regular" />
                                        </div>
                                        <div className="reg-bloc">
                                            <input type="text" pattern="[a-zA-Z0-9]*" placeholder="Придумайте логин"
                                                name="create-login" className="reg-input-style"
                                                value={this.state.loginReg}
                                                onChange={this.valueLoginReg.bind(this)}
                                            />
                                            <input type="text" placeholder="Введите свой E-mail" name="create-email"
                                                className="reg-input-style" onChange={this.valueMailReg.bind(this)}
                                            />

                                        </div>
                                        <div className="reg-bloc">
                                            <input type="password" pattern="[a-zA-Z0-9]*"
                                                placeholder="Придумайте пароль" value={this.state.passwordReg}
                                                name="create-password" className="reg-input-style"
                                                onChange={this.valuePasswordReg.bind(this)}
                                            />
                                            <input type="password" pattern="[a-zA-Z0-9]*" placeholder="Повторите пароль"
                                                value={this.state.passwordRegCheck} name="create-password-repeat"
                                                className="reg-input-style"
                                                onChange={this.valuePasswordRegCheck.bind(this)}
                                            />
                                        </div>
                                        <div className="reg-checkbox">
                                            <input type="checkbox" name="chek1" id="chk1" className="chk-reg-inpt"
                                                defaultChecked={this.state.acceptRules} onChange={this.acceptRules}
                                            />
                                            <label className="chk_reg" htmlFor="chk1">
                                                <div className="chk-circle"></div>
                                                <p id="button_rules" onClick={this.clickCheckRules.bind(this)}>Согласен с правилами проекта и принимаю условия</p>
                                            </label>
                                        </div>
                                    </div>
                                    <Button text="Готово" onClick={this.clickReg.bind(this)} />
                                </React.Fragment>
                            }
                        </div>
                    </div>
                    {this.state.modalrules ?
                        <div className="iframe_rules">
                            <div id="rules">
                                <div className="close-rules"><div className="close-img-rules" onClick={this.closeRules.bind(this)}></div></div>
                                <iframe src="https://state-99.com/rules#container" sandbox></iframe>

                            </div>
                        </div> : ''}
                </div>
            </React.Fragment>
        )
    }
}

export default Authorization;
