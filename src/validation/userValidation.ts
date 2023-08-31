import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const userName = yup
    .string()
    .matches(/^([^0-9]*)$/, "Enter letters!")
    .min(2, "Minimum 2 characters to fill")
    .max(20, "Maximum 20 characters to fill")
    .required("Required field!");

const email = yup
    .string()
    .email("Wrong email address")
    .required("Required field!");

const phone = yup
    .string()
    .min(7, "Minimum 7 characters to fill")
    .required("Required field!");

const message = yup
    .string()
    .min(5, "Minimum 5 characters to fill")
    .max(500, "Maximum 500 characters to fill")
    .required("Required field!");

const homePageSchema = yup.object({
    userName,
    email,
    message,
});
const contactSchema = yup.object({
    firstName: userName,
    lastName: userName,
    email,
    phone,
    message,
});

export const HomePageFormValidation: Object = {
    defaultValues: {
        userName: "",
        email: "",
        message: "",
    },
    resolver: yupResolver(homePageSchema),
    mode: "onChange",
};
export const ContactFormValidation: Object = {
    defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    },
    resolver: yupResolver(contactSchema),
    mode: "onChange",
};
