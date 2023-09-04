import React from 'react';

import Image from "next/image";
import Link from 'next/link';

import styles from './industries.module.scss';

const industriesData = [
    {
        id: 1,
        url: '/industries/industries-1.webp',
        title: 'Commercial Cleaning',
        subtitle: 'Cleaning of offices, retail stores, warehouses, and other business establishments.',
    },
    {
        id: 2,
        url: '/industries/industries-2.webp',
        title: 'Manufacturing Plants Factories',
        subtitle: 'It involves the removal of debris, dust, dirt, other contaminants from equipment, machinery, and surfaces.',
    },
    {
        id: 3,
        url: '/industries/industries-3.webp',
        title: 'Educational Institutions',
        subtitle: 'Cleaning of establishments dedicated to providing education and learning opportunities.',
    },
    {
        id: 4,
        url: '/industries/industries-4.webp',
        title: 'Retail Centers',
        subtitle: 'Cleaning of large complexes that house multiple retail stores, shops, other services and amenities.',
    },
    {
        id: 5,
        url: '/industries/industries-5.webp',
        title: 'Residential Complexes',
        subtitle: 'Cleaning of various types of housing such as apartments, condominiums, townhouses, homes.',
    },
    {
        id: 6,
        url: '/industries/industries-6.webp',
        title: 'Construction Sites',
        subtitle: 'Cleaning of buildings, infrastructure, or other structures that are being built, renovated, or repaired.',
    },
];

const Industries = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text_box}>
                <div className={styles.line}></div>
                <h2 className='block-title'><span>Industries</span> we services</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.industries}>
                {industriesData.map(item => (
                    <div key={item.id} className={styles.industries_card}>
                        <Image
                            src={item.url}
                            alt={'industry'}
                            width={408}
                            height={240}
                            priority
                        />
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                    </div>
                ))}

            </div>
            <Link
                href={'/services'}
                className='primary-button'
                style={{ margin: '24px auto 80px' }}
            >
                Order Service
            </Link>
            <div className={styles.separator}></div>
        </section>
    );
};

export default Industries;