"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

import logo from '/public/logo.svg';

import styles from './header.module.scss';


const Header = () => {

    const router = useRouter();

    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <ul className={styles.menu}>
                    <li>
                        <Image
                            src={logo}
                            alt={'logo Cleaning company'}
                            width={206}
                            priority
                            onClick={() => router.push('/')}
                        />
                    </li>
                    <li onClick={() => router.push('/')}>Home</li>
                    <li onClick={() => router.push('/services')}>Services</li>
                    <li onClick={() => router.push('/industries')}>Industries</li>
                    <li onClick={() => router.push('/aboutUs')}>About us</li>
                    <li onClick={() => router.push('/contacts')}>
                        <span>Contacts</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;