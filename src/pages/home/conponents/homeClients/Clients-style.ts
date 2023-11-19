import styled from "styled-components";
import {Container, TitleGl} from "../../../../common/components/style/global.ts";

export const ClientsWrapper = styled.section`
  padding-top: 300px;
  padding-bottom: 165px;

  @media (max-width: 1920px) {
    padding-top: calc(50px + (300 - 50) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(50px + (165 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ClientsContainer = styled(Container)``
export const ClientsTitle = styled(TitleGl)`
  margin-bottom: 93px;

  @media (max-width: 1920px) {
    margin-bottom: calc(50px + (93 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ClientsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 43px;
  column-gap: 200px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1920px) {
    column-gap: calc(20px + (200 - 20) * ((100vw - 1400px) / (1920 - 1400)));
  }

  @media (max-width: 1400px) {
    column-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
  //@media (max-width: 767px) {
  //  grid-template-columns: repeat(1, 1fr);
  //  row-gap: 10px;
  //}
  @media (max-width: 1024px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
    
  }

`
export const Client = styled.div`
  justify-self: center;
  position: relative;
  display: flex;
  justify-content: center;
  
  scroll-snap-align: start;
  scroll-snap-stop: always;
  //@media (max-width: 767px) {
  //  max-height: 150px;
  //}

  @media (max-width: 1024px) {
    min-width: 35%;
  }
  @media (max-width: 570px) {
    min-width: 65%;
    scroll-snap-align: start;
  }
  
  &:nth-child(2)::before,
  &:nth-child(2)::after,
  &:nth-child(5)::before,
  &:nth-child(5)::after {
    position: absolute;
    content: "";
    transform: translateY(-50%);

    @media (max-width: 1400px) {
      display: none;
    }
  }

  &:nth-child(2)::before,
  &:nth-child(5)::before {
    width: 1px;
    height: 111px;
    background-color: var(--color-black);
  }

  &:nth-child(2)::before {
    top: 50%;
    left: -150px;

    @media (max-width: 1920px) {
      left: calc(-60px + (-150 - -60) * ((100vw - 1400px) / (1920 - 1400)));
    }
  }

  &:nth-child(5)::before {
    top: 50%;
    right: -150px;

    @media (max-width: 1920px) {
      right: calc(-60px + (-150 - -60) * ((100vw - 1400px) / (1920 - 1400)));
    }
  }

  &:nth-child(2)::after,
  &:nth-child(5)::after {
    width: 1px;
    height: 111px;
    background-color: var(--color-black);
  }

  &:nth-child(2)::after {
    top: 50%;
    right: -150px;
    @media (max-width: 1920px) {
      right: calc(-60px + (-150 - -60) * ((100vw - 1400px) / (1920 - 1400)));
    }
  }

  &:nth-child(5)::after {
    top: 50%;
    left: -150px;
    @media (max-width: 1920px) {
      left: calc(-60px + (-150 - -60) * ((100vw - 1400px) / (1920 - 1400)));
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    
    @media (max-width: 1024px) {
      max-width: 200px;
    }
  }
`
