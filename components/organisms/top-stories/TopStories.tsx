"use client"

import TopStory, {ArticleForTopStory} from "@/components/molecules/top-story/TopStory";
import styles from './TopStories.module.css';
import {ParentComponent} from "@/components/elements/article-title/ArticleTitle";

interface TopStoriesProps {
    articles: ArticleForTopStory[];
}

const TopStories = ({ articles }: TopStoriesProps) => {
    return (
        <div className={styles['top-stories-container']}>
            <div className={styles['left-story-container']}>
                <div className={styles['left-story']}>
                    <TopStory
                        article={articles[0]}
                        shouldRender={true}
                        parentComponent={ParentComponent.LeftTopStory}
                    />
                </div>
            </div>
            <div className={styles['right-story-container']}>
                {articles.slice(1, 3).map((article) => (
                    <div key={article.id} className={styles['right-story']}>
                        <TopStory
                            article={article}
                            shouldRender={false}
                            parentComponent={ParentComponent.RightTopStory}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopStories;
