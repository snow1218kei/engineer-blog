"use client"

import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

export interface CategoryTagProps {
    categoryName: string;
    categoryBackground?: string;
}

const Category = styled.a<{ bgColor?: string }>`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4rem;
  font-weight: 700;
  margin: 0 1rem 1rem 0;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  //position: relative;
  border-width: 0.2rem; /* 必要に応じて変更 */
  border-style: solid; /* これを保持 */
  border-color: transparent; /* 新しい行、色を透明に設定するか、または何も表示したくない場合は削除 */
  border-radius: 0;
  padding: 0.6rem 1.1rem 0.4rem;
  //z-index: 1;
  background-color: ${props => props.bgColor || 'blue'};
  display: inline-block;
  //padding: 0.5em 1em;
  color: white; // テキストの色を白に設定
`;

const CategoryTag = ({ categoryName, categoryBackground }: CategoryTagProps) => {
    const encodedCategoryName = encodeURIComponent(categoryName);

    return (
            <Link href={`/category/${encodedCategoryName}`} passHref>
                <Category bgColor={categoryBackground}>{categoryName}</Category>
            </Link>
    );
};

export default CategoryTag;