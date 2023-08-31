import React from 'react';

import { Control, Controller, FieldError } from "react-hook-form";

import styles from './input.module.scss';

interface IPhoneInput {
    error?: FieldError;
    control: Control<any>;
}

const PhoneInput: React.FC<IPhoneInput> = ({ control, error }) => {

    return (
        <div className={styles.input_box}>
            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type='tel'
                        placeholder='Phone'
                        className={error ? styles.active : ''}
                    />
                )}
            />
            <p className={styles.error}>{error?.message}</p>
        </div>
    );
};

export { PhoneInput };