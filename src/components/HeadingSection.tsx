import React from 'react';
import css from "@/styles/heading_section.module.scss";
import calendar from "@/images/calendar.svg";


type THeadingSection = {
    title: string;
    href: string;
}
function HeadingSection({ title, href }: Readonly<THeadingSection>) {
    return (
        <div className={ css.heading_section }>
            <h2 className={ css.heading_section__title }>{ title }</h2>
            <a className={ css.heading_section__a } href={ href }>
                <span><img src={ calendar } alt="calendar" /></span>
                <span>Все мероприятия</span>
            </a>
        </div>
    );
}

export default HeadingSection;