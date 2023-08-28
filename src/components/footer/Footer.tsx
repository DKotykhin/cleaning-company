import React from 'react';

import Image from "next/image";
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                Footer
            </div>           
        </footer>
    );
};

export default Footer;