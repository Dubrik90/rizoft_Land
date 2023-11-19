import styled from "styled-components"
import {Container} from "../../../../common/components/style/global.ts";

export const HomePossibilitiesWrap = styled.section`
  padding-top: 90px;
  padding-bottom: 140px;
  position: relative;

  @media (max-width: 1023px) {
    padding-top: 45px;
    padding-bottom: 70px;
  }
  
  svg {
    position: absolute;
    right: 0;
    bottom: -300px;

    @media (max-width: 1750px) {
      display: none;
    }
  }
`
export const PossibilitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 46px;
  max-width: 1401px;
`
export const PossibilitiesContainer = styled(Container)`
 
`


