import React from 'react';
import Button from '@/components/Button';
import css from '@/styles/poster.module.scss';
import transformDateMonth from "@/libs/transformDateMonth";
import clock from '@/images/poster/clock.svg';
import person from '@/images/poster/person.svg';
import music from '@/images/poster/music.svg';


type TPoster = {
    datetime: Date;
    image: string;
    altImage: string;
    title: string;
    description: string;
    typeMusic: string;
    passingAge?: number;
}
function Poster({ datetime, image, altImage, title, description, typeMusic, passingAge }: Readonly<TPoster>) {
    return (
        <div className={ css.poster }>
            <time dateTime={ datetime.toString() } className={ css.poster__date }>
                <h2 className={ css.poster__date_day }>{ datetime.getDate() }</h2>
                <h3 className={ css.poster__date_month }>{ transformDateMonth(parseInt(datetime.getMonth().toString())) }</h3>
            </time>
            <div className={ css.poster__main_image }><img src={ image } alt={ altImage } /></div>
            <div className={ css.poster__text_block }>
                <h3 className={ css.poster__text_block_title }>{ title }</h3>
                <p className={ css.poster__text_block_description }>{ description }</p>
                <div className={ css.poster__text_block_annotation }>
                    <div>
                        <span><img src={ music } alt="music type" /></span>
                        <span>{ typeMusic }</span>
                    </div>
                    <div>
                        <span><img src={ clock } alt="concert time" /></span>
                        <time dateTime={ datetime.toTimeString() }>{ datetime.getHours() }:{ datetime.getMinutes() }</time>
                    </div>
                    <div>
                        <span><img src={ person } alt="paasing age" /></span>
                        <span>{ passingAge }+</span>
                    </div>
                </div>
            </div>
            <Button>Заказать билет</Button>
        </div>
    );
}

export default Poster;
