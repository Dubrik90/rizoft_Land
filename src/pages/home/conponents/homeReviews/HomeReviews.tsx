import {
    CubeBlock1, CubeBlock2,
    HomeReviewsWrapper,
    ImgBlock,
    Quotes,
    ReviewsContainer,
    ReviewsTitle,
    ReviewText,
    SwiperBlock
} from "./Reviews-style.ts";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Optic from  '../../assets/reviews/opticsN.png'
import SD from  '../../assets/reviews/SDN.png'
import ArrowRight from '../../assets/cases/arrowRight.svg?react'
import Cube from '../../assets/cube.svg?react'

const reviews = [
    {
        id: 1,
        img: Optic,
        imgDesc: 'Optic',
        text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  '
    },
    {
        id: 2,
        img: SD,
        imgDesc: 'SD',
        text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  '
    },
    {
        id: 3,
        img: Optic,
        imgDesc: 'Optic',
        text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  '
    },
    {
        id: 4,
        img: SD,
        imgDesc: 'SD',
        text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  '
    },
    {
        id: 5,
        img: Optic,
        imgDesc: 'Optic',
        text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  '
    },
    {
        id: 6,
        img: SD,
        imgDesc: 'SD',
        text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  '
    },
]


export const HomeReviews = () => {
    return (
        <HomeReviewsWrapper>
            <ReviewsContainer>
                <ReviewsTitle>Отзывы</ReviewsTitle>
                <CubeBlock1><Cube/></CubeBlock1>
                <SwiperBlock>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={120}
                        navigation={{
                            nextEl: '.next',
                            prevEl: '.prev',
                        }}
                        loop={true}
                        modules={[Navigation]}
                        breakpoints={{
                            320: {
                                spaceBetween: 30,
                                slidesPerView: 1,
                            },
                            390: {
                                spaceBetween: 30,
                                slidesPerView: 1,
                            },
                            680: {
                                spaceBetween: 30,
                                slidesPerView: 2,
                            },
                            1025: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1441: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1600: {
                                spaceBetween: 120,
                                slidesPerView: 3,
                            },

                        }}
                        className="swiper__reviews"
                    >
                        {reviews.map((el) => (
                            <SwiperSlide key={el.id}>
                                <ImgBlock>
                                    <img src={el.img} alt={el.imgDesc}/>
                                </ImgBlock>
                                <Quotes>“</Quotes>
                                <ReviewText>{el.text}</ReviewText>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="next"><ArrowRight/></div>
                </SwiperBlock>
                <CubeBlock2><Cube/></CubeBlock2>
            </ReviewsContainer>
        </HomeReviewsWrapper>
    );
};

