import React from 'react';

import Link from 'next/link';
import Image from "next/image";

import styles from './services.module.scss';

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>Our <span>Pristine</span> Services</h2>
                <div className={styles.line}></div>
                <div className={styles.services}>
                    <div className={styles.service_box} style={{ marginRight: '24px' }}>
                        <Image
                            src={'/icons/service-1.svg'}
                            alt={'service'}
                            width={80}
                            height={80}
                        />
                        <h4>Floor stripping & Waxing</h4>
                        <p>We can help you to get rid of old wax, dirt from the floor and apply a new layer of wax.</p>
                    </div>
                    <div className={styles.service_box}  style={{ marginRight: '24px' }}>
                        <Image
                            src={'/icons/service-2.svg'}
                            alt={'service'}
                            width={80}
                            height={80}
                        />
                        <h4>Post-Construction Cleaning</h4>
                        <p>You definitely need it if you’ve just had a construction, renovation or remodeling of something.</p>
                    </div>
                    <div className={styles.service_box}  style={{ marginRight: '24px' }}>
                        <Image
                            src={'/icons/service-3.svg'}
                            alt={'service'}
                            width={80}
                            height={80}
                        />
                        <h4>Janitorial Service</h4>
                        <p>Janitorial Service is the cleaning and maintenance of commercial, industrial or institutional spaces. </p>
                    </div>
                    <div className={styles.service_box}>
                        <Image
                            src={'/icons/service-4.svg'}
                            alt={'service'}
                            width={80}
                            height={80}
                        />
                        <h4>Window washing</h4>
                        <p>Exterior cleaning includes not only window washing, but also walls, delicate glass surfaces, siding, and other outdoor surfaces.</p>
                    </div>

                </div>
                <Link href={'/services'}>Load More</Link>
            </div>
        </div>
    );
};

export default Services;