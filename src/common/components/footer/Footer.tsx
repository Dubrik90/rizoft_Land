import {FooterButton, FooterContainer, FooterContent, FooterTitle, FooterWrapper} from "./style.ts";
import Arrow from '../../../assets/arrow.svg?react'
export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterContent>
                    <FooterTitle>Давайте поговорим о нашем продукте</FooterTitle>
                    <FooterButton>Связаться с нами <Arrow/></FooterButton>
                </FooterContent>
            </FooterContainer>
        </FooterWrapper>
    );
};

