import styled, { createGlobalStyle } from "styled-components"
import "./null.css"

export default createGlobalStyle`
  :root {
    --font-family-main: raleway, sans-serif;
    --font-family-monts: montserrat, sans-serif;

    --fw-400: 400;
    --fw-500: 500;
    --fw-600: 600;
    --fw-700: 700;

    // Цвета
    --color-wight: #fff;
    --color-grey: #1a1a1a;
    --color-link: #787df7;
    --color-lime-green: #6eec4e;
    --color-forest-green: #31aa12;
    --color-black: #000;

    --overlay-color: rgba(0 0 0 / 60%);
    --red-light: #f00;
    --red-dark: #ce0505;

    font-family: var(--font-family-main);
    font-weight: var(--fw-400);
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-synthesis: none;
  }
  
  main {
    flex: 1 1 auto;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const Container = styled.div.attrs({
  className: "container",
})`
  box-sizing: content-box;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

export const Button = styled.button.attrs(
    { type: "button" })`
  display: flex;
  column-gap: 11px;
  font-family: Raleway;
  align-items: center;
  font-weight: var(--fw-700);
  color: var(--color-wight);
  background-color: var(--color-lime-green);
  border-radius: 38px;
  padding: 19px;
  font-size: 19px;
  transition: background-color 0.3s;
  cursor: pointer;

  @media (max-width: 1920px) {
    font-size: calc(16px + (19 - 16) * ((100vw - 320px) / (1920 - 320)));
    padding: calc(14px + (19 - 14) * ((100vw - 320px) / (1920 - 320)));
  }

  :hover {
    background-color: var(--color-forest-green);
  }
`;

export const TitleGl = styled.h2.attrs(
    {})`
  color: var(--color-black);
  font-size: 76px;
  font-weight: var(--fw-600);

  @media (max-width: 1920px) {
    font-size: calc(26px + (76 - 26) * ((100vw - 320px) / (1920 - 320)));
  }
`

export const SubTitleGl = styled.h2.attrs(
    {})`
  color: var(--color-black);
  font-size: 50px;
  font-weight: var(--fw-600);

  span {
    font-size: 64px;
    line-height: normal;
  }

  @media (max-width: 1920px) {
    font-size: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
    span {
      font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`
export const TextGl = styled.p.attrs(
    {})`
  color: var(--color-black);
  font-size: 33px;
  line-height: normal;

  @media (max-width: 1920px) {
    font-size: calc(20px + (33 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`

