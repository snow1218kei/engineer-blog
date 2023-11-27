"use client"

import React from 'react';
import styled from 'styled-components';
import ArticleTitle from '../elements/ArticleTitle';
import AuthorName from '../elements/AuthorName';
import CategoryTag from '../elements/CategoryTag';
import Excerpt from '../elements/Excerpt';
import EyeCatch from '../elements/EyeCatch';

interface ImageData {
    slug: string;
    featureImg: string;
    title: string;
}

export interface RecentNewsProps {
    imageData: ImageData;
    categoryName: string;
    categoryBackground: string;
    articleTitle: string;
    articleSlug: string;
    excerpt:string;
    authorName:string;
}

const NewsContainer = styled.div.attrs({
    className: 'flex space-x-8 ml-8',
})``;

const ContentContainer = styled.div.attrs({
    className: 'flex-1 flex flex-col space-y-4 pb-4',
})``;

// const NewsContainer = styled.div`
//   display: flex;
//   flex-direction: row; /* 子要素を横に並べる */
//   align-items: flex-start; /* 子要素を上端で揃える */
//   gap: 2rem; /* 画像と内容の間にスペースを追加 */
// `
//
// const ContentContainer = styled.div`
//   padding: 2rem;
//   flex-direction: column; /* 子要素を縦に並べる */
//   justify-content: space-between;
//   max-width: 640px; /* 最大幅を指定 */
//   background: #fff; /* 背景色 */
//   //z-index: 10; /* 画像よりも前面に */
// `

const RecentNews = ({
    imageData,
    categoryName,
    categoryBackground,
    articleTitle,
    articleSlug,
    excerpt,
    authorName
}: RecentNewsProps) => {
    return (
        <NewsContainer>
            <EyeCatch imageData={imageData} />
            <ContentContainer>
                <CategoryTag categoryName={categoryName} categoryBackground={categoryBackground} />
                <ArticleTitle articleTitle={articleTitle} articleSlug={articleSlug} />
                <Excerpt excerpt={excerpt} />
                <AuthorName authorName={authorName} />
            </ContentContainer>
        </NewsContainer>
    );
}

export default RecentNews;