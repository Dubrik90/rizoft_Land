import styled from "styled-components";
import {Button, Container} from "../style/global.ts";

export const FooterWrapper = styled.footer`
  padding-top: 95px;
  padding-bottom: 105px;
  background-color: var(--color-lime-green);

  @media (max-width: 1920px) {
    padding-top: calc(50px + (95 - 50) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(50px + (105 - 50) * ((100vw - 320px) / (1920 - 320)));
  }

`
export const FooterContainer = styled(Container)`

`
export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column;
    row-gap: 30px;
  }
`

export const FooterTitle = styled.h4`
  color: #000;
  font-family: Raleway;
  font-size: 76px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 780px;

  @media (max-width: 1920px) {
    font-size: calc(24px + (76 - 24) * ((100vw - 320px) / (1920 - 320)));
  }
  @media (max-width: 1265px) {
    max-width: 590px;
  }
  @media (max-width: 980px) {
    max-width: 100%;
    text-align: center;
  }
`

export const FooterButton = styled(Button)`
  color: var(--color-grey);
  font-size: 35px;
  font-style: normal;
  font-weight: var(--fw-700);
  line-height: normal;
  border-radius: 71px;
  border: 4px solid #181A22;
  column-gap: 35px;
  background: transparent;
  transition: all 0.3s;

  @media (max-width: 1920px) {
    font-size: calc(24px + (35 - 24) * ((100vw - 320px) / (1920 - 320)));
  }

  @media (max-width: 1060px) {
    column-gap: 15px;
  }

  @media (max-width: 980px) {
    align-self: stretch;
    justify-content: center;
  }

  :hover {
    background-color: #FFFFFF;
    border-color: #FFFFFF;
  }

  svg {
    width: 26px;
    height: 26px;

    path {
      stroke: var(--color-grey);
    }
  }
`
