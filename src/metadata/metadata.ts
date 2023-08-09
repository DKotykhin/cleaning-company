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
    title: "Cleaning company",
    description: "",
    keywords: [],
    metadataBase: new URL("https://google.com"),
    openGraph: {
        type: "website",
        url: "",
        title: "Cleaning company",
        description: "",
        images: [],
    },
};
