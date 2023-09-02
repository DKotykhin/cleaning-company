import React from 'react';

import Image from "next/image";

import styles from './place.module.scss';

const Place = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2 className='block-title'>
                    Pristine transforms your place into fresh and comfortable space.
                </h2>
                <h4>
                    Your property represents more than just a physical structure, it shows your investment and future. That’s why, we also consider it our responsibility.  We offer facility solutions with attention to every aspect, dedication to excellent customer service and a team of professionals.
                </h4>
                <Image
                    src={'/people-taking-care.svg'}
                    alt={'space'}
                    width={1320}
                    height={500}
                    priority
                />
            </div>
        </div>
    );
};

export default Place;