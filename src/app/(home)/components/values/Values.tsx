import React from 'react';

import Image from "next/image";

import styles from './values.module.scss';

const valuesData = [
    {
        id: 1,
        url: '/icons/values/value-1.svg',
        text: 'The company exists to serve its customers, employees and owners.',
    },
    {
        id: 2,
        url: '/icons/values/value-2.svg',
        text: 'We always go above promises.',
    },
    {
        id: 3,
        url: '/icons/values/value-3.svg',
        text: 'Excellence is a standard that we follow.',
    },
    {
        id: 4,
        url: '/icons/values/value-4.svg',
        text: 'We have a win-win attitude.',
    },
    {
        id: 5,
        url: '/icons/values/value-5.svg',
        text: 'We’re always in touch and ready to assist you.',
    },
    {
        id: 6,
        url: '/icons/values/value-6.svg',
        text: 'We embrace new technologies.',
    },
    {
        id: 7,
        url: '/icons/values/value-7.svg',
        text: 'Integrity and trust drive us.',
    },
];

const ValueItem = ({ url, text }: { url: string, text: string }) => {
    return (
        <>
            <Image
                src={url}
                alt={'value'}
                width={80}
                height={80}
            />
            <p>{text}</p>
        </>
    );
};

const Values = () => {
    return (
        <div className={styles.container}>
            <div className={styles.triangle}>
                <Image
                    src={'/icons/triangle-white.svg'}
                    alt={'triangle'}
                    width={56}
                    height={48}
                />
            </div>
            <div className={styles.box}>
                <div className={styles.title_box}>
                    <h2>These are our <span>Core Values</span></h2>
                    <div className={styles.line}></div>
                </div>
                {
                    valuesData.map(item => (
                        <div key={item.id} className={styles.value}>
                            <ValueItem url={item.url} text={item.text} />
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Values;