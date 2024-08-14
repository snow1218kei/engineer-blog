import React from 'react';
import styles from "./Excerpt.module.css"

export interface ExcerptProps {
    excerpt: string;
}

const Excerpt = ({excerpt}: ExcerptProps) => {
    return (
        <div className={styles['excerpt-container']}>
            {excerpt}
        </div>
    );
}

export default Excerpt;