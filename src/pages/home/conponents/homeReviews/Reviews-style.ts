import styled from "styled-components";
import {Container, TitleGl} from "../../../../common/components/style/global.ts";

export const HomeReviewsWrapper = styled.section`
  padding-top: 59px;
  padding-bottom: 270px;

  @media (max-width: 1920px) {
    padding-top: calc(50px + (59 - 50) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(50px + (270 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ReviewsContainer = styled(Container)`
  position: relative;
`

export const ReviewsTitle = styled(TitleGl)`
  margin-bottom: 193px;

  @media (max-width: 1920px) {
    margin-bottom: calc(50px + (193 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const CubeBlock1 = styled.div`
  position: absolute;
  right: 100px;
  top: 60px;
  z-index: 50;

  @media (max-width: 1440px) {
    svg {
      max-width: 200px;
      max-height: 180px;
    }
  }
  @media (max-width: 1024px) {
    // top: 20px;
    svg {
      max-width: 150px;
      max-height: 120px;
    }
  }
  @media (max-width: 768px) {
    top: 20px;
  }
  @media (max-width: 530px) {
    top: 0;
    right: 0;
  }
`
export const CubeBlock2 = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 50;

  @media (max-width: 1440px) {
    svg {
      max-width: 200px;
      max-height: 180px;
    }
  }
  @media (max-width: 1024px) {
    svg {
      max-width: 150px;
      max-height: 120px;
    }
  }
  @media (max-width: 530px) {
    display: none;
  }
`

export const SwiperBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 75px;

  @media (max-width: 1440px) {
    column-gap: 30px;
  }
  @media (max-width: 530px) {
    column-gap: 15px;
  }

  .swiper__reviews {
    max-width: 100%;
    height: 100%;
    background: #FFFFFF;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #000;
    padding: 51px 41px 120px 41px;
    //  max-width: 390px;

    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
      padding: 21px 21px 40px 21px;
    }
  }

  .swiper-slide div img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .next {
    svg {
      max-width: 36px;
      max-height: 39px;

      path {
        stroke: var(--color-lime-green);
      }
    }
  }
`
export const ImgBlock = styled.div``
export const Quotes = styled.p`
  color: #000;
  font-family: MuseoModerno;
  font-size: 65px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  align-self: start;

  @media (max-width: 768px) {
    font-size: 45px;
  }
`

export const ReviewText = styled.p`
  color: #000;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  text-align: start;
  // max-width: 300px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
