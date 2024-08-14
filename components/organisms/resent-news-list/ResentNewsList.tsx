"use client"

import styles from "@/components/organisms/top-stories/TopStories.module.css";

import {ParentComponent} from "@/components/elements/article-title/ArticleTitle";
import ResentNewsItem, {ArticleForResentNews} from "@/components/molecules/resent-news-item/ResentNewsItem";

interface ResentNewsListProps {
    articles: ArticleForResentNews[];
}

const ResentNewsList = ({ articles }: ResentNewsListProps) => {
    return (
        <div className={styles['resent-news-container']}>
            {articles.slice(0, 6).map((article) => (
                <div key={article.id} >
                    <ResentNewsItem article={article}/>
                </div>
            ))}
        </div>
    );
}