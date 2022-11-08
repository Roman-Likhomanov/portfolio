import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import cursor from '../../assets/img/icons/cursor.svg'

const header = [
    'Home', 'About Me', 'Projects', 'Contact Me'
]


const BurgerNav = () => {
    const[isOpen, setIsOpen] = useState(false)

    const burgerHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={isOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <div className={style.burgerBtn} onClick={burgerHandler}>
                <img src={cursor}/>
            </div>
        </div>
    );
}

export default BurgerNav;