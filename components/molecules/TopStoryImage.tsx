// "use client"
//
// import React from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import styled from 'styled-components';
// import CategoryTag from '../elements/CategoryTag';
//
// interface ImageData {
//     slug: string;
//     featureImg: string;
//     title: string;
// }
//
// interface CategoryData {
//     categoryName: string;
//     categoryBackground: string;
// }
//
// export interface TopStoryImageProps {
//     imageData: ImageData;
//     categoryData: CategoryData;
// }
//
// const FigureContainer = styled.figure`
//   position: relative; /* このコンテナ内の子要素に対する位置付けのコンテキストを提供 */
//   width: 100%;
// `;
//
// const CategoryContainer = styled.div`
//   position: absolute; /* 親の相対的な位置に基づいて位置を設定 */
//   left: 0; /* コンテナの左側に配置 */
//   bottom: 6rem; /* コンテナの下部に配置 */
//   margin-bottom: 1rem !important;
//   //display: flex;
//   //flex-wrap: wrap;
//   //align-items: center;
// `;
//
// const TopStoryImage = ({ imageData, categoryData }: TopStoryImageProps) => {
//     return (
//         <FigureContainer>
//             <Link href={`/post/${imageData.slug}`}>
//                 <Image
//                     src={imageData.featureImg}
//                     alt={imageData.title}
//                     width={540}
//                     height={540}
//                     // placeholder="blur"
//                     // blurDataURL="/images/placeholder.png"
//                 />
//             </Link>
//             <CategoryContainer>
//                 <CategoryTag
//                     categoryName={categoryData.categoryName}
//                     categoryBackground={categoryData.categoryBackground}
//                 />
//             </CategoryContainer>
//         </FigureContainer>
//     );
// };
//
// export default TopStoryImage