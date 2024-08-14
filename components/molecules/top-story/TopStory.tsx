"use client"

import CategoryTag from "@/components/elements/category-tag/CategoryTag";
import ArticleTitle, {ParentComponent} from "@/components/elements/article-title/ArticleTitle";
import EyeCatch, { ArticleImage } from "@/components/elements/eye-catch/EyeCatch";
import styles from './TopStory.module.css';
import { Activity, Share2 } from 'react-feather';
import AuthorName from "@/components/elements/AuthorName";
import React, {useState} from 'react';

interface TopStoryProps {
    article: ArticleForTopStory;
    shouldRender: boolean;
    parentComponent: ParentComponent;
}

interface ArticleForTopStory {
    id: string;
    title: string;
    slug: string;
    image: ArticleImage;
    authorName: string;
    postDate: string;
    pageView: number;
}

const TopStory = ({ article, shouldRender, parentComponent }: TopStoryProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles['top-story-container']}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <EyeCatch image={article.image} isHovered={isHovered} />
            <div className={styles['article-detail-container']}>
                <div>
                    <CategoryTag categoryName="travel"/>
                    <ArticleTitle
                        articleTitle={article.title}
                        articleSlug={article.slug}
                        parentComponent={parentComponent}
                    />
                    <ul className={styles['article-detail-list']}>
                        <li>
                            <AuthorName authorName={article.authorName}/>
                        </li>
                        {shouldRender && (
                            <React.Fragment>
                                <li>
                                    <i className={styles['dot']}>.</i> {article.postDate}
                                </li>
                                <li>
                                    <Activity size={13}/> 1K Views
                                </li>
                                <li>
                                    <Share2 size={13}/> 210 Shares
                                </li>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopStory;
export type {ArticleForTopStory};