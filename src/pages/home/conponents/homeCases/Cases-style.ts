import styled from "styled-components";
import {Container, TitleGl} from "../../../../common/components/style/global.ts";

export const HomeCasesWrap = styled.section`
  .bulet {
    margin-top: -50px;
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;

    .pagination-bullet {
      width: 35px;
      height: 35px;
      background-color: var(--color-wight);
      border-radius: 100%;
      border: 1px solid;

      &.active {
        background-color: var(--color-black);
      }
    }

  }
`
export const CasesTitleContainer = styled(Container)`
    
    
`
export const CasesTitle = styled(TitleGl)`
  position: relative;
  left: 250px;
  z-index: 5;
  margin-bottom: -150px;
  color: var(--color-wight);
  max-width: 400px;
  
  @media (max-width: 1440px) {
    left: 0;
    margin-bottom: 0;
    color: var(--color-black);
    margin-bottom: 30px;
  }
  
`
export const CasesContainer = styled(Container)`
  display: flex;
  overflow: hidden;

  @media (max-width: 1440px) {
    flex-direction: column-reverse;
    row-gap: 20px;
  }
`
export const SwiperFractions = styled.div`
  display: flex;
  min-width: 171px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-wight);

  @media (max-width: 1600px) {
    min-width: 110px;
  }

  @media (max-width: 1024px) {

  }

  .pagination {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;

    @media (max-width: 1440px) {
      flex-direction: row;
      justify-content: center;
    }

    .swiper-pagination-bullet {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      font-size: 32px;
      width: 70px;
      height: 70px;
      transition: all 0.3s;
      background-color: transparent;

      @media (max-width: 1024px) {
        font-size: 24px;
        width: 50px;
        height: 50px;
      }

      &.swiper-pagination-bullet-active {
        border: 1px solid var(--color-black);
        border-radius: 100%;
      }
    }
  }

`
export const CaseContainer = styled.div`
  display: grid;
  grid-template-columns: 313px 1fr;
  column-gap: 120px;
  align-items: center;
  width: 100%;
  

  @media (max-width: 1440px) {
    column-gap: 0;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 150px 1fr;
    column-gap: 30px;
  }
  @media (max-width: 767px) {
    column-gap: calc(20px + (30 - 20) * ((100vw - 375px) / (767 - 375)));
    grid-template-columns: calc(80px + (150 - 80) * ((100vw - 375px) / (767 - 375))) 1fr;
  }
`

export const ImgBlock = styled.div`
  background-color: var(--color-black);
  border: 10px solid var(--color-black);
  border-radius: 40px;
  overflow: hidden;
  max-width: 313px;

  @media (max-width: 1440px) {
    max-width: 200px;
    justify-self: center;
  }
  @media (max-width: 1023px) {
    max-width: 150px;
  }
  @media (max-width: 767px) {
    border: calc(5px + (10 - 5) * ((100vw - 375px) / (767 - 375))) solid var(--color-black);
    border-radius: calc(15px + (40 - 15) * ((100vw - 375px) / (767 - 375)));
    max-width: calc(80px + (150 - 80) * ((100vw - 375px) / (767 - 375)));
  }

  img {
    width: 100%;
    height: 100%;
  }
`
export const CaseContent = styled.div`
`
export const CaseTitle = styled.div`
  color: var(--color-grey);
  font-size: 63px;
  font-weight: var(--fw-700);
  line-height: normal;
  margin-bottom: 76px;

  @media (max-width: 1600px) {
    font-size: 53px;
  }
  @media (max-width: 1023px) {
    font-size: 33px;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    font-size: calc(18px + (33 - 18) * ((100vw - 320px) / (767 - 375)));
    margin-bottom: calc(15px + (40 - 15) * ((100vw - 375px) / (767 - 375)));
  }
`
export const CaseText = styled.div`
  color: var(--color-black);
  font-size: 34px;
  line-height: normal;
  max-width: 520px;
  margin-bottom: 55px;

  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1023px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    font-size: calc(16px + (20 - 16) * ((100vw - 375px) / (767 - 375)));
  }
`
export const CaseTable = styled.div`
  border: 1px solid var(--color-black);
  padding: 22px 52px 26px 52px;
  max-width: 740px;
  display: flex;
  column-gap: 86px;

  @media (max-width: 1600px) {
    column-gap: 44px;
    padding: 11px 25px 13px 25px;
    max-width: 510px;
  }
  @media (max-width: 1023px) {
    column-gap: 20px;
    padding: 10px;
    max-width: 300px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    // max-width: calc(180px + (300 - 180) * ((100vw - 375px) / (767 - 375)));
  }
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  position: relative;

  @media (max-width: 1023px) {
    row-gap: 5px;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    column-gap: calc(10px + (40 - 10) * ((100vw - 375px) / (500 - 375)));

  }

  :not(:last-child) {
    :after {
      content: '';
      right: -43px;
      width: 1px;
      top: 50%;
      transform: translateY(-50%);
      height: 65px;
      position: absolute;
      background-color: var(--color-black);

      @media (max-width: 1600px) {
        right: -21px;
      }
      @media (max-width: 1023px) {
        right: -10px;
        height: 35px;
      }
      @media (max-width: 500px) {
        display: none;
      }
    }

  }

  p:last-child {
    font-size: 37px;
    font-weight: var(--fw-700);
    line-height: normal;

    @media (max-width: 1600px) {
      font-size: 28px;
    }
    @media (max-width: 1023px) {
      font-size: 16px;
    }
  }

  p:first-child {
    @media (max-width: 500px) {
      min-width: 70px;
    }
  }


  p {
    color: var(--color-black);
    font-size: 32px;
    line-height: normal;

    @media (max-width: 1600px) {
      font-size: 24px;
    }
    @media (max-width: 1023px) {
      font-size: 14px;
    }
  }

`
