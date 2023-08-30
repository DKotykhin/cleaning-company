"use client";

import React from 'react';

import Image from "next/image";

import styles from './explore.module.scss';

const serviceData = [
    {
        id: 1,
        url: '/services/service-1.webp',
        title: 'Floor stripping & Waxing',
        subtitle: 'We can help you to get rid of old wax, dirt from the floor and apply a new layer of wax, It:',
        tags: ['Restores the floor’s shining', 'Protects from wear and tear', 'Improves the whole appearance of the space'],
    },
    {
        id: 2,
        url: '/services/service-2.webp',
        title: 'Window & Exterior Washing',
        subtitle: 'Exterior cleaning includes not only window washing, but also walls, delicate glass surfaces, siding, and other outdoor surfaces. You will get:',
        tags: ['More natural light', 'Brighter atmosphere', 'Crystal clear results'],
    },
    {
        id: 3,
        url: '/services/service-3.webp',
        title: 'Post-Construction Cleaning',
        subtitle: 'Janitorial service is the cleaning and maintenance of commercial, industrial or institutional spaces. Our professionals perform such tasks:',
        tags: ['Dusting, vacuuming', 'Mopping, sanitizing', 'Waste disposal and other'],
    },
    {
        id: 4,
        url: '/services/service-4.webp',
        title: 'Daily & steady Cleaning',
        subtitle: 'Daily cleaning includes regular cleaning tasks to maintain cleanliness and hygiene. It is essential for any space to create a pleasant environment. Some of the advantages are:',
        tags: ['Waste disposal and other', 'Long-term cost savings', 'Long-term cost savings'],
    },
    {
        id: 5,
        url: '/services/service-5.webp',
        title: 'Post-Construction Cleaning',
        subtitle: 'Daily cleaning includes regular cleaning tasks to maintain cleanliness and hygiene. It is essential for any space to create a pleasant environment. Some of the advantages are:',
        tags: ['Removal of dust and construction details', 'Improving air quality', 'Polishing the surfaces'],
    },
];

const Explore = () => {

    const handleClick = (data: string) => localStorage.setItem("serviceValue", data);

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.line}></div>
                <h2>Explore in our <span>services</span></h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.services}>
                {serviceData.map(item => (
                    <div key={item.id} className={styles.service_card}>
                        <Image
                            src={item.url}
                            alt={'service'}
                            width={408}
                            height={240}
                            priority
                        />
                        <h4>{item.title}</h4>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                        {item.tags.map((tag, i) => (
                            <div key={i} className={styles.tag_box}>
                                <Image
                                    src={'/icons/check.svg'}
                                    alt={'check'}
                                    width={24}
                                    height={24}
                                />
                                <p className={styles.tag}>{tag}</p>
                            </div>
                        ))}
                        <div className={styles.button_box}>
                            <div className={styles.line}></div>
                            <button onClick={() => handleClick(item.title)}>Order this service</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;