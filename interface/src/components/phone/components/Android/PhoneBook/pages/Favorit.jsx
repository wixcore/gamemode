import React from 'react';

import MaterialIcon from 'material-icons-react';

class Favorit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Favorit.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-b-hist">Избранное</div>
                <div className="b-box-history">
                    {this.props.contact
                        .filter(user => user.name.toString().toLowerCase().includes(this.props.filter.toString().toLowerCase()))
                        .filter(user => user.isFavorite)
                        .sort((a, b) => (a.name > b.name) ? 1 : -1)
                        .map((e, i) => {
                            let index = `favorit${i}`
                            return (
                                <div className="c-player-contact" key={index}
                                    onClick={() => this.props.clickContact(e)}>
                                    <img src={e.img} alt="" className="c-imgplayer"/>
                                    <span className="c-nameplayer">{e.name}</span>
                                </div>
                            )
                        })}
                </div>
            </React.Fragment>
        )
    }
}

export default Favorit;
