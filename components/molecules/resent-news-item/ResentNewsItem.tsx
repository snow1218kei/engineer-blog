"use client"

import React from 'react';
import styles from './ResentNewsItem.module.css';
import EyeCatch, {ArticleImage} from "@/components/elements/eye-catch/EyeCatch";
import ArticleTitle, {ParentComponent} from "@/components/elements/article-title/ArticleTitle";
import CategoryTag from "@/components/elements/category-tag/CategoryTag";
import AuthorName from "@/components/elements/AuthorName";
import Excerpt from "@/components/elements/article-excerpt/Excerpt";

interface ResentNewsItemProps {
    article: ArticleForResentNews;
}

interface ArticleForResentNews {
    id: string;
    title: string;
    slug: string;
    image: ArticleImage;
    authorName: string;
    excerpt: string;
    postDate: string;
    pageView: number;
}

const ResentNewsItem = ({ article }: ResentNewsItemProps ) => {
    return (
        <div className={styles['news-item-container']}>
            <div className={styles['left-container']}>
                <EyeCatch image={article.image} shouldRender={false}/>
            </div>
            <div className={styles['right-container']}>
                <CategoryTag categoryName="travel" />
                <ArticleTitle
                    articleTitle={article.title}
                    articleSlug={article.slug}
                    parentComponent={ParentComponent.ResentNewsItem}
                />
                <Excerpt excerpt={article.excerpt}/>
                <div className={styles['author-name-container']}>
                    <AuthorName authorName={article.authorName} />
                </div>
            </div>
        </div>
    );
}

export default ResentNewsItem;
export type {ArticleForResentNews};
