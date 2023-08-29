import React from 'react';

import Image from "next/image";
import Link from 'next/link';

export const navLinks = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Services',
        url: '/services',
    },
    {
        name: 'Industries',
        url: '/industries',
    },
    {
        name: 'About us',
        url: '/about',
    },
    {
        name: 'Contact us',
        url: '/contacts',
    },
];

import styles from './footer.module.scss';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <Image
                        src={'/logo-footer.svg'}
                        alt={'Cleaning company logo'}
                        width={206}
                        height={73}
                        priority
                    />
                </Link>
                <div className={styles.menu}>
                    {navLinks.map(item => (
                        <Link href={item.url} key={item.name}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.last_box}>
                <div className={styles.text_box}>
                    Created by&nbsp;<Link href={'https://webxwiz.com'}>WebXwiz</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;