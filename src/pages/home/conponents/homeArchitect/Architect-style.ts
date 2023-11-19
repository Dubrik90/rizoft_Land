import styled from "styled-components"
import {Container, TitleGl} from "../../../../common/components/style/global.ts";


export const HomeArchitectWrapper = styled.section`
  padding-top: 180px;

  @media (max-width: 1920px) {
    padding-top: calc(50px + (180 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
  
`
export const ArchitectContainer = styled(Container)`

`
export const ArchitectContent = styled.div`

`
export const ArchitectTitle = styled(TitleGl)`
  margin-bottom: 205px;

  @media (max-width: 1920px) {
    margin-bottom: calc(50px + (205 - 50) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const FormWrapper = styled.form`

`
export const RowBlock = styled.div`
  display: flex;
  column-gap: 530px;
  padding-bottom: 42px;
  border-bottom: 1px solid var(--color-grey);

  @media (max-width: 1440px) {
    column-gap: 50px;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 40px;
    border-bottom: none;
  }
`
export const SelectBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  row-gap: 25px;

`
export const StagesBlock = styled(SelectBlock)`
  padding-top: 42px;
  padding-bottom: 42px;
  border-bottom: 1px solid var(--color-grey);
  
  @media (max-width: 768px) {
    padding-top: 0;
    border-bottom: none;
  }
`
export const DescriptionBlockWrapper = styled(SelectBlock)`
  padding-top: 42px;
  padding-bottom: 42px;
  
  @media (max-width: 768px) {
    padding-top: 0;
  }
`
export const DescriptionBlock = styled.div`
  display: flex;
  column-gap: 40px;

  @media (max-width: 768px) {
   flex-direction: column;
    row-gap: 40px;
  }
  @media (max-width: 425px) {
    row-gap: 20px;
  }
`
export const SelectStagesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 970px;
  gap: 28px;

  @media (max-width: 615px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    gap: 10px;
  }
`


export const ButtonGroupWrap = styled.div`

`
export const ButtonPlatformGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 350px;
  gap: 28px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 615px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    gap: 10px;
  }

`;
export const ButtonDevicesGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 520px;
  gap: 28px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 615px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    gap: 10px;
  }
`

export const SelectButton = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 28px;
  border-radius: 62px;
  font-family: Montserrat;
  font-size: 32px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#4CAF50' : '#fff')};
  color: var(--color-black);
  border: 1px solid var(--color-grey);
  text-align: center;
  border-color: ${(props) => (props.selected ? 'transparent' : '#1a1a1a')};

  :last-child {
    flex: 1 1 auto;
  }

  @media (max-width: 1440px) {
   
    padding: 10px 14px;
  }
  
  @media (max-width: 425px) {
    padding: 10px 28px;
    font-size: 18px;
  } 

`;

export const Textarea = styled.textarea`
  flex: 0 1 40%;
  min-height: calc(185px + (215 - 185) * ((100vw - 768px) / (1920 - 768)));
  resize: none;
  outline: none;
  background: var(--color-wight);
  border: 1px solid var(--color-black);
  font-family: Montserrat, sans-serif;
  font-size: 17px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 16px;
  color: var(--color-black);
  font-weight: 100;
  position: relative;
  transition: all 0.2s ease 0s;
  z-index: 1;

  :focus {
    outline: none;
    color: var(--color-black);
    border: 1px solid var(--color-lime-green)
  }

  :valid {
    opacity: 1
  }
  
  @media (max-width: 767px) {
    padding: 7px 25px;
    min-height: 100px;
  }
`;

export const FormDataItemUpload = styled.div`
  flex: 0 1 60%;
`;

export const UploadWrapper = styled.div`
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: 20px
`
export const UploadItem = styled.div`
  cursor: pointer;
  width: 100%;
 // height: 100%;
  padding: 50px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 1px dashed var(--color-black);
  overflow: hidden;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 15px 15px;
  }

  svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    fill: rgba(255, 255, 255, .4)
  }

`
export const UploadItemIcCont = styled.div`
  svg {
    width: calc(30px + (57 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const UploadItemResult = styled.div`
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  color: var(--color-black);
  font-weight: 500;
  margin-top: 10px;
  max-width: 350px;
  word-break: break-all;
`
export const UploadItemLabel = styled.label`
  color: var(--color-black);
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
`
export const InputUploadItem = styled.input`
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`
export const UploadCancel = styled.div`
  display: none;
  cursor: pointer;
  height: 100%;
  padding: 50px 30px;
  border-radius: 16px;
  border: 1px dashed rgba(255, 91, 91, .5);
  overflow: hidden;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  :hover {
    svg {
      fill: rgba(241, 9, 9, 0.5)
    }
  }
`

export const UploadCancelInner = styled.div`
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  svg {
    margin: auto;
    width: 40px;
    fill: rgba(255, 91, 91, .5);
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }
`
export const ButtonBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 46px;
  
  @media (max-width: 768px) {
      flex-direction: column;
    row-gap: 30px;
  }
`
export const SubmitButton = styled.button`
  flex: 0 1 40%;
  pointer-events: auto;
  cursor: pointer;
  border: 1px solid var(--color-grey);
  padding-top: calc(8px + (16 - 8) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(8px + (16 - 8) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(15px + (32 - 15) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(15px + (32 - 15) * ((100vw - 320px) / (1920 - 320)));
  align-self: center;
  margin: 0;
  font-family: inherit;
  text-decoration: none;
  position: relative;
  display: inline-block;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-size: 24px;
  border-radius: 500px;
  overflow: hidden;
  color: var(--color-grey);
  text-align: center;
  z-index: 5;
  background: var(--color-forest-green);

  @media (max-width: 768px) {
    align-self: stretch;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background: var(--color-wight);
    width: 140%;
    left: -20%;
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: transform 0.4s cubic-bezier(.3, 1, .8, 1), -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1)
  }

  span {
    position: relative
  }

  :hover {
    border: 1px solid transparent;

    :before {
      -webkit-transform: translate3d(100%, 0, 0) skew(30deg);
      transform: translate3d(100%, 0, 0)
    }
  }

`;
export const PrivacyPolicy = styled.p`
  color: var(--colors-text-dark);
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: var(--fw-500);
  line-height: normal;
  max-width: 670px;

  @media (max-width: 1920px) {
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

  }

  a {
    color: var(--color-link);

    :hover {
      color: var(--color-dark);
    }
  }
`

export const TextPolicy = styled.p`

`
