import React from 'react';
import css from '@/styles/container.module.scss';


type TContainer = {
    children: string | React.JSX.Element | React.JSX.Element[];
}
function Container({ children }: Readonly<TContainer>) {
    return (
        <div className={ css.container }>
            { children }
        </div>
    );
}

export default Container;
