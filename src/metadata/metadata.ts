import { Metadata } from "next";

export const generalMetaData: Metadata = {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    authors: [
        {
            name: "webXwiz",
            url: "https://webxwiz.com",
        },
        {
            name: "Dmytro Kotykhin",
            url: "https://dmytro-kotykhin.space",
        },
    ],
};

export const mainPageMetaData: Metadata = {
    title: "Pristine Cleaning - Your trusted cleaning company partner",
    description:
        "We use only eco-friendly contemporary products for cleaning and choose methods and techniques specifically for your order and area. Pristine workers are equipped with the latest technology that is not harmful for health or environment at all.",
    keywords: [],
    metadataBase: new URL("https://pristinefm.com"),
    openGraph: {
        type: "website",
        url: "https://pristinefm.com/preview.png",
        title: "Pristine Cleaning - Your trusted cleaning company partner",
        description:
            "We use only eco-friendly contemporary products for cleaning and choose methods and techniques specifically for your order and area. Pristine workers are equipped with the latest technology that is not harmful for health or environment at all.",
        images: [],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pristine Cleaning - Your trusted cleaning company partner",
        description:
        "We use only eco-friendly contemporary products for cleaning and choose methods and techniques specifically for your order and area. Pristine workers are equipped with the latest technology that is not harmful for health or environment at all.",
        images: "https://pristinefm.com/preview.png",
    },
};

export const aboutPageMetaData: Metadata = {
    title: "Cleaning company - About",
    description: "Pristine Cleaning - Your trusted cleaning company partner",
    keywords: [],
    metadataBase: new URL("https://pristinefm.com/about"),
    openGraph: {
        type: "website",
        url: "https://pristinefm.com/preview.png",
        title: "Cleaning company - About",
        description:
            "Pristine Cleaning - Your trusted cleaning company partner",
        images: [],
    },
};

export const industriesPageMetaData: Metadata = {
    title: "Cleaning company - Industries",
    description: "Pristine Cleaning - Your trusted cleaning company partner",
    keywords: [],
    metadataBase: new URL("https://pristinefm.com/industries"),
    openGraph: {
        type: "website",
        url: "https://pristinefm.com/preview.png",
        title: "Cleaning company - Industries",
        description:
            "Pristine Cleaning - Your trusted cleaning company partner",
        images: [],
    },
};

export const servicesPageMetaData: Metadata = {
    title: "Cleaning company - Services",
    description: "Pristine Cleaning - Your trusted cleaning company partner",
    keywords: [],
    metadataBase: new URL("https://pristinefm.com/service"),
    openGraph: {
        type: "website",
        url: "https://pristinefm.com/preview.png",
        title: "Cleaning company - Services",
        description:
            "Pristine Cleaning - Your trusted cleaning company partner",
        images: [],
    },
};

export const contactPageMetaData: Metadata = {
    title: "Cleaning company - Contact",
    description: "Pristine Cleaning - Your trusted cleaning company partner",
    keywords: [],
    metadataBase: new URL("https://pristinefm.com/contact"),
    openGraph: {
        type: "website",
        url: "https://pristinefm.com/preview.png",
        title: "Cleaning company - Contact",
        description:
            "Pristine Cleaning - Your trusted cleaning company partner",
        images: [],
    },
};
