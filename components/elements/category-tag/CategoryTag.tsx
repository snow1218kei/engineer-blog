"use client"

import React from 'react';
import Link from "next/link";
import styles from './CategoryTag.module.css';

export interface CategoryTagProps {
    categoryName: string;
}

const CategoryTag = ({ categoryName }: CategoryTagProps) => {
    const encodedCategoryName = encodeURIComponent(categoryName);

    const determineBgColorBy = (categoryName: string): string => {
        switch (categoryName.toLowerCase()) {
            case 'technology':
                return 'bg-blue-500';
            case 'health':
                return 'bg-red-500';
            case 'finance':
                return 'bg-green-500';
            case 'travel':
                return styles['travel-color'];
            default:
                return 'bg-gray-500'; // デフォルトの背景色
        }
    };

    return (
        <p>
            <Link
                className={`
                    ${determineBgColorBy(categoryName)} 
                    ${styles.tag}
                `}
                href={`/category/${encodedCategoryName}`} passHref
            >
                {categoryName}
            </Link>
        </p>
    );
};

export default CategoryTag;