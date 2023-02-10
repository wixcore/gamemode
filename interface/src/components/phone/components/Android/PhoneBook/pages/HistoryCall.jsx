import React from 'react';

import MaterialIcon from 'material-icons-react';

class HistoryCall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'HistoryCall.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-b-hist">Журнал</div>
                <div className="b-box-history">
                    {this.props.history
                        .sort((a, b) => (a.data < b.data) ? 1 : -1)
                        .map((e, i) => {
                            let index = `history${i}`
                            return (
                                <div className="b-box-player" key={index} onClick={() => this.props.clickContact(e)}>
                                    <div className="b-info-playercall">
                                        <div
                                            className={e.type === 'call_missed' ? `b-inf-name-missed` : `b-inf-name`}>{this.props.getContactByNumber(e.number) !== null ? this.props.getContactByNumber(e.number).name : e.number}
                                            {(e.type === 'call_made' || e.type === 'call_received') && (
                                        <span className="b-info-playercall-from">
                                            {e.type === 'call_made' ? 'Исходящий' : 'Входящий'}
                                        </span>
                                    )}
                                            </div>
                                        <div className="b-inf-data">
                                            {e.data.substring(6, 8)}.{e.data.substring(4, 6)} {e.data.substring(9, 11)}:{e.data.substring(11, 13)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </React.Fragment>
        )
    }
}

export default HistoryCall;
