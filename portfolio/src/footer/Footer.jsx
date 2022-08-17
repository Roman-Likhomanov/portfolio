import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Роман Лихоманов</h2>
                <div className={style.socialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;