import styles from './CategoryWidget.module.css'
import Image from "next/image";
import Link from "next/link";
import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryWidget = () => {
    interface Category {
        name: string;
        slug: string;
        image: string;
    }

    const categories: Category[] = [
        { name: 'Technology', slug: '#', image: '/post_1.jpg' },
        { name: 'Health', slug: '#', image: '/post_1.jpg' },
        { name: 'Finance', slug: '#', image: '/post_1.jpg' },
        { name: 'Finance', slug: '#', image: '/post_1.jpg' },
        { name: 'Finance', slug: '#', image: '/post_1.jpg' },
        { name: 'Finance', slug: '#', image: '/post_1.jpg' },
        { name: 'Finance', slug: '#', image: '/post_1.jpg' },
        { name: 'Finance', slug: '#', image: '/post_1.jpg' },
    ];

    const slideSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
    };

    const CustomNavRef = useRef<Slider>(null);

    return (
        <div className={styles['category-widget-container']}>
            <div className={styles['widget-title-container']}>
                <h3>Categories</h3>
                <div className={styles['slide-navigation']}>
                    <button className={styles['prev']} onClick={() => CustomNavRef?.current?.slickPrev()}>
                        <i className="feather icon-chevron-left" />
                    </button>
                    <button className={styles['next']} onClick={() => CustomNavRef?.current?.slickNext()}>
                        <i className="feather icon-chevron-right" />
                    </button>
                </div>
            </div>
            <div className={styles['category-carousel']}>
                <Slider ref={CustomNavRef} {...slideSettings}>
                    <div className={styles['carousel-inner']}>
                        <ul className={styles['category-list']}>
                            {categories.slice(0, 4).map((data) => (
                                <li key={data.slug}>
                                    <Link href={`/category/${data.slug}`}>
                                        <Image
                                            src={data.image}
                                            alt={data.name}
                                            width={155}
                                            height={190}
                                        />
                                        <div className={styles['overlay']}>
                                            <h4>{data.name}</h4>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['carousel-inner']}>
                        <ul className={styles['category-list']}>
                            {categories.slice(4, 8).map((data) => (
                                <li key={data.slug}>
                                    <Link href={`/category/${data.slug}`}>
                                        <Image
                                            src={data.image}
                                            alt={data.name}
                                            width={155}
                                            height={190}
                                        />
                                        <div className={styles['overlay']}>
                                            <h4>{data.name}</h4>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Slider>
            </div>
        </div>
);
}

export default CategoryWidget