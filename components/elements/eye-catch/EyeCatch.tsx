"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from './EyeCatch.module.css';

interface EyeCatchProps {
    image: ArticleImage;
    isHovered?: boolean;
    shouldRender?: boolean;
}

interface ArticleImage {
    title: string;
    url: string;
    slug: string;
    width: number;
    height: number;
}

const EyeCatch = ({ image, isHovered = false, shouldRender = true }: EyeCatchProps) => {
    return (
        <div className={`${styles['image-container']} ${isHovered ? styles['hovered'] : ''}`}>
            <Link href={`/post/${image.slug}`}>
                <Image
                    src={image.url}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                />
                {shouldRender && (
                    <div className={styles['image-overlay']}/>
                )}
            </Link>
        </div>
    )
}

export default EyeCatch
export type {ArticleImage};