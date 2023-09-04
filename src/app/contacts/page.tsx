import React from 'react';

import TopBlock from './components/topBlock/TopBlock';

import { contactPageMetaData } from 'metadata/metadata';

export const metadata = contactPageMetaData;

const ContactsPage = () => {
    return (
        <>
            <TopBlock />
        </>
    );
};

export default ContactsPage;