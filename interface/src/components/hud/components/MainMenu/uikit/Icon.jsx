import React from 'react'

export default function Icon(name) {
    const styles = {
        iconContainer: {
            width: '24px',
            height: '20px',
            display: 'flex',
            alignItems: 'center'
        }
    }
    

    return (
        <div className={name.arrow ? "list-arrow-icon" : "iconContainer"} style={styles.iconContainer}>
            <img src={require(`../img/icons/${name.name}.png`)} width={name.size || "15"} height={name.size || "15"} />
        </div>
    )
}