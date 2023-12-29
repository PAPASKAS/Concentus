import React from 'react';
import Container from "@/components/Container";
import css from '@/styles/footer.module.scss';


function Footer() {
    return (
        <footer className={ css.footer__wrapper }>
            <Container>
                <div className={ css.footer }>
                    <a href="/" className={ css.footer__logo }>САЙТ КОНЦЕРТО - ЭКСКУРСИОННЫХ ПРОГРАММ</a>
                    <div className={ css.footer__text }>
                        <div>
                            <h3 className={ css.footer__heading }>Мероприятия</h3>
                            <ul className={ css.footer__ul }>
                                <li><a href="/">Экскурсии</a></li>
                                <li><a href="/">Концерты</a></li>
                                <li><a href="/">Афиша</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={ css.footer__heading }>Контакты</h3>
                            <ul className={ css.footer__ul }>
                                <li><a href="https://github.com/PAPASKAS" rel="noreferrer" target="_blank">Github</a></li>
                                <li><a href="mailto:papaskaaaa@gmail.com" rel="noreferrer" target="_blank">papaskaaaa@gmail.com</a></li>
                                <li><a href="https://www.google.com/maps/dir/%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA/50.906,34.793992/@44.6392497,37.6822936,11z/data=!4m8!4m7!1m5!1m1!1s0x40ee03bb38a719df:0x628956e1835d7aa3!2m2!1d37.7770117!2d44.7180464!1m0?hl=ru&entry=ttu" rel="noreferrer" target="_blank">г. Новороссийск</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;