import React from 'react';

import Image from "next/image";

import styles from './partners.module.scss';

const iconsUrl = [
    {
        id: 1,
        url: '/icons/partners/partner-1.svg',
    },
    {
        id: 2,
        url: '/icons/partners/partner-2.svg',
    },
    {
        id: 3,
        url: '/icons/partners/partner-3.svg',
    },
    {
        id: 4,
        url: '/icons/partners/partner-4.svg',
    },
    {
        id: 5,
        url: '/icons/partners/partner-5.svg',
    },
    {
        id: 6,
        url: '/icons/partners/partner-6.svg',
    },
    {
        id: 7,
        url: '/icons/partners/partner-7.svg',
    },
    {
        id: 8,
        url: '/icons/partners/partner-8.svg',
    },
];

const Partners = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>Our <span>Business Partners</span></h2>
                <div className={styles.line}></div>
                <div className={styles.icon_box}>
                    {iconsUrl.map(item => (
                        <div key={item.id}>
                            <Image
                                src={item.url}
                                alt={'partner'}
                                width={200}
                                height={68}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;