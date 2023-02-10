import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'RobotoLight',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 300
    }
}


export default function RightLabel(props) {

    try {
        styles.header.fontFamily = props.font;
    }
    catch (e) {}

    return (
        <div>
            <p className="header" style={styles.header} dangerouslySetInnerHTML={{__html: parseText(props.text)}}></p>
        </div>
    )
}