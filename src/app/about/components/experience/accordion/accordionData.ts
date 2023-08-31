interface IAccordionData {
    id: number;
    title: string;
    description: string;
}

export const accordionData: Array<IAccordionData> = [
    {
        id: 1,
        title: "Our Goals",
        description: "Our primary focus is your satisfaction. Pristine offers facility solutions with attention to every aspect, dedication to excellent customer service and a team of professionals. We give you support all the way and expect you to be happy with the final result.",
    },
    {
        id: 2,
        title: "Our Value",
        description: `We use only eco-friendly contemporary products for cleaning and choose methods and techniques specifically for your order and area.\n
        Pristine workers are equipped with the latest technology that is not harmful for health or environment at all.`,
    },
    {
        id: 3,
        title: "Our Story",
        description: "From our humble beginnings, Pristine's grown into a dedicated team of cleaning professionals committed to transforming ordinary places into amazing areas. We always encourage our employees to develop skills and receive new knowledge.",
    },
    {
        id: 4,
        title: "Our Mission",
        description: "Pristine's task is to provide professional cleaning services to individuals, businesses, or organizations, ensuring clean, sanitized, and organized spaces.",
    },
];
