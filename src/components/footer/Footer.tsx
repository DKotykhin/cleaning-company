import React from 'react';

import Image from "next/image";
import Link from 'next/link';

import { navLinks } from 'constants/navLinks';

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
                <nav className={styles.menu}>
                    {navLinks.map(item => (
                        <Link href={item.url} key={item.name}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
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