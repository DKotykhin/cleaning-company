"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href={'/'}>
                        <Image
                            src={'/logo.svg'}
                            alt={'logo Cleaning company'}
                            width={206}
                            height={73}
                            priority
                            className='logo'
                        />
                    </Link>
                    <p>Commercial Cleaning Company</p>
                </div>
                <div className={styles.column}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/services'}>Services</Link>
                    <Link href={'/industries'}>Industries</Link>
                </div>
                <div className={styles.column}>
                    <Link href={'/aboutUs'}>About Us</Link>
                    <Link href={'/contacts'}>Contacts</Link>
                    <Link href={'/contacts'}>Help</Link>
                </div>
                <div className={styles.lastColumn}>
                    <p>Socials</p>
                    <div className={styles.socials}>
                        <Link href={'https://google.com'} target='_blank'>
                            <Image
                                src={'/icons/facebook.svg'}
                                alt={'facebook icon'}
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link href={'https://google.com'} target='_blank'>
                            <Image
                                src={'/icons/instagram.svg'}
                                alt={'instagram icon'}
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>
                    <div className={styles.phone}>
                        <Image
                            src={'/icons/phone.svg'}
                            alt={'phone icon'}
                            width={24}
                            height={24}
                        />
                        <a href="tel:2958675950">+2958675950</a>
                    </div>
                    <div className={styles.mail}>
                        <Image
                            src={'/icons/mail.svg'}
                            alt={'mail icon'}
                            width={24}
                            height={24}
                        />
                        <a href="mailto:pristine12@gmail.com">pristine12@gmail.com</a>
                    </div>
                    <div className={styles.socials_mobile}>
                        <a href="tel:2958675950">
                            <Image
                                src={'/icons/phone.svg'}
                                alt={'phone icon'}
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="mailto:pristine12@gmail.com">
                            <Image
                                src={'/icons/mail.svg'}
                                alt={'mail icon'}
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.right}>
                © 2023 Pristine. All Rights Reserved. Designed & Developed by WebXwiz
            </div>
        </div>
    );
};

export default Footer;