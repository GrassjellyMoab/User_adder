import React from 'react';
import styles from './UsernameItem.module.css'

const UsernameItem = props => {
    return (
        <div className={styles['userlist']}>
            <div className={styles['content']}>
                {`${props.username} (${props.age} years old)`}
            </div>
        </div>
    )
}

export default UsernameItem