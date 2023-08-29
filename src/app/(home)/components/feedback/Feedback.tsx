import React from 'react';

import styles from './feedback.module.scss';

const Feedback = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.line}></div>
                <h2>Our Clients&apos; Feedback</h2>
                <div className={styles.line}></div>
            </div>
        </div>
    );
};

export default Feedback;