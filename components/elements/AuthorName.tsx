"use client"

import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

export interface AuthorNameProps {
    authorName: string;
}

const AuthorName = ({authorName}: AuthorNameProps) => {
    const encodedAuthorName = encodeURIComponent(authorName);

    return (
        <React.Fragment>
            <span>By</span>
            <Link
                href={`/author/${encodedAuthorName}`}
                className="
                    ml-1
                    text-inherit
                    hover:text-red-600
                    transition-all duration-500
                "
            >
                {authorName}
            </Link>
        </React.Fragment>
    );
};

export default AuthorName;