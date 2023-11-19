import styled from "styled-components";
import {Button, Container} from "../../../../common/components/style/global.ts";

export const HomePreviewWrap = styled.section`
  padding-bottom: 120px;
`

export const HomeContainer = styled(Container)`

`
export const PreviewContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -100px;

  @media (max-width: 1920px) {
    margin-top: calc(-40px + (-100 - -40) * ((100vw - 851px) / (1920 - 851)));
  }
  @media (max-width: 850px) {
    margin-top: 20px;
  }
`
export const PreviewButton = styled(Button)`
  padding: 24px;
  font-size: 24px;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;
    font-size: 22px;
    
  }
  

`
export const ImgBlock = styled.div`
  border: 11px solid rgba(26, 26, 26, 0.90);
  border-radius: 40px;

  @media (max-width: 767px) {
    display: none;
  }
 
  img {
    max-width: 100%;
    width: 260px;
    object-fit: cover;
    
    @media (max-width: 1920px) {
      width: calc(180px + (260 - 180) * ((100vw - 851px) / (1920 - 851)));
    }
    @media (max-width: 850px) {
      max-width: 180px;
    }
  }

`


export const Title = styled.h1`
  color: var(--color-grey);
  font-size: 156px;
  font-weight: var(--fw-600);
  letter-spacing: -3.9px;
  text-indent: 330px;

  @media (max-width: 1920px) {
    font-size: calc(65px + (156 - 65) * ((100vw - 851px) / (1920 - 851)));
    text-indent: calc(190px + (330 - 200) * ((100vw - 851px) / (1920 - 851)));
  }
  @media (max-width: 850px) {
    font-size: calc(30px + (63 - 30) * ((100vw - 320px) / (850 - 320)));
    text-indent: calc(30px + (200 - 30) * ((100vw - 320px) / (850 - 320)));
    letter-spacing: -1.9px;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }


`
