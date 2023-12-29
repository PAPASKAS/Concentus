import React from 'react';
import Container from "@/components/Container";
import css from '@/styles/header.module.scss';


type TButtonAside = {
    asideHandler: () => void;
    stateAside: 'active' | 'inactive';
}
const ButtonAside = ({ asideHandler, stateAside }: TButtonAside ) => {
    return (
        <button className={ css.header__aside_button + ' ' + css[`header__aside_button_${stateAside}`]  } onClick={asideHandler}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

function Header () {
    const [stateAside, setStateAside] = React.useState<'active' | 'inactive'>('inactive');

    const asideHandler = () => setStateAside(stateAside === 'active' ? 'inactive' : 'active');


    return (
        <div className={ css.wrapper_header }>
            <Container>
                <header className={ css.header }>
                    <nav className={ css.header__nav }>
                        <ButtonAside asideHandler={ asideHandler } stateAside={ stateAside } />
                        <ul className={ css.header__nav_list + ' ' + css[`header__nav_list_${stateAside}`] }>
                            <li className={ css.header__nav_item }>Афиша</li>
                            <li className={ css.header__nav_item }>Заказ билетов</li>
                            <li className={ css.header__nav_item }>Контакты</li>
                            <li className={ css.header__nav_item }>История дворца</li>
                            <li className={ css.header__nav_item }>Галерея</li>
                            <li className={ css.header__nav_item }>Планы залов</li>
                        </ul>
                    </nav>
                    <div className={ css.header__logo }>САЙТ КОНЦЕРТО - ЭКСКУРСИОННЫХ ПРОГРАММ</div>
                </header>
            </Container>
        </div>
    )
}

export default Header;
