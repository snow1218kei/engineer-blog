import AuthorName from "@/components/elements/AuthorName";
import EyeCatch from "@/components/elements/eye-catch/EyeCatch";
import Image from "next/image";
import React from "react";
import styles from "./AuthorIntroduction.module.css";

const AuthorIntroduction = () => {
    return (
        <div className={styles['author-introduction-container']}>
            <div className={styles['left-container']}>
                <div className={styles['author-image-container']}>
                    <Image
                        src={'/post_1.jpg'}
                        alt={'Ashley Graham'}
                        width={105}
                        height={105}
                    />
                </div>
            </div>
            <div className={styles['right-container']}>
                <div className={styles['author-name-container']}>
                    <AuthorName authorName={'Ashley Graham'}/>
                </div>
                <div className={styles['author-description-container']}>
                    <p>
                        At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from aaaaaaaaaaaaaaaaaaa.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthorIntroduction;