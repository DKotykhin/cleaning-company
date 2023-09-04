"use client";

import { useEffect, useState } from 'react';

import { useForm, Controller } from "react-hook-form";
import { toast } from 'react-toastify';

import { EmailInput, UserNameInput } from 'components/inputs/_index';
import { HomePageFormValidation } from 'validation/userValidation';

import styles from './contactForm.module.scss';

interface IContactFormData {
    userName: string,
    email: string,
    message: string,
}

const ContactForm = () => {

    const [workTime, setWorkTime] = useState(false);
    useEffect(() => {
        const currentHour = new Date(Date.now()).getHours();
        if (currentHour > 8 && currentHour < 20) setWorkTime(true);
        else setWorkTime(false);
    }, []);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IContactFormData>(HomePageFormValidation);

    const onSubmit = async (data: IContactFormData): Promise<void> => {
        // console.log(data);
        toast.info('Waiting for sending request...');
        await fetch('/api/send-contact-email', {
            method: 'POST',
            body: JSON.stringify({ data })
        })
            .then(response => {
                if (response.ok) {
                    toast.success('Email successfully sent!');
                    reset();
                }
            })
            .catch(err => {
                toast.error(`Can't send email. Check your internet connection`);
            });
    };

    return (
        <section className={styles.container}>
            <div className={styles.title_box}>
                <h2 className='block-title'>Contact <span>Us</span></h2>
                <div className={styles.line}></div>
            </div>
            <form className={styles.form_box} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.subtitle}>Your Details</p>
                <div className={styles.form_inputBox}>
                    <UserNameInput
                        control={control}
                        name='userName'
                        placeholder='Your Name'
                        error={errors.userName}
                    />
                    <EmailInput
                        control={control}
                        error={errors.email}
                    />
                </div>
                <div className={styles.message_box}>
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                placeholder='Your message'
                                className={errors.message ? styles.active : ''}
                            />
                        )}
                    />
                    <p className={styles.error}>{errors.message?.message}</p>
                </div>
                <div className={styles.button_box}>
                    <div className={styles.progress_box}>
                        <p className={styles.urgency}>Urgency of Reply </p>
                        <div className={styles.progress}>
                            {workTime ?
                                <div className={styles.fill_full}></div>
                                :
                                <div className={styles.fill_part}></div>
                            }
                        </div>
                        <div className={styles.text_box}>
                            <span>Normal</span>
                            <span>Urgent</span>
                            <span>Very Urgent</span>
                        </div>
                    </div>
                    <button type='submit' className={styles.button}>Send</button>
                </div>
            </form>
            <div className={styles.separator}></div>
        </section>
    );
};

export default ContactForm;