"use client";

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from "next/image";

import logo from '/public/logo.svg';
import menu from '/public/icons/menu.svg';
import x from '/public/icons/x.svg';

import styles from './header.module.scss';


const Header = () => {

    const router = useRouter();
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <Image
                    src={logo}
                    alt={'logo Cleaning company'}
                    width={206}
                    priority
                    onClick={() => router.push('/')}
                    className={styles.logo}
                />
                <ul className={styles.menu}>
                    <li
                        onClick={() => router.push('/')}
                        className={(pathname === '/') ? styles.active : ''}
                    >
                        Home
                    </li>
                    <li
                        onClick={() => router.push('/services')}
                        className={(pathname === '/services') ? styles.active : ''}
                    >
                        Services
                    </li>
                    <li
                        onClick={() => router.push('/industries')}
                        className={(pathname === '/industries') ? styles.active : ''}
                    >
                        Industries
                    </li>
                    <li
                        onClick={() => router.push('/aboutUs')}
                        className={(pathname === '/aboutUs') ? styles.active : ''}
                    >
                        About us
                    </li>
                    <li
                        onClick={() => router.push('/contacts')}
                    >
                        <span>Contacts</span>
                    </li>
                </ul>
                <Image
                    src={menu}
                    width={40}
                    alt={'menu Cleaning company'}
                    onClick={() => setOpenMenu(!openMenu)}
                    className={styles.burger}
                />
                <div className={openMenu ? styles.burger_menu : styles.burger_menu_close}>
                    <div
                        className={styles.burger_container}
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <Image
                            src={x}
                            width={24}
                            alt={'menu close'}
                        />
                        <ul className={styles.burger_menu_list}>
                            <li
                                onClick={() => router.push('/')}
                                className={(pathname === '/') ? styles.active : ''}
                            >
                                Home
                            </li>
                            <li
                                onClick={() => router.push('/services')}
                                className={(pathname === '/services') ? styles.active : ''}
                            >
                                Services
                            </li>
                            <li
                                onClick={() => router.push('/industries')}
                                className={(pathname === '/industries') ? styles.active : ''}
                            >
                                Industries
                            </li>
                            <li
                                onClick={() => router.push('/aboutUs')}
                                className={(pathname === '/aboutUs') ? styles.active : ''}
                            >
                                About us
                            </li>
                            <li
                                onClick={() => router.push('/contacts')}
                            >
                                <span>Contacts</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;