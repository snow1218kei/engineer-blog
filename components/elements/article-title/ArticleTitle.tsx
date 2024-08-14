"use client"

import React from 'react';
import Link from "next/link";
import styles from "./ArticleTitle.module.css"

export interface ArticleTitleProps {
    articleTitle: string;
    articleSlug: string;
    parentComponent: ParentComponent;
}

export enum ParentComponent {
    LeftTopStory = 'left-top-story',
    RightTopStory = 'right-top-story',
    ResentNewsItem = 'resent-news-item'
}

const ArticleTitle = ({articleTitle, articleSlug, parentComponent}: ArticleTitleProps) => {
    return (
        <h3 className="line-clamp-2">
            <Link
                href={`/post/${articleSlug}`}
                className={`
                    ${styles['hover-line']}
                    ${styles[parentComponent]}
                `}
            >
                {articleTitle}
            </Link>
        </h3>
    );
};

export default ArticleTitle;