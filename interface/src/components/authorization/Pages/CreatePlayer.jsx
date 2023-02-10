import React from 'react';
import Title from '../uikit/Title';
import ChangePlayer from './Content/ChangePlayer';

class CreatePlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'CreatePlayer.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="reg-main">
                    <div className="create-content">
                        <div className="auth-input__text__container" style={{marginRight: '10%', marginTop: 0}}>
                            <Title text="Выберите персонажа чтобы продолжить" size="xxl" />
                            <Title text="Так же вы можете создать дополнительного персонажа" size="xl-regular" />
                        </div>
                        <ChangePlayer/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreatePlayer;
