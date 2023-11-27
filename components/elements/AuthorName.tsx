"use client"

import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

export interface AuthorNameProps {
    authorName: string;
}

const AuthorNameContainer = styled.ul`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: #7b7b7b;
  font-weight: 300;
  margin: 0;
`

const AuthorNameLink = styled.a`
  margin-left: 4px;
  display: inline-block;
`

const AuthorName = ({authorName}: AuthorNameProps) => {
    const encodedAuthorName = encodeURIComponent(authorName);

    return (
        <AuthorNameContainer>
            <li>
                <span>By</span>
                <Link href={`/author/${encodedAuthorName}`}>
                    <AuthorNameLink>{authorName}</AuthorNameLink>
                </Link>
            </li>
        </AuthorNameContainer>
    );
};

export default AuthorName;