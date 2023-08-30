import React from 'react';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <p>Contact us</p>
                    <h1>
                        Ready for a Pristine <br /> facility? We&apos;re <br /> ready to clean!
                    </h1>
                    <div className={styles.line}></div>
                    <h4>
                        We&apos;re available to assist and consult you anytime! Leave your message and receive a quick response.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;