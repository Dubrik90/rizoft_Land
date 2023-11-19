import styled from "styled-components";
import {Container, TitleGl} from "../../../../common/components/style/global.ts";


export const HomeServicesWrapper = styled.section`
  padding-top: 160px;

  @media (max-width: 1920px) {
    padding-top: calc(50px + (160 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ServicesContainer = styled(Container)`

`
export const ServicesTitle = styled(TitleGl)`
  margin-bottom: 115px;

  @media (max-width: 1920px) {
    margin-bottom: calc(40px + (115 - 40) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ServicesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  justify-content: space-between;
  row-gap: 140px;

  @media (max-width: 1920px) {
    row-gap: calc(30px + (140 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
  
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

`
export const Service = styled.div`
  display: flex;
  flex-direction: column;
 // row-gap: 19px;
  
  @media (max-width: 700px) {
    row-gap: 19px;
  }
  
  h2 {
    min-height: 120px;
    @media (max-width: 1440px) {
      min-height: 85px;
    }
    @media (max-width: 700px) {
      min-height:auto;
     
    }
  }
`
