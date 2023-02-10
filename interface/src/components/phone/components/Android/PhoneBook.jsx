import React from 'react';

import MaterialIcon, {colorPalette} from 'material-icons-react';

class PhoneBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'PhoneBook.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="phonebook-content">
                    <div className="b-bar">
                        <div className="b-search">
                            <div className="b-imgsearch"><MaterialIcon icon="search" size={19}/></div>
                            <input type="text" className="b-inputtext" placeholder="Введите текст для поиска"/>
                        </div>
                        <div className="b-tabsbar">
                            <input type="radio" id="b-radio-tabs1" name="b-radio-tabs" defaultChecked="true"/>
                            <label htmlFor="b-radio-tabs1" className="b-tabs-radio"><MaterialIcon icon="star"
                                                                                                  size={19}/></label>
                            <input type="radio" id="b-radio-tabs2" name="b-radio-tabs"/>
                            <label htmlFor="b-radio-tabs2" className="b-tabs-radio"><MaterialIcon icon="access_time"
                                                                                                  size={19}/></label>
                            <input type="radio" id="b-radio-tabs3" name="b-radio-tabs"/>
                            <label htmlFor="b-radio-tabs3" className="b-tabs-radio"><MaterialIcon icon="group"
                                                                                                  size={19}/></label>
                        </div>
                    </div>
                    <div className="fix-b-callhist">
                        <div className="title-b-hist">История звонков</div>
                        <div className="b-box-history">
                            <div className="b-box-player">
                                <img src="https://a.rsg.sc/n/socialclub" alt="" className="b-img-player"/>
                                <div className="b-info-playercall">
                                    <div className="b-inf-name">Godvil Moretti</div>
                                    <div className="b-inf-data"><MaterialIcon icon="call_received" size={12}
                                                                              color="#FF2E58"/>Декабрь 3
                                    </div>
                                </div>
                                <div className="b-call"><MaterialIcon icon="call" size={19}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PhoneBook;
