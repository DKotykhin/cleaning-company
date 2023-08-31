"use client";

import React from 'react';

import { useForm, Controller } from "react-hook-form";

import Image from "next/image";

import { EmailInput, UserNameInput, PhoneInput } from 'components/inputs/_index';
import { ContactFormValidation } from 'validation/userValidation';

import styles from './sendForm.module.scss';

interface IContactFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
}

const SendForm = () => {

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IContactFormData>(ContactFormValidation);

    const onSubmit = (data: IContactFormData): void => {
        console.log(data);
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