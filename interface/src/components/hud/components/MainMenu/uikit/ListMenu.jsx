import React from 'react'
import Icon from './Icon'
import parseText from '../functions/parseText'

const styles = {
    container: {
        display: 'flex',
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        alignItems: 'center',
        position: 'relative',
        overflow: 'auto'
    },
    listitem: {
        fontFamily: 'RobotoLight',
        color: '#fff',
        fontSize: '1.3rem',
        marginRight: 'auto'
    },
    itemCarousel: {
        fontFamily: 'RobotoLight',
        color: '#fff',
        fontSize: '1.2rem',
        textAlign: 'center',
        overflow: 'hidden',
        width: '100%'
    },
    carousel: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff',
        overflow: 'hidden',
        maxWidth: '80%'
    },
    icon: {
        cusor: 'pointer',
        justifyContent: 'center'
    }
}

export default class ListMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    handleOnClick() {
        try {
            if (this.props.selectCurrent === this.props.id)
                mp.trigger('client:menuList:callBack:btn', this.props.data.menuName, this.props.data.id, JSON.stringify(this.props.data.data.params)); // eslint-disable-line
        }
        catch (e) {}
    }

    render() {

        try {
            styles.listitem.fontFamily = this.props.font;
            styles.itemCarousel.fontFamily = this.props.font;
        }
        catch (e) {}

        return (
            <div style={styles.container} onClick={this.handleOnClick.bind(this)} tabIndex="2">
                {this.props.data.data.icon ? <Icon name={this.props.data.data.icon} /> : <></>}
                <input style={{opacity: 0, height: "0px", width: "0px", position: 'absolute'}} autoFocus={true} />
                <label style={styles.listitem} dangerouslySetInnerHTML={{__html: parseText(this.props.data.data.title)}}>
                </label>
                <div style={styles.carousel}>
                    <div style={styles.icon} onClick={() => this.props.prevVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_left" />
                    </div>
                    <div style={styles.itemCarousel}
                        value={this.props.data.data.items[this.props.data.data.index]}
                        onClick={() => this.props.nextVal()}
                        dangerouslySetInnerHTML={{__html: parseText(this.props.data.data.items[this.props.data.data.index])}}   
                    />
                    <div style={styles.icon} onClick={() => this.props.nextVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_right" />
                    </div>
                </div>
            </div>
        );
    }
}