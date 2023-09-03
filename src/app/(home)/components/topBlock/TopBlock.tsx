import React from 'react';

import Link from 'next/link';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <h1 className='title'>
                        Your trusted cleaning company partner
                    </h1>
                    <div className='line-white'></div>
                    <h4 className='subtitle'>
                        Our company was established 15 years ago, but we always try to be even better
                    </h4>
                    <div className={styles.buttons}>
                        <Link href={'/services'}>See Services</Link>
                        <Link href={'/industries'}>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;