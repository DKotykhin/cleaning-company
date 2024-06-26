"use client";

import React from 'react';

import Link from 'next/link';

import styles from './topBlock.module.scss';
import { useScrollAndRedirect } from 'hooks/useScrollAndRedirect';

const TopBlock = () => {

    const scroll = useScrollAndRedirect();

    return (
        <section className={styles.container}>
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
                        {/* <Link href={'/services/#firstService'}>See Services</Link> */}
                        <button onClick={() => scroll('/services', 'firstService')}>See Services</button>
                        <Link href={'/industries'}>Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBlock;