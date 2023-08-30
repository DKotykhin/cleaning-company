import React from 'react';

import styles from './topBlock.module.scss';

const TopBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text_block}>
                    <p>Industries</p>
                    <h1>
                        Our Industries
                    </h1>
                    <div className={styles.line}></div>
                    <h4>
                    You can see our diligence and focus to details throughout all our industries in which we serve.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;