import {HeaderButton, HeaderContainer, HeaderWrapper, Logo} from "./style"
import Arrow from '../../../assets/arrow.svg?react'

import {Menu} from "./menu/Menu.tsx";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Logo>RIZOFT</Logo>
                <Menu/>
                <HeaderButton>Оформить заявку <Arrow/></HeaderButton>
            </HeaderContainer>
        </HeaderWrapper>
    )
}
