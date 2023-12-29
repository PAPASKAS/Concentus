import React from 'react';
import css from '@/styles/thumb_slider.module.scss';


type TThumbSlider = {
    image: string;
    altImage: string;
    title: string;
    className?: React.CSSProperties | React.CSSProperties[] | string;
    onClick: () => void;
}
function ThumbSlider({ image, altImage, title, className = '', onClick = () => {} }: Readonly<TThumbSlider>) {
    return (
        <div className={ css.thumb_slider + ' ' + className } onClick={ onClick }>
            <div className={ css.thumb_slider_img }><img src={ image } alt={ altImage } /></div>
            <p className={ css.thumb_slider_text }>{ title }</p>
        </div>
    );
}

export default ThumbSlider;