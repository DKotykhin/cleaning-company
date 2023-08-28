import React from 'react';

import Image from "next/image";

import styles from './values.module.scss';

const Values = () => {
    return (
        <div className={styles.container}>
            <Image
                src={'/icons/triangle-white.svg'}
                alt={'triangle'}
                width={55}
                height={48}
                className={styles.triangle}
            />
            <div className={styles.box}>
                <h2>These are our <span>Core Values</span></h2>
                <div className={styles.line}></div>

            </div>
        </div>
    );
};

export default Values;