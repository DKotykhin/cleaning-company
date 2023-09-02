import React from 'react';

import Image from "next/image";

import styles from './whyUs.module.scss';

const whyUsData = [
    {
        id: 1,
        url: '/icons/headset.svg',
        title: '24-hour response',
        subtitle: 'You don’t need to wait an answer for a long time, we are going to respond within 24 hours.',
    },
    {
        id: 2,
        url: '/icons/handshake.svg',
        title: '1:1 Customer Service',
        subtitle: 'We do everything without intermediaries implementing all your wishes,',
    },
    {
        id: 3,
        url: '/icons/sparkle.svg',
        title: '100% efficiency',
        subtitle: 'We follow only high safety standards, all our employees are highly-trained with years of experience.',
    },
];

const WhyUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.line}></div>
                <h2 className='block-title'>Why <span>Us</span></h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.services}>
                {whyUsData.map(item => (
                    <div key={item.id} className={styles.service_box}>
                        <Image
                            src={item.url}
                            alt={'service'}
                            width={48}
                            height={48}
                        />
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUs;