import React from 'react';

import Image from "next/image";

import styles from './advantages.module.scss';

const advantagesData = [
    {
        id: 1,
        url: '/icons/advantages/advantage-1.svg',
        text: 'Eco-friendly contemporary products',
        width: 720,
    },
    {
        id: 2,
        url: '/icons/advantages/advantage-2.svg',
        text: 'Responsible and reliable employees',
        width: 360,
    },
    {
        id: 3,
        url: '/icons/advantages/advantage-3.svg',
        text: 'Not harmful for health or environment',
        width: 360,
    },
    {
        id: 4,
        url: '/icons/advantages/advantage-4.svg',
        text: 'Effective strategies',
        width: 360,
    },
    {
        id: 5,
        url: '/icons/advantages/advantage-5.svg',
        text: 'Modern Approach',
        width: 360,
    },
    {
        id: 6,
        url: '/icons/advantages/advantage-6.svg',
        text: 'Ability to tackle dirtiness of any size',
        width: 360,
    },
    {
        id: 7,
        url: '/icons/advantages/advantage-7.svg',
        text: 'Precision and attention to details',
        width: 360,
    },
    {
        id: 8,
        url: '/icons/advantages/advantage-8.svg',
        text: 'Choice of methods and techniques specifically for your order and area',
        width: 720,
    },
    {
        id: 9,
        url: '/icons/advantages/advantage-9.svg',
        text: 'Latest efficient technologies',
        width: 360,
    },
    {
        id: 10,
        url: '/icons/advantages/advantage-10.svg',
        text: 'Results in all fields',
        width: 360,
    },
];

const Advantages = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.title_box}>
                    <h2>Our <span>Advantages</span></h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.images_box}>
                    {advantagesData.map(item => (
                        <div key={item.id} className={styles.image}>
                            <Image
                                src={item.url}
                                alt={'advantage'}
                                width={item.width}
                                height={253}
                                priority
                            />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;