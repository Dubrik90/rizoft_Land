import styled from "styled-components"
import {Container} from "../../../../common/components/style/global.ts";

export const HomeApproachWrap = styled.section`
  padding-top: 120px;
  padding-bottom: 80px;
  position: relative;

  @media (max-width: 1430px) {
    padding-top: 0;
  }
  @media (max-width: 1023px) {
    padding-bottom: 40px;
  }
`
export const Line = styled.div`
  :after {
    position: absolute;
    bottom: -80px;
    left: 40px;
    width: 85%;
    border-top: 1px solid var(--color-black);
    content: "";

    @media (max-width: 1430px) {
      padding-top: 0;
    }
    @media (max-width: 1023px) {
      display: none;
    }
  }
`
export const ApproachContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }

`
export const ApproachText = styled.div`
  flex: 0 1 988px;
  display: flex;
  flex-direction: column;
  row-gap: 74px;

  @media (max-width: 1430px) {
    row-gap: 40px;
  }
  @media (max-width: 1430px) {
    flex: 1 1 auto;
  }

`
export const ApproachMethod = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 82px;
  background-color: var(--color-forest-green);
  padding: 40px 18px 40px 18px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  text-align: center;
  position: relative;

  @media (max-width: 1430px) {
    width: 100%;
    margin-bottom: 50px;
    row-gap: 45px;
  }

  svg {
    position: absolute;
    top: -765px;
    left: -752px;

    @media (max-width: 1430px) {
      display: none;
    }
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 2px;
    background-color: var(--color-wight);
  }
  
  
`
export const Method = styled.p`
  color: var(--color-wight);
  font-size: 54px;
  font-weight: var(--fw-700);
  text-transform: uppercase;

  @media (max-width: 1920px) {
    font-size: calc(24px + (54 - 24) * ((100vw - 320px) / (1920 - 320)));
  }
`
