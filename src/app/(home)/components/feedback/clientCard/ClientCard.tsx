import React from 'react';

import Image from "next/image";

import styles from './clientCard.module.scss';

interface IClientCard {
    text: string,
    url: string,
    name: string,
    position: string,
    isActive: boolean,
}

const ClientCard: React.FC<IClientCard> = ({ text, url, name, position, isActive }) => {

    return (
        <div
            className={styles.container}
            style={isActive ? { opacity: 1 } : { opacity: 0.6 }}
        >
            <div className={isActive ? styles.text_box_active : styles.text_box}>
                <Image
                    src={'/icons/quote.svg'}
                    alt={'quote'}
                    width={40}
                    height={40}
                />
                <p className={styles.text}>{text}</p>
            </div>
            {isActive &&
                <Image
                    src={'/icons/triangle-blue.svg'}
                    alt={'triangle'}
                    width={40}
                    height={40}
                    className={styles.triangle}
                />
            }
            <Image
                src={url}
                alt={'avatar'}
                width={56}
                height={56}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
        </div>
    );
};

export default ClientCard;