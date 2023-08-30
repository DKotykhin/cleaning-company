import React from 'react';

import Image from "next/image";

import styles from '../experience.module.scss';

interface IAccordionItem {
    title: string,
    description: string,
    id: number,
    open: number,
    handleClick: (id: number) => void,
}

const AccordionItem: React.FC<IAccordionItem> = ({ title, description, id, handleClick, open }) => {

    return (
        <>
            <div className={styles.accordion_item}>
                <p className={styles.accordion_title}>
                    {title}
                </p>
                <Image
                    src={'/icons/caretDown.svg'}
                    alt={'button'}
                    width={24}
                    height={24}
                    onClick={() => handleClick(id)}
                />
            </div>
            {(id === open) &&
                <p className={styles.accordion_description}>
                    {description}
                </p>
            }
        </>
    );
};

export default AccordionItem;