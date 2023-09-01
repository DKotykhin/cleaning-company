import React from 'react';

import Link from 'next/link';
import Image from "next/image";

import styles from './services.module.scss';

const serviceData = [
    {
        id: 1,
        url: '/icons/services/service-1.svg',
        title: 'Floor stripping & Waxing',
        subtitle: 'We can help you to get rid of old wax, dirt from the floor and apply a new layer of wax.',
    },
    {
        id: 2,
        url: '/icons/services/service-2.svg',
        title: 'Post-Construction Cleaning',
        subtitle: 'You definitely need it if you&apos;ve just had a construction, renovation or remodeling of something.',
    },
    {
        id: 3,
        url: '/icons/services/service-3.svg',
        title: 'Janitorial Service',
        subtitle: 'Janitorial Service is the cleaning and maintenance of commercial, industrial or institutional spaces.',
    },
    {
        id: 4,
        url: '/icons/services/service-4.svg',
        title: 'Window washing',
        subtitle: 'Exterior cleaning includes not only window washing, but also walls, delicate glass surfaces, siding, and other outdoor surfaces.',
    },
];

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2 className='block-title'>Our <span>Pristine</span> Services</h2>
                <div className={styles.line}></div>
                <div className={styles.services}>
                    {serviceData.map(item => (
                        <div key={item.id} className={styles.service_card}>
                            <Image
                                src={item.url}
                                alt={'service'}
                                width={80}
                                height={80}
                            />
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
                <Link
                    href={'/services'}
                    className='primary-button'
                    style={{ margin: '0 auto' }}
                >
                    See More
                </Link>
            </div>
        </div>
    );
};

export default Services;