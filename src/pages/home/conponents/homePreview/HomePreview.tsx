import Phone from "../../assets/phone1.png";
import Arrow from '../../../../assets/arrow.svg?react'
import {HomeContainer, HomePreviewWrap, ImgBlock, PreviewButton, PreviewContent, Title} from "./HomePreview-style.ts";


export const HomePreview = () => {
    return (
        <HomePreviewWrap>
            <HomeContainer>
                <Title>Вот где начинаются ваши свершения</Title>
                <PreviewContent>
                    <PreviewButton>Оформить заявку <Arrow/></PreviewButton>
                    <ImgBlock>
                        <img src={Phone} alt=""/>
                    </ImgBlock>
                </PreviewContent>
            </HomeContainer>
        </HomePreviewWrap>
    );
};

