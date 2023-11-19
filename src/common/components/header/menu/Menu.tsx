import {MenuButton, MenuLinks, MenuWrapper} from "./style"
import {useState} from "react";
import {useScrollBlock} from "../../hooks/use-scroll-block.ts";
import {Burger} from "../../style/Burger.ts";
import {NavLink} from "react-router-dom";
import Arrow from '../../../../assets/arrow.svg?react'

export const Menu = () => {
    const [isOpenBurger, setIsOpenBurger] = useState(false)

    const menuLinks: any = [
        {id: "0", link: "О нас", route: '/'},
        {id: "1", link: "Кейсы", route: '/'},
        {id: "2", link: "Наши клиенты", route: '/'},
        {id: "3", link: "Отзывы", route: '/'},
    ]
    const [blockScroll, allowScroll] = useScrollBlock()

    const onClickOpenBurger = () => {
        if (!isOpenBurger) {
            blockScroll()
        }
        setIsOpenBurger(!isOpenBurger)
        if (isOpenBurger) {
            allowScroll()
        }
    }
    const onClickCloseBurger = () => {
        allowScroll()
        setIsOpenBurger(false)
    }

    return (
        <MenuWrapper>
            <MenuLinks isOpenBurger={isOpenBurger}>
                {menuLinks.map((el: any) => (
                    <NavLink key={el.id} to={el.route} onClick={onClickCloseBurger}>
                        {el.link}
                    </NavLink>
                ))}
                <MenuButton>Оформить заявку <Arrow/></MenuButton>
            </MenuLinks>
            <Burger isOpenBurger={isOpenBurger} onClick={onClickOpenBurger}>
                <span></span>
            </Burger>
        </MenuWrapper>
    )
}
