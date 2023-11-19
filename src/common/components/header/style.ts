import styled from "styled-components";
import {Button, Container} from "../style/global.ts";

export const HeaderWrapper = styled.header`
  min-height: 145px;
  background-color: var(--color-grey);
  margin-bottom: 57px;
  //position: fixed;
  //width: 100%;
  //top: 0;
  //left: 0;
  //z-index: 100;
  
  @media (max-width: 1920px) {
     min-height: calc(80px + (145 - 80) * ((100vw - 320px) / (1920 - 320)));
  }
  
  
`
export const HeaderContainer = styled(Container)`
  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  @media (max-width: 850px) {
    // height: calc(50px + (90 - 50) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    // height: 50px;
  }

`
export const Logo = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 45px;
  font-weight: var(--fw-700);
  line-height: 1.2; /* 57.778% */
  color: var(--color-wight);
  text-transform: uppercase;
  z-index: 100;

  @media (width <= 1130px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    order: 1;
  }
`
export const HeaderButton = styled(Button)`
  z-index: 5;
  @media (max-width: 850px) {
    order: 2;
  }
  @media (max-width: 460px) {
    display: none;
  }
  
`
