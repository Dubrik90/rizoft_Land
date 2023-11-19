import {ArchitectContainer, ArchitectContent, ArchitectTitle, HomeArchitectWrapper} from "./Architect-style.ts";
import {ArchitectForm} from "./ArchitectForm.tsx";

export const HomeArchitect = () => {
    return (
        <HomeArchitectWrapper>
            <ArchitectContainer>
                <ArchitectContent>
                    <ArchitectTitle>
                        Архитектор проекта
                    </ArchitectTitle>
                    <ArchitectForm/>
                </ArchitectContent>
            </ArchitectContainer>
        </HomeArchitectWrapper>
    );
};

