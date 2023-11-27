"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ImageData {
    slug: string;
    featureImg: string;
    title: string;
}

export interface EyeCatchProps {
    imageData: ImageData;
}

const EyeCatch = ({imageData}: EyeCatchProps) => {
    return (
        <Link href={`/post/${imageData.slug}`}>
            <Image
                src={imageData.featureImg}
                alt={imageData.title}
                width={285}
                height={285}
                // placeholder="blur"
                // blurDataURL="/images/placeholder.png"
            />
        </Link>
    )
}

export default EyeCatch
