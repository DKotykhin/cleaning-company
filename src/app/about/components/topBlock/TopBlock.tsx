import React from 'react';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <p className='top-paragraph'>About us</p>
                    <h1 className='title'>
                        We can gift your <br /> area a new look.
                    </h1>
                    <div className='line-white'></div>
                    <h4 className='subtitle'>
                        We specialize in creating comfortable and spotless spaces according to your needs, We bring hygiene to every surface that our workers touch. Stop postponing cleaning every time and order our services now!
                    </h4>
                </div>
                <div className={styles.card_block}>
                    <div className={styles.card_wrapper}>
                        <div className={styles.card}>
                            <p className={styles.title}>15+</p>
                            <p className={styles.subtitle}>Year of experiences</p>
                        </div>
                        <div className={styles.card}>
                            <p className={styles.title}>1.8K+</p>
                            <p className={styles.subtitle}>Customer & order</p>
                        </div>
                    </div>
                    <div className={styles.card_wrapper}>
                        <div className={styles.card}>
                            <p className={styles.title}>8+</p>
                            <p className={styles.subtitle}>Various services</p>
                        </div>
                        <div className={styles.card}>
                            <p className={styles.title}>90%</p>
                            <p className={styles.subtitle}>Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBlock;