import React from 'react';
import addPlayerIcon from '../../img/icon_add_player.svg'
import persPlaceholder from '../../img/pers1.png'

class BoxCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'BoxCreate.jsx', error, errorInfo); // eslint-disable-line
    }

    clickCreatePlayer() {
        mp.trigger('client:events:createNewPlayer'); // eslint-disable-line
    };

    render() {
        return (
            <React.Fragment>
                <div className="change-create-player-create">
                    <div className="block-create">
                        <div className="block-innerhit">
                            <div className="summ-create">
                                <div className="createhero__box">
                                     <span
                                        className="create-hero-btn"
                                        onClick={this.clickCreatePlayer.bind(this)}
                                    >
                                        Создать персонажа
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BoxCreate;
