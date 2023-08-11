"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

import logo from '/public/logo.svg';
import facebook from '/public/icons/facebook.svg';
import instagram from '/public/icons/instagram.svg';
import phone from '/public/icons/phone.svg';
import mail from '/public/icons/mail.svg';

import styles from './footer.module.scss';

const Footer = () => {

    const router = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        alt={'logo Cleaning company'}
                        width={206}
                        priority
                        onClick={() => router.push('/')}
                    />
                    <p>Commercial Cleaning Company</p>
                </div>
                <div className={styles.column}>
                    <div onClick={() => router.push('/')}>Home</div>
                    <div onClick={() => router.push('/services')}>Services</div>
                    <div onClick={() => router.push('/industries')}>Industries</div>
                </div>
                <div className={styles.column}>
                    <div onClick={() => router.push('/aboutUs')}>About Us</div>
                    <div onClick={() => router.push('/contacts')}>Contacts</div>
                    <div onClick={() => router.push('/contacts')}>Help</div>
                </div>
                <div className={styles.lastColumn}>
                    <p>Socials</p>
                    <div className={styles.socials}>
                        <Link href={'https://google.com'} target='_blank'>
                            <Image
                                src={facebook}
                                alt={'facebook icon'}
                                width={24}
                            />
                        </Link>
                        <Link href={'https://google.com'} target='_blank'>
                            <Image
                                src={instagram}
                                alt={'instagram icon'}
                                width={24}
                            />
                        </Link>
                    </div>
                    <div className={styles.phone}>
                        <Image
                            src={phone}
                            alt={'phone icon'}                           
                        />
                        <a href="tel:2958675950">+2958675950</a>
                    </div>
                    <div className={styles.mail}>
                        <Image
                            src={mail}
                            alt={'mail icon'}
                        />
                        <a href="mailto:pristine12@gmail.com">pristine12@gmail.com</a>
                    </div>
                    <div className={styles.socials_mobile}>
                        <a href="tel:2958675950">
                            <Image
                                src={phone}
                                alt={'phone icon'}
                                width={24}
                            />
                        </a>
                        <a href="mailto:pristine12@gmail.com">
                            <Image
                                src={mail}
                                alt={'mail icon'}
                                width={24}
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