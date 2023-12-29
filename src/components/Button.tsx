import React from 'react';
import css from '@/styles/button.module.scss';


type TButton = {
    children: string;
    onClick?: () => void;
    className?: React.CSSProperties | React.CSSProperties[] | string;
}
function Button({ children, onClick, className = '' }: Readonly<TButton>) {
    return (
        <button className={ css.button + ' ' + className } onClick={ onClick }>
            { children }
        </button>
    );
}

export default Button;