import React from 'react';

import styles from './contactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title_box}>
                <h2>Contact <span>Us</span></h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.form_box}>
                <p className={styles.subtitle}>Your Details</p>
            </div>
            <div className={styles.separator}></div>
        </div>
    );
};

export default ContactForm;