import React from 'react'



const styles = {
    header: {
        height: '26%',
        width: '100%',
        display: 'flex'
    },
    headerText: {
        fontFamily: 'Choujikuu',
        color: '#000',
        fontSize: '1rem',
        paddingLeft: '2%',
        width: '85%',
        height: '100%',
        alignItems: 'center',
        display: 'flex'
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    countNotifi: {
        backgroundColor: '#fff',
        width: '8%',
        marginLeft: '12%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    countText: {
        fontFamily: 'Choujikuu',
        color: '#000',
        fontSize: '1.2rem',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
}

class Notification extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }



    render() {

        if (!this.state.show) {
            return null;
        }

        return(
            <div style={styles.header} className="notification-container">
                <div style={styles.textContainer}>
                    <div style={{height: '100%', width: '10%', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={require(`../../../../inventory/img/all-items/Item_${this.props.img}.png`)} width="80%" height="80%" style={{filter: 'brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(7500%) hue-rotate(230deg) brightness(107%) contrast(100%)'}} />
                    </div>
                    <span style={styles.headerText}>
                        {this.props.name}
                    </span>
                </div>
                {this.props.count - 1 > 0 && (
                <div style={styles.countNotifi}>
                    <span style={styles.countText}>
                        {this.props.count - 1 >= 9 ? `9+` : this.props.count - 1}
                    </span>
                </div>
                )}
            </div>
        )
    }


}

export default Notification