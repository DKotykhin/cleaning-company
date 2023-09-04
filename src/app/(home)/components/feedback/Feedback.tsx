"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import './swiper.scss';

import ClientCard from './clientCard/ClientCard';

import styles from './feedback.module.scss';

const clientCardData = [
    {
        id: 1,
        text: 'I was surprised by the quality of this company. They were able to clean my entire house in a matter of hours. The used techniques and tools are so effective that they can manage even the most complex pollution.',
        url: '/avatars/avatar-1.webp',
        name: 'Natasha Romanoff',
        position: 'UI/UX Designer',
    },
    {
        id: 2,
        text: "I’m completely satisfied with Pristine company! They work professionally and efficiently, always do everything neatly and on time. Employees are friendly, responsible and very attentive to details. Furniture, floors and surfaces are always totally clean.",
        url: '/avatars/avatar-1.webp',
        name: 'Natasha Romanoff',
        position: 'UI/UX Designer',
    },
    {
        id: 3,
        text: "I highly recommend this company for professional cleaning. I’ve used the services of this company for several months, and each time I’m impressed with the result.",
        url: '/avatars/avatar-1.webp',
        name: 'Natasha Romanoff',
        position: 'UI/UX Designer',
    },
    {
        id: 4,
        text: "I highly recommend this company for professional cleaning. I’ve used the services of this company for several months, and each time I’m impressed with the result.",
        url: '/avatars/avatar-1.webp',
        name: 'Natasha Romanoff',
        position: 'UI/UX Designer',
    },
    {
        id: 5,
        text: "I highly recommend this company for professional cleaning. I’ve used the services of this company for several months, and each time I’m impressed with the result.",
        url: '/avatars/avatar-1.webp',
        name: 'Natasha Romanoff',
        position: 'UI/UX Designer',
    },
];

const Feedback = () => {

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.line}></div>
                <h2 className='block-title'>Our Clients&apos; Feedback</h2>
                <div className={styles.line}></div>
            </div>
            <Swiper
                modules={[Pagination, A11y, EffectCoverflow]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                initialSlide={2}
                effect={'coverflow'}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    998: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    }
                }}
            >
                {clientCardData.map(item => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <ClientCard
                                text={item.text}
                                url={item.url}
                                name={item.name}
                                position={item.position}
                                isActive={isActive}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Feedback;