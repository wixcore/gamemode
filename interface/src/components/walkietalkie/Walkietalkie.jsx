import React from 'react';
import UIfx from 'uifx';
import { Animated } from 'react-animated-css';
import EventManager from "../../EventManager";

import click from './snd/click.mp3';
import pipmp3 from './snd/pip.mp3';
import errormp3 from './snd/error.mp3';
import beepmp3 from './snd/beep.mp3';
import './css/radioset.css'

const tick = new UIfx(
    click,
    {
        volume: 0.2,
        throttleMs: 50
    }
);
const pip = new UIfx(
    pipmp3,
    {
        volume: 0.2,
        throttleMs: 50
    }
);
const error = new UIfx(
    errormp3,
    {
        volume: 0.2,
        throttleMs: 50
    }
);
const beep = new UIfx(
    beepmp3,
    {
        volume: 0.2,
        throttleMs: 50
    }
);

class Walkietalkie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            visible: false,
            selectedFrq: ['115', '500'], // Текущая выбранная волна
            frq1: ['115', '456'],
            frq2: ['77', '01'],
            frqEdit: 0, // 0/1
            volume: 5, // Громкость собеседников в рации
            color: 'rgba(233, 135, 46, 0.9)',
            editingFrq: false,
            editFrqStage: 0,
            editingVolume: false,
            bgColors: [
                "rgba(233, 135, 46, 0.9)",
                "rgba(214, 62, 76, 0.9)",
                "rgba(155, 62, 214, 0.9)",
                "rgba(99, 62, 214, 0.9)",
                "rgba(64, 62, 214, 0.9)",
                "rgba(62, 130, 214, 0.9)",
                "rgba(36, 190, 235, 0.9)",
                "rgba(36, 235, 170, 0.9)",
                "rgba(20, 231, 74, 0.9)",
                "rgba(216, 191, 14, 0.9)",
                "rgba(229, 82, 14, 0.9)"
            ]
        }
        
    }

    componentDidCatch(error, errorInfo) {
        try {
            mp.trigger('client:ui:debug', 'Walkietalkie.jsx', error, errorInfo); // eslint-disable-line
        }
        catch (e) {
            
        }
    }

    componentDidMount() {
        EventManager.addHandler('walkietalkie', value => {
            if (value.type === 'show') {
                this.setState({ show: true, visible: true })
            }
            else if (value.type === 'hide') {
                this.setState({ visible: false })
                setTimeout(() => {
                    this.setState({ show: false })
                }, 300);
            }
            else if (value.type === 'showOrHide') {
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
                    mp.trigger('client:walkietalkie:status', status); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
            }
            else if (value.type === 'updateValues') {
                this.setState({ frq1: value.frq1 });
                this.setState({ frq2: value.frq2 });
                this.setState({ frqEdit: value.frqEdit });
                this.setState({ volume: value.volume });
                this.setState({ color: value.color });
            }
            else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('walkietalkie');
    }
    
    changeClr() {
        let index = this.state.bgColors.indexOf(this.state.color);
        if(index === this.state.bgColors.length-1) index = 0;
        this.setState({color: this.state.bgColors[index+1]});

        try {
            mp.trigger('client:walkietalkie:color', this.state.bgColors[index+1]); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    arrowUp() {
        if(this.state.editingFrq) return;
        if(this.state.editingVolume) {
            if(this.state.volume<10) this.setState({volume: this.state.volume+1}, () => beep.play(this.state.volume/10))

            try {
                mp.trigger('client:walkietalkie:volume', this.state.volume); // eslint-disable-line
            }
            catch (e) {
                console.log(e);
            }

            return;
        }

        try {
            mp.trigger('client:walkietalkie:frqChange', 0); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }

        this.setState({frqEdit: 0});
    }

    arrowDown() {
        if(this.state.editingFrq) return;
        if(this.state.editingVolume) {
            if(this.state.volume>0) this.setState({volume: this.state.volume-1}, () => beep.play(this.state.volume/10))

            try {
                mp.trigger('client:walkietalkie:volume', this.state.volume); // eslint-disable-line
            }
            catch (e) {
                console.log(e);
            }
            return;
        }

        try {
            mp.trigger('client:walkietalkie:frqChange', 1); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }

        this.setState({frqEdit: 1});
    }

    editFrqButton() {
        if(this.state.editingVolume || this.state.editingFrq){
            error.play();
            return;
        }
        this.setState({editingFrq: true})
        if (!this.state.frqEdit) {
            this.setState({frq1: [''].concat([this.state.frq1[1]])})
        } else {
            this.setState({frq2: [''].concat([this.state.frq2[1]])})
        }
        this.setState({editFrqStage: 1});
    }

    editVolumeButton() {
        if(this.state.editingFrq){
            error.play();
            return;
        }
        this.setState({editingVolume: !this.state.editingVolume})
    }

    pressNumber(number) {
        if (!this.state.editingFrq) return;
        if (!this.state.frqEdit && this.state.editFrqStage === 1) {
            this.setState({frq1: [this.state.frq1[0]+number, this.state.frq1[1]]}, () => {if(this.state.frq1[0].length===3) this.setState({editFrqStage: 2, frq1: [this.state.frq1[0]].concat([''])})})
        } else if (this.state.frqEdit && this.state.editFrqStage === 1){
            this.setState({frq2: [this.state.frq2[0]+number, this.state.frq2[1]]}, () => {if(this.state.frq2[0].length===3) this.setState({editFrqStage: 2, frq2: [this.state.frq2[0]].concat([''])})})
        } else if (!this.state.frqEdit && this.state.editFrqStage === 2){
            this.setState({frq1: [this.state.frq1[0], this.state.frq1[1]+number]}, () => {if(this.state.frq1[1].length===3) this.setState({editFrqStage: 0, editingFrq: false}, () => this.okButton())})
        } else if (this.state.frqEdit && this.state.editFrqStage === 2){
            this.setState({frq2: [this.state.frq2[0], this.state.frq2[1]+number]}, () => {if(this.state.frq2[1].length===3) this.setState({editFrqStage: 0, editingFrq: false}, () => this.okButton())})
        } else return;
    }

    okButton() {
        if (this.state.editingVolume) {
            this.setState({ editingVolume: false });
            pip.play();
            return;
        }
        if (this.state.editingFrq) {
            if(this.state.editFrqStage === 1) {
                if (!this.state.frqEdit) {
                    this.setState({frq1: [this.state.frq1[0]].concat([''])})
                } else {
                    this.setState({frq2: [this.state.frq2[0]].concat([''])})
                }
                this.setState({editFrqStage: 2})
                return;
            } else if(this.state.editFrqStage === 2) this.setState({ editingFrq: false, editFrqStage: 0 });
        }
        if (!this.state.frqEdit) {
            if (this.state.frq1[0].length === 0 || this.state.frq1[1].length === 0) {
                error.play();
                return;
            } else {
                this.setState({currentFrq: this.state.frq1})
                try {
                    mp.trigger('client:walkietalkie:frq1', JSON.stringify(this.state.frq1)); // eslint-disable-line
                }
                catch (e) {
                    console.log(e);
                }
            }
        } else {
            if (this.state.frq2[0].length === 0 || this.state.frq2[1].length === 0) {
                error.play();
                return;
            } else {
                this.setState({currentFrq: this.state.frq2})
                try {
                    mp.trigger('client:walkietalkie:frq2', JSON.stringify(this.state.frq2)); // eslint-disable-line
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        pip.play();
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                
                <div className="adaptive position" id="box">
                <Animated animationIn="slideInUp" animationOut="slideOutDown" animationInDuration="300" animationOutDuration="300" isVisible={this.state.visible}>
                    <div className="radioset-box">
                        <div className="position-window">
                            <div className="window-radioset">
                                <div className="window-blick"></div>
                                <div className="position-text-screen" style={{backgroundColor: this.state.color}}>
                                    <div className="position-mode">
                                        <div className="mode-state">{this.state.editingFrq ? 'FREQUENCY' : this.state.editingVolume ? 'VOLUME' : ''}</div>
                                    </div>
                                    <div className="position-other-txt">
                                        <div className="state-other-txt posit-w">W</div>
                                        <div className="posit-dcs">DCS</div>
                                    </div>
                                    <div className="icons-window">
                                        <div className="icons-signal"></div>
                                        <div className="icons-sound-email">
                                            <div className="icons-email"></div>
                                            <div className={`position-sound ${this.state.volume>0 ? 'sound-on' : 'sound-off'}`}></div>
                                            <div className="icons-battery"></div>
                                        </div>
                                    </div>
                                    <div className="arrow-and-wave">
                                        <div className="position-wavenumber">
                                            <div className="wave-number">
                                                <div className="num-wave-post">
                                                    <div className={`num-wave-first ${this.state.editingFrq && this.state.frqEdit === 0 && this.state.editFrqStage === 1 ? 'w-select-border' : ''}`}>{this.state.frq1[0]}</div>
                                                    <div>.</div>
                                                    <div className={`num-wave-last ${this.state.editingFrq && this.state.frqEdit === 0 && this.state.editFrqStage === 2 ? 'w-select-border' : ''}`}>{this.state.frq1[1]}</div>
                                                </div>
                                                <div className="num-wave-post">
                                                    <div className={`num-wave-first ${this.state.editingFrq && this.state.frqEdit === 1 && this.state.editFrqStage === 1 ? 'w-select-border' : ''}`}>{this.state.frq2[0]}</div>
                                                    <div>.</div>
                                                    <div className={`num-wave-last ${this.state.editingFrq && this.state.frqEdit === 1 && this.state.editFrqStage === 2 ? 'w-select-border' : ''}`}>{this.state.frq2[1]}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.frqEdit ? <div className="arrow-cheked position-arrow-last"></div> : <div className="arrow-cheked position-arrow-first"></div> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-position">
                            <div className="button-radioset">
                                <div className="button-first">
                                    <div className="button-fitst-left">
                                        <div className="button-normal menu otstup">
                                            <div className="button-normal-in" onClick={() => {tick.play(); this.changeClr()}}>
                                                <p className="button-normal-text">CLR</p>
                                            </div>
                                        </div>
                                        <div className="button-normal ok">
                                            <div className="button-normal-in" onClick={() => {tick.play(); this.okButton()}}>
                                                <p className="button-normal-text">OK</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-first-center">
                                        <div className="button-big">
                                            <div className="button-big-in">
                                                <div className="button-arrow" onClick={() => {tick.play(); this.arrowUp()}}>
                                                    <div className="arrow-button arr-pos-first"></div>
                                                </div>
                                                <div className="button-arrow arr-pos" onClick={() => {tick.play(); this.arrowDown()}}>
                                                    <div className="arrow-button arr-pos-last"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-fitst-right scan">
                                        <div className="button-normal otstup">
                                            <div className="button-normal-in" onClick={() => {this.editVolumeButton(); tick.play()}}>
                                                <p className="button-normal-text">VOL</p>
                                            </div>
                                        </div>
                                        <div className="button-normal mode">
                                            <div className="button-normal-in" onClick={() => {this.editFrqButton(); tick.play()}}>
                                                <p className="button-normal-text">FRQ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-last">
                                    <div className="button-small 1 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('1')}}>
                                            <p className="button-small-text">1 ABC</p>
                                        </div>
                                    </div>
                                    <div className="button-small 2 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('2')}}>
                                            <p className="button-small-text">2 DEF</p>
                                        </div>
                                    </div>
                                    <div className="button-small 3">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('3')}}>
                                            <p className="button-small-text">3 GHI</p>
                                        </div>
                                    </div>
                                    <div className="button-small 4 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('4')}}>
                                            <p className="button-small-text">4 JKL</p>
                                        </div>
                                    </div>
                                    <div className="button-small 5 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('5')}}>
                                            <p className="button-small-text">5 MNO</p>
                                        </div>
                                    </div>
                                    <div className="button-small 6">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('6')}}>
                                            <p className="button-small-text">6 PQR</p>
                                        </div>
                                    </div>
                                    <div className="button-small 7 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('7')}}>
                                            <p className="button-small-text">7 STU</p>
                                        </div>
                                    </div>
                                    <div className="button-small 8 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('8')}}>
                                            <p className="button-small-text">8 VWX</p>
                                        </div>
                                    </div>
                                    <div className="button-small 9">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('9')}}>
                                            <p className="button-small-text">9 YZ</p>
                                        </div>
                                    </div>
                                    <div className="button-small 10 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => tick.play()}>
                                            <p className="button-small-text">*</p>
                                        </div>
                                    </div>
                                    <div className="button-small 0 btn-smal-margin">
                                        <div className="button-small-in" onClick={() => {tick.play(); this.pressNumber('0')}}>
                                            <p className="button-small-text">0</p>
                                        </div>
                                    </div>
                                    <div className="button-small 11">
                                        <div className="button-small-in" onClick={() => tick.play()}>
                                            <p className="button-small-text">#</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Animated>
                </div>
               
            </React.Fragment>
        )
    }
}

export default Walkietalkie;
