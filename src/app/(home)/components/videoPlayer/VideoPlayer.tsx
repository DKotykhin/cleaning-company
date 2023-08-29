"use client";

import React from 'react';
import ReactPlayer from 'react-player';

import Image from "next/image";

import { useWindow } from 'hooks/useWindow';

import styles from './videoPlayer.module.scss';

const VideoPlayer = () => {

    const hasWindow = useWindow();

    const customPlayButton = (
        <div className={styles.button}>
            <Image
                src={'/play.svg'}
                alt={'play'}
                width={120}
                height={120}
            />
        </div>
    );

    return hasWindow ? (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>The path to success begins with cleanliness</p>
                <p className={styles.subtitle}>Pristine can help you with any kind of pollution!</p>
                <ReactPlayer
                    url={'https://google.com'}
                    controls
                    playIcon={customPlayButton}
                    light
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    ) : null;
};

export default VideoPlayer;