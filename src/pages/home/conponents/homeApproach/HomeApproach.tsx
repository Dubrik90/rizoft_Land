import {ApproachContainer, ApproachMethod, ApproachText, HomeApproachWrap, Line, Method} from "./Approach-style.ts";
import {Container, TextGl, TitleGl} from "../../../../common/components/style/global.ts";
import {useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";
import {SvgBlock} from "../../../../common/components/svgBlock/SvgBlock.tsx";

export const HomeApproach = () => {
    const boxRef = useRef();

    useLayoutEffect(() => {
        console.log(boxRef.current?.children)

    }, [])


    return (
        <HomeApproachWrap>
            <ApproachContainer>
                <ApproachText>
                    <TitleGl>Подход к разработке <br/> веб-приложений</TitleGl>
                    <TextGl>
                        Мы действуем как расширение отделов разработки продуктов в технологических компаниях,
                        обеспечивая удаленное пополнение штата. Наши междисциплинарные команды разработчиков постоянно
                        сотрудничают с собственными отделами и постоянно совершенствуются, обеспечивая полную
                        прозрачность процессов.
                    </TextGl>
                </ApproachText>
                <ApproachMethod>
                    <SvgBlock iconRef={boxRef}/>
                    <Method>Scrum</Method>
                    <Method>Waterfall</Method>
                </ApproachMethod>
            </ApproachContainer>
            <Container>
                <Line></Line>
            </Container>
        </HomeApproachWrap>
    );
};

