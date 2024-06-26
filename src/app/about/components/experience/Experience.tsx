"use client";

import React, { useState } from 'react';

import Image from "next/image";

import { accordionData } from './accordion/accordionData';
import AccordionItem from './accordion/AccordionItem';

import styles from './experience.module.scss';

const Experience = () => {

    const [open, setOpen] = useState(0);

    const handleClick = (id: number) => {
        if (id === open) setOpen(0);
        else setOpen(id);
    };

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.accordion_box}>
                    <h2 className='block-title'>
                        All our employees are <span>highly-trained</span> with years of experience.
                    </h2>
                    {accordionData.map(item => (
                        <div key={item.id} className={styles.accordion}>
                            <AccordionItem
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                handleClick={handleClick}
                                open={open}
                            />
                        </div>
                    ))}
                </div>
                <Image
                    src={'/hands-cleaning.webp'}
                    alt={'cleaning'}
                    width={588}
                    height={599}
                    priority
                    className={styles.image}
                />
                <Image
                    src={'/hands-cleaning-resize.webp'}
                    alt={'cleaning'}
                    width={658}
                    height={444}
                    priority
                    className={styles.resized_image}
                />
            </div>
        </section>
    );
};

export default Experience;