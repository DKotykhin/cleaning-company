import React from 'react';

import SendForm from '../sendForm/SendForm';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <p className='top-paragraph'>Contact us</p>
                    <h1 className='title'>
                        Ready for a Pristine facility? We&apos;re ready to clean!
                    </h1>
                    <div className='line-white'></div>
                    <h4 className='subtitle'>
                        We&apos;re available to assist and consult you anytime! Leave your message and receive a quick response.
                    </h4>
                </div>
                <SendForm />
            </div>
            <div className={styles.separator}></div>
        </div>
    );
};

export default TopBlock;