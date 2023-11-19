import {HomePossibilitiesWrap, PossibilitiesContainer, PossibilitiesContent} from "./Possibilities-style.ts";
import {TextGl, TitleGl} from "../../../../common/components/style/global.ts";
import GroupSVG2 from '../../assets/groupSVG2.svg?react'
export const HomePossibilities = () => {
    return (
        <HomePossibilitiesWrap>
            <PossibilitiesContainer>
                <PossibilitiesContent>
                    <TitleGl>Наши возможности в сфере услуг <br/> веб-разработки</TitleGl>
                    <TextGl>
                        Расширяя команды наших клиентов, мы обеспечиваем полный жизненный цикл разработки, включая UI/UX
                        дизайн для собственных мобильных и веб-приложений, который помогает инновационным компаниям и
                        признанным брендам достигать своих бизнес-целей.
                    </TextGl>
                </PossibilitiesContent>
            </PossibilitiesContainer>
            <GroupSVG2/>
        </HomePossibilitiesWrap>
    );
};

