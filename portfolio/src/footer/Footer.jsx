import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import vk from '../assets/img/icons/vk.svg';
import telegram from '../assets/img/icons/telegram.svg';
import linkedin from '../assets/img/icons/in.svg';

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.title}>© Copyright 2022 by Roman Likhomanov </span>
                <div className={style.socialIconsContainer}>
                    <div className={style.socialIcon}>
                        <img src={telegram}/>
                    </div>
                    <div className={style.socialIcon}>
                        <img src={vk}/>
                    </div>
                    <div className={style.socialIcon}>
                        <img src={linkedin}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;