import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';
import vk from './../assets/img/vk.svg';
import telegram from './../assets/img/telegram.svg';
import linkedin from './../assets/img/in.svg';

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