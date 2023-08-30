import React from 'react';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <p>Our services</p>
                    <h1>
                        Our Cleaning <br /> Services
                    </h1>
                    <div className={styles.line}></div>
                    <h4>
                        Our team helps you to maintain comfort and hygiene offering different services. Our mission is to provide you with a sparkling clean home without dangerous chemical residues.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;