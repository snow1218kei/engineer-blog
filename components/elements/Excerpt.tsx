import React from 'react';
import styled from 'styled-components';

export interface ExcerptProps {
    excerpt: string;
}

const ExcerptContainer = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
`

const Excerpt = ({excerpt}: ExcerptProps) => {
    return (
        <ExcerptContainer>{excerpt}</ExcerptContainer>
    );
}

export default Excerpt;