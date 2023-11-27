"use client"

import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

export interface ArticleTitleProps {
    articleTitle: string;
    articleSlug: string;
}

const Title = styled.h3`
  font-size: 1.6rem;
  line-height: 2.6rem;
  //background-size: 0px 2px;
  //margin-bottom: 1rem;
  //overflow: hidden;
  //text-overflow: ellipsis;
`;

const TitleLink = styled.a`
  //position: relative;
  //display: inline;
  //background-image: linear-gradient(to right, currentColor 0%, currentColor 100%);
  //background-size: 0px 2px;
  //background-position: 0px 95%;
  //transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  //padding: 0.1% 0px;
  //background-repeat: no-repeat;
  //color: inherit;
  //text-decoration: none;
`

const ArticleTitle = ({articleTitle, articleSlug}: ArticleTitleProps) => {
    return (
        <Title>
            <Link href={`/post/${articleSlug}`}>
                {articleTitle}
            </Link>
        </Title>
    );
};

export default ArticleTitle;