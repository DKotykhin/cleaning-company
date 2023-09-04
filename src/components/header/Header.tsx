"use client";

import React, { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

import { navLinks } from 'constants/navLinks';

import styles from './header.module.scss';

const Header = () => {

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const offset = window.innerWidth - document.body.offsetWidth + 'px';
        if (openMenu) {
            document.body.style.overflowY = 'hidden';
            document.body.style.paddingRight = offset;
        } else {
            document.body.style.overflowY = 'unset';
            document.body.style.paddingRight = '0px';
        }
    }, [openMenu]);

    const handleClick = () => setOpenMenu(prev => !prev);

    return (
        <header className={styles.header}>
            <nav>
                <Link href={'/'}>
                    <Image
                        src={'/logo.svg'}
                        alt={'Cleaning company logo'}
                        width={200}
                        height={48}
                        priority
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
                </div>
                <div className={styles.burger_menu}>
                    <Image
                        src={'/icons/burger.svg'}
                        alt={'burger'}
                        width={32}
                        height={32}
                        onClick={handleClick}
                    />
                    {openMenu &&
                        <div className={styles.burger_menu_box}>
                            <div className={styles.burger_menu_header}>
                                <Image
                                    src={'/logo.svg'}
                                    alt={'Cleaning company logo'}
                                    width={200}
                                    height={48}
                                    priority
                                    className={styles.burger_menu_logo}
                                />
                                <Image
                                    src={'/icons/close.svg'}
                                    alt={'close'}
                                    width={32}
                                    height={32}
                                    onClick={handleClick}
                                />
                            </div>
                            {navLinks.map(item => (
                                <Link href={item.url} key={item.name} onClick={handleClick}>{item.name}</Link>
                            ))}
                        </div>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;