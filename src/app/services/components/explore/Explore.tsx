"use client";

import React from 'react';

import { useRouter } from 'next/navigation';
import Image from "next/image";

import { serviceData } from './serviceData';

import styles from './explore.module.scss';

const Explore = () => {

    const router = useRouter();
    const handleClick = (data: string) => {
        localStorage.setItem("serviceValue", data);
        router.push('/contacts');
    };

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.line}></div>
                <h2 className='block-title' id='firstService'>Explore in our <span>services</span></h2>
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
                            className={styles.image}
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
            <div className={styles.separator}></div>
        </section>
    );
};

export default Explore;