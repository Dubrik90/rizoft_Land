import {Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import {
    CaseContainer,
    CaseContent,
    CasesContainer,
    CasesTitle,
    CasesTitleContainer,
    CaseTable,
    CaseText,
    CaseTitle,
    Column,
    HomeCasesWrap,
    ImgBlock,
    SwiperFractions
} from "./Cases-style.ts";
import Phone from '../../assets/cases/01.png'
import {useRef, useState} from "react";
import './casesStyle.scss'
import {Container} from "../../../../common/components/style/global.ts";
import ArrowRight from '../../assets/cases/arrowRight.svg?react'

const slidesData = [
    {
        id: 1,
        title: 'Кейс 1',
        image: Phone,
        description: 'Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non. Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.',
        rating: 'Рейтинг',
        ratingResult: '5',
        age: 'Возраст',
        ageResult: '17 +',
        category: 'Категория',
        categoryResult: 'Автомобили',
    },
    {
        id: 2,
        title: 'Кейс 2',
        image: Phone,
        description: 'Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non. Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.',
        rating: 'Рейтинг',
        ratingResult: '2',
        age: 'Возраст',
        ageResult: '11+',
        category: 'Категория',
        categoryResult: 'взрослые',
    },
    {
        id: 3,
        title: 'Кейс 3',
        image: Phone,
        description: 'Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non. Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.',
        rating: 'Рейтинг',
        ratingResult: '4',
        age: 'Возраст',
        ageResult: '18+',
        category: 'Категория',
        categoryResult: 'взрослый',
    },
    {
        id: 4,
        title: 'Кейс 4',
        image: Phone,
        description: 'Lorem ipsum dolor.',
        rating: 'Рейтинг',
        ratingResult: '4',
        age: 'Возраст',
        ageResult: '18+',
        category: 'Категория',
        categoryResult: 'взрослый',
    },
];

export const HomeCases = () => {
    const swiperRef = useRef(null);
    const [_, setBulletIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleBulletClick = (index: number) => {
        setBulletIndex(index);
    };

    return (
        <HomeCasesWrap>
            <CasesTitleContainer>
                <CasesTitle>Кейсы</CasesTitle>
            </CasesTitleContainer>
            <CasesContainer>
                <SwiperFractions>
                    <div className="pagination">
                        {slidesData.map((_, index) => (
                            <span
                                key={index}
                                className={`pagination-bullet ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleBulletClick(index)}
                            >
                                0{index + 1}
                            </span>
                        ))}
                    </div>

                </SwiperFractions>
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Navigation, Scrollbar]}
                    pagination={{
                        el: '.pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            const formattedIndex = index < 9 ? `0${index + 1}` : index + 1;
                            return '<span class="' + className + '">' + formattedIndex + '</span>';
                        },
                    }}
                    autoHeight={false}
                    scrollbar={true}
                    navigation={{
                        nextEl: '.next',
                        prevEl: '.prev',
                    }}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="mySwiper"
                >
                    {slidesData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <CaseContainer>
                                <ImgBlock>
                                    <img src={slide.image} alt="Phone"/>
                                </ImgBlock>
                                <CaseContent>
                                    <CaseTitle>{slide.title}</CaseTitle>
                                    <CaseText>{slide.description}</CaseText>
                                    <CaseTable>
                                        <Column>
                                            <p>{slide.rating}</p>
                                            <p>{slide.ratingResult}</p>
                                        </Column>
                                        <Column>
                                            <p>{slide.age}</p>
                                            <p>{slide.ageResult}</p>
                                        </Column>
                                        <Column>
                                            <p>{slide.category}</p>
                                            <p>{slide.categoryResult}</p>
                                        </Column>
                                    </CaseTable>
                                </CaseContent>
                            </CaseContainer>
                        </SwiperSlide>
                    ))}
                    <div className="next"><ArrowRight/></div>
                </Swiper>
            </CasesContainer>
            <Container>
                {/*<ScrollBar>*/}

                {/*</ScrollBar>*/}

                {/*<div className="bulet">*/}
                {/*    {slidesData.map((_, index) => (*/}
                {/*        <span*/}
                {/*            key={index}*/}
                {/*            className={`pagination-bullet ${activeIndex === index ? 'active' : ''}`}*/}
                {/*            //  onClick={() => handleBulletClick(index)}*/}
                {/*        >*/}
                {/*            </span>*/}
                {/*    ))}*/}
                {/*</div>*/}

            </Container>
        </HomeCasesWrap>
    );
};
