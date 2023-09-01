"use client";

import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { toast } from 'react-toastify';

import Image from "next/image";

import { EmailInput, UserNameInput, PhoneInput } from 'components/inputs/_index';
import { ContactFormValidation } from 'validation/userValidation';
import { serviceData } from 'app/services/components/explore/serviceData';

import styles from './sendForm.module.scss';

interface IContactFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
    service: string,
}

const SendForm = () => {

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IContactFormData>(
        {
            ...ContactFormValidation,
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                service: localStorage.getItem('serviceValue') || "",
            },
        });

    const onSubmit = async (formData: IContactFormData): Promise<void> => {
        // console.log(formData);
        toast.info('Waiting for sending request...');
        const { firstName, lastName, email, phone, message, service } = formData;
        const data = {
            userName: firstName + ' ' + lastName,
            email,
            message,
            service,
            phone,
        };
        await fetch('/api/send-request-email', {
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
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_box}>
                    <UserNameInput
                        control={control}
                        name='firstName'
                        placeholder='First Name'
                        error={errors.firstName}
                    />
                    <UserNameInput
                        control={control}
                        name='lastName'
                        placeholder='Last Name'
                        error={errors.lastName}
                    />
                </div>
                <div className={styles.form_box}>
                    <EmailInput
                        control={control}
                        error={errors.email}
                    />
                    <PhoneInput
                        control={control}
                        error={errors.phone}
                    />
                </div>
                <div className={styles.select_box}>
                    <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                            <select
                                {...field}                                
                                className={errors.service ? styles.active : ''}
                            >
                                <option value="" disabled hidden>Select Service</option>
                                {serviceData.map(item => (
                                    <option value={item.title} key={item.id}>{item.title}</option>
                                ))}
                            </select>
                        )}
                    />
                    <p className={styles.error}>{errors.service?.message}</p>
                </div>
                <div className={styles.message_box}>
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                placeholder='Your wishes'
                                className={errors.message ? styles.active : ''}
                            />
                        )}
                    />
                    <p className={styles.error}>{errors.message?.message}</p>
                </div>
                <button type='submit' className={styles.button}>
                    <div className={styles.button_text}>
                        <span>Send</span>
                        <Image
                            src={'/icons/caretRight.svg'}
                            alt={'right'}
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default SendForm;