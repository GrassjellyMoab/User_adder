import React from 'react';
import styles from './Error.module.css';

const Error = props => {

    return (
        <div>
            <div className={styles['CoverInput']}></div>
            <div className={styles['errorWindow']}>
                <div className={styles['title']}>InvalidInput</div>
                <div className={styles['miniContainer']}>
                    <div className={styles['content']}>{props.content}</div>
                    <button type="button" className={styles['button']} onClick={props.exit}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Error;