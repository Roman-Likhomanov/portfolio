import React from 'react';
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

const header = [
    'Home', 'About Me', 'Projects', 'Contact Me'
]

const Nav = () => {
    return (
        <div className={style.nav}>
            {header.map(h => {
                return <Link
                    activeClass={style.active}
                    to={h}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    key={h}
                >{h}</Link>
            })}
        </div>
    );
}

export default Nav;