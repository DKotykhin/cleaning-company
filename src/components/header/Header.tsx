"use client";

import React, { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

import styles from './header.module.scss';

const navLinks = [
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
        url: '/aboutUs',
    },
];

const Header = () => {

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    const handleKeydown = (e: any) => {        
        if (e.code === 'Escape') setOpenMenu(false);
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeydown);

        return () => window.removeEventListener("keydown", handleKeydown);
    }, []);

    return (
        <nav className={styles.header}>
            <div className={styles.container}>
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
                <div className={styles.menu}>
                    {navLinks.map(item => (
                        <Link href={item.url} key={item.name}>
                            <span className={(pathname === item.url) ? styles.active : ''}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                    <Link href={'/contacts'}>
                        <span>
                            Contacts
                        </span>
                    </Link>
                </div>
                <Image
                    src={'/icons/menu.svg'}
                    width={40}
                    height={40}
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
                            src={'/icons/x.svg'}
                            width={24}
                            height={24}
                            alt={'menu close'}
                        />
                        <div className={styles.burger_menu_list}>
                            {navLinks.map(item => (
                                <Link href={item.url} key={item.name}>
                                    <p className={(pathname === item.url) ? styles.active : ''}>
                                        {item.name}
                                    </p>
                                </Link>
                            ))}
                            <Link href={'/contacts'}>
                                <span>
                                    Contacts
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;