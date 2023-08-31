"use client";

import React, { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

import { navLinks } from 'constants/navLinks';

import styles from './header.module.scss';

const Header = () => {

    const pathname = usePathname();
    // const [openMenu, setOpenMenu] = useState(false);

    // const handleKeydown = (e: { code: string }) => {
    //     if (e.code === 'Escape') setOpenMenu(false);
    // };
    // useEffect(() => {
    //     window.addEventListener("keydown", handleKeydown);

    //     return () => window.removeEventListener("keydown", handleKeydown);
    // }, []);

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
            </nav>
        </header>
    );
};

export default Header;