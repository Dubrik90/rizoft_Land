import styled from "styled-components"
import {Button} from "../../style/global.ts";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    order: 3;
  }
`
export const MenuButton = styled(Button)`
  display: block;
  align-self: stretch;
  
  @media (min-width: 460.98px) {
    display: none;
  }
`
export const MenuLinks = styled.ul<{ isOpenBurger: boolean }>`
  display: flex;
  column-gap: 106px;
  list-style: none;
  z-index: 4;
  
  @media (max-width: 1920px) {
    column-gap: calc(30px + (106 - 30) * ((100vw - 850px) / (1920 - 850)));
  }

  a {
    font-size: 24px;
    line-height: normal;
    color: var(--color-wight);
    text-decoration: none;
    transition: color 0.3s;
    
    :hover {
      color: var(--color-forest-green);
    }

    @media (width <= 1130px) {
      font-size: 18px;
    }

    @media (width <= 850px) {
      font-size: 30px;
    }
  }

  @media (max-width: 850px) {
    left: ${({isOpenBurger}) => (isOpenBurger ? "0" : "-100%")};
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: 20px;
    overflow: auto;
    height: 100%;
    position: fixed;
    top: 0;
    padding: 150px 20px 40px 20px;
    background-color: var(--color-grey);
    width: 100%;
    transition: left 0.3s;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      height: 90px;
      background-color: var(--color-grey);
    }
  }
`
