import React from 'react';
import css from "@/styles/announcement_item.module.scss";
import transformDateMonth from "@/libs/transformDateMonth";


type TAnnouncementsItem = {
    datetime: Date;
    children: React.JSX.Element | React.JSX.Element[] | string;
}
function AnnouncementItem({ datetime, children}: Readonly<TAnnouncementsItem>) {
    return (
        <div className={ css.announcement_item }>
            <time dateTime={ datetime.toString() } className={ css.announcement_item__time }>
                <h2 className={ css.announcement_item__time_day }>{ datetime.getDate() }</h2>
                <h3 className={ css.announcement_item__time_month }>{ transformDateMonth(parseInt(datetime.getMonth().toString())) }</h3>
            </time>
            <div className={ css.announcement_item__text }>
                { children }
            </div>
        </div>
    );
}

export default AnnouncementItem;