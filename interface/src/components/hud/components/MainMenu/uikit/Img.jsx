import React from 'react'

export default function Img(name) {
    const styles = {
        iconContainer: {
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center'
        }
    }


    return (
        <div className={name.arrow ? "list-arrow-icon" : "iconContainer"} style={styles.iconContainer}>
            <img src={`https://state-99.com/client/images/icons/hud_a/${name.name}.png`} width={name.size || "76"} height={name.size || "76"} />
        </div>
    )
}