import styled from "styled-components"

type PropsBurger = {
  isOpenBurger: boolean
}

export const Burger = styled.button<PropsBurger>`
  display: none;

  @media (max-width: 850px) {
    display: block;
    position: relative;
    width: 35px;
    flex: 0 0 35px;
    height: 16px;
    cursor: pointer;
    z-index: 5;
    background-color: transparent;

    span,
    &::before,
    &::after {
      content: "";
      transition: all 0.3s ease 0s;
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background: var(--color-wight);
    }
    span {
      width: 28px;
    }

    &::before {
      top: ${({ isOpenBurger }) => (isOpenBurger ? "calc(50% - 1px)" : "0px")};
      transform: ${({ isOpenBurger }) => isOpenBurger && "rotate(-45deg)"};
    }

    &::after {
      bottom: ${({ isOpenBurger }) =>
        isOpenBurger ? "calc(50% - 1px)" : "0px"};
      transform: ${({ isOpenBurger }) => isOpenBurger && "rotate(45deg)"};
    }

    span {
      top: calc(50% - 1px);
      left: 10px;
      transform: ${({ isOpenBurger }) => isOpenBurger && "scale(0)"};
    }
  }
`
