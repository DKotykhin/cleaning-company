import React from 'react';

import { Control, Controller, FieldError } from "react-hook-form";

import styles from './input.module.scss';

interface IUserNameInput {
    error?: FieldError;
    control: Control<any>;
    name: string;
    placeholder: string;
}

const UserNameInput: React.FC<IUserNameInput> = ({ control, error, name, placeholder }) => {
    
    return (
        <div className={styles.input_box}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type='string'
                        placeholder={placeholder}
                        className={error ? styles.active : ''}
                    />
                )}
            />
            <p className={styles.error}>{error?.message}</p>
        </div>
    );
};

export { UserNameInput };