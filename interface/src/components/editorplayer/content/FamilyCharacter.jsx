import React from 'react';
import SliderArrow from './Elements/SliderArrow';
import {Link} from "react-router-dom";

class FamilyCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'FamilyCharacter.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="menu-editor-default">
                    <div className="title-block">Шаг 2</div>
                    <span className="title-in-block">Выберите пол</span>
                    <div className="change-sex-block">
                        <input type="radio" name="change-sex" id="change-male" defaultChecked
                               onChange={this.props.chekedSex.bind(this)}/>
                        <label htmlFor="change-male" className="change-sex-style">Мужской</label>
                        <input type="radio" name="change-sex" id="change-female"
                               onChange={this.props.chekedSex.bind(this)}/>
                        <label htmlFor="change-female" className="change-sex-style">Женский</label>
                    </div>
                    <div className="change-button-box">
                        <div className="change-button-box__row">
                            <SliderArrow
                                index={0}
                                index_help={this.props.slider_one}
                                title={this.props.title_one}
                                name_array={this.props.name_array_one}
                                clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                                clickRightArrow={this.props.clickRightArrow.bind(this)}
                            />
                            <SliderArrow
                                index={1}
                                index_help={this.props.slider_two}
                                title={this.props.title_two}
                                name_array={this.props.name_array_two}
                                clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                                clickRightArrow={this.props.clickRightArrow.bind(this)}
                            />
                        </div>
                        <div className="change-button-box__row">
                            <SliderArrow
                                index={2}
                                index_help={this.props.slider_three}
                                title={this.props.title_three}
                                name_array={this.props.name_array_three * 5}
                                clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                                clickRightArrow={this.props.clickRightArrow.bind(this)}
                            />
                            <SliderArrow
                                index={3}
                                index_help={this.props.slider_four}
                                title={this.props.title_four}
                                name_array={this.props.name_array_four * 5}
                                clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                                clickRightArrow={this.props.clickRightArrow.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="characteristic-editor">
                        <div className="box-character">
                            <span className="title-character">Выносливость</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.endurance + "%"}}></div>
                            </div>
                        </div>
                        <div className="box-character">
                            <span className="title-character">Сила</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.strength + "%"}}></div>
                            </div>
                        </div>
                        <div className="box-character">
                            <span className="title-character">Навык стрельбы</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.shooting + "%"}}></div>
                            </div>
                        </div>
                        <div className="box-character">
                            <span className="title-character">Навык пилота</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.flying + "%"}}></div>
                            </div>
                        </div>
                        <div className="box-character">
                            <span className="title-character">Навык вождения</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.driving + "%"}}></div>
                            </div>
                        </div>
                        <div className="box-character">
                            <span className="title-character">Психика</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.psychics + "%"}}></div>
                            </div>
                        </div>
                        <div className="box-character">
                            <span className="title-character">Удача</span>
                            <div className="range-character">
                                <div className="background-character-range"
                                     style={{width: this.props.stealth + "%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="last-button-menu">
                        <div className="box-last-btn" onClick={this.props.randomize.bind(this)}>Рандом</div>
                        <div className="box-last-btn" onClick={this.props.reset.bind(this)}>Сброс</div>
                        <Link to="/editor/editor-character/face-first">
                            <div className="box-last-btn">Далее</div>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FamilyCharacter;
