import {HomeServicesWrapper, Service, ServicesBlock, ServicesContainer, ServicesTitle} from "./Services-style.ts";
import {SubTitleGl, TextGl} from "../../../../common/components/style/global.ts";

const servisesData = [
    {
        id: 1,
        title: 'Брендинг',
        desc: 'Раскройте истинный потенциал вашего бренда с помощью наших креативных дизайнерских услуг, которые приносят результаты.',
    },
    {
        id: 2,
        title: 'Веб-дизайн',
        desc: 'Повысьте качество своего цифрового опыта с помощью дизайна нашего веб-сайта, который восхищает и очаровывает пользователей.',
    },
    {
        id: 3,
        title: 'UI/UX дизайн',
        desc: 'Привлекайте и удерживайте пользователей с помощью нашего опыта в создании удобных и привлекательных интерфейсов.',
    },
    {
        id: 4,
        title: 'Дизайн приложений',
        desc: 'Выделитесь на рынке приложений благодаря нашим инновационным дизайнерским решениям, которые превосходят ожидания пользователей.',
    },
    {
        id: 5,
        title: 'Система дизайна',
        desc: 'Улучшите свой рабочий процесс, привлекая наших экспертов для разработки масштабируемых систем проектирования .',
    },
    {
        id: 6,
        title: 'Разработка веб-приложения',
        desc: 'Расширьте цифровую сферу своего стартапа с помощью опыта нашей команды в разработке индивидуальных решений для веб-приложений ',
    },
]

export const HomeServices = () => {
    return (
        <HomeServicesWrapper>
            <ServicesContainer>
                <ServicesTitle>Дополнительные услуги</ServicesTitle>
                <ServicesBlock>
                    {servisesData.map((serv) => (
                        <Service key={serv.id}>
                            <SubTitleGl>{serv.title}</SubTitleGl>
                            <TextGl>{serv.desc}</TextGl>
                        </Service>
                    ))}
                </ServicesBlock>
            </ServicesContainer>
        </HomeServicesWrapper>
    );
};

