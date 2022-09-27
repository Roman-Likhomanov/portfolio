import React from 'react';
import style from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">About me</a>
            <a href="">Portfolio</a>
            <a href="">Contact Me</a>
        </div>
    );
}

export default Nav;