import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Messenger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Messenger.jsx', error, errorInfo); // eslint-disable-line
    }

    componentWillMount() {
        this.setState({ chats: this.props.data }, () => {
            for (let i = 0; i < this.state.chats.length; i++) {
                this.setState(prevState => ({
                    ...prevState.chats[i].message = [...this.state.chats[i].message].sort(
                        function (a, b) {
                            if (a.date === b.date) {
                                return b.time > a.time;
                            }
                            return a.date < b.date ? 1 : -1;
                        })
                }))
            }
        })
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.props.data !== prevProp.data) {
            this.setState({ chats: this.props.data }, () => {
                for (let i = 0; i < this.state.chats.length; i++) {
                    this.setState(prevState => ({
                        ...prevState.chats[i].message = [...this.state.chats[i].message].sort(
                            function (a, b) {
                                if (a.date === b.date) {
                                    return b.time > a.time;
                                }
                                return a.date < b.date ? 1 : -1;
                            })
                    }))
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="dedbit-menu">
                    <div className="u-title">
                        <span className="u-texttittle-center">Onion Messenger</span>
                    </div>
                    <div className="messenger-main">
                        {this.state.chats.map((e, i) => {
                            try {
                                let index = `umessagechatbox${i}`
                                return (
                                    <div className="m-box-sms" key={index}
                                        onClick={() => this.props.selectChat(e.phone_number)}>
                                        <img src="https://a.rsg.sc/n/socialclub" alt="" className="m-img-sms" />
                                        <div className="m-box-messeng">
                                            <div className="m-box-clm-mes">
                                                <div
                                                    className="mes-title">{this.props.getContactByNumber(e.phone_number) !== null ? this.props.getContactByNumber(e.phone_number).name : e.phone_number}</div>
                                                <div
                                                    className="mes-text">{e.message.length !== 0 ? e.message[0].text : ''}</div>
                                            </div>
                                            <div className="m-box-clm-info">
                                                <div
                                                    className="m-time">{e.message.length !== 0 ? e.message[0].time.substr(0, 5) : ''}</div>
                                                {e.new_messages !== undefined && e.new_messages > 0 ?
                                                    <div className="m-crl-box">{e.new_messages}</div> : null}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } catch (e) {
                                console.log(e);
                                return null;
                            }
                        })}
                        <Fab color="primary" aria-label="add" onClick={() => this.props.setLink('/phone/android/messenger/addchat')}>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Messenger;
