import React from 'react';

import Link from 'next/link';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Weaving <br />
                    Dreams into <br />
                    Pristine Realities
                </h1>
                <div className={styles.line}></div>
                <h4>Where Cleanliness and Comfort Converge &ndash; Transforming Your Environment into a Haven of Immaculate Bliss</h4>
                <div className={styles.buttons}>
                    <Link href={'/services'}>See Services</Link>
                    <Link href={'/industries'}>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;