import React from 'react';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <p className='top-paragraph'>Industries</p>
                    <h1 className='title'>
                        Our Industries
                    </h1>
                    <div className='line-white'></div>
                    <h4 className='subtitle'>
                    You can see our diligence and focus to details throughout all our industries in which we serve.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;