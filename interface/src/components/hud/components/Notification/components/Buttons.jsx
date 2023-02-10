import React from 'react'

const styles = {
    buttonContainer: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '0.5%'
    },
    acceptButton: {
        backgroundColor: 'rgba(47, 233, 99, 1)',
        width: '48%',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    declineButton: {
        backgroundColor: 'rgba(237, 29, 29, 1)',
        width: '48%',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontFamily: 'Choujikuu',
        fontSize: 10,
        padding: '3%',
        textAlign: 'center'
    },
    timer: {
        fontFamily: 'Choujikuu',
        display: 'flex',
        alignItems: 'center'
    }
}

class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={styles.buttonContainer}>
                <div style={styles.acceptButton}>
                    <span style={styles.btnText}>
                        Y - принять
                    </span>
                </div>
                <div style={styles.declineButton}>
                    <span style={styles.btnText}>
                        N - отклонить
                    </span>
                </div>
            </div>
        )
    }
}

export default Buttons