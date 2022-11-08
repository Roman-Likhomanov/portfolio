import React from 'react';
import style from './AboutMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    return (
        <div id="About Me" className={style.aboutMeBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                    <Title text={'About me'}/>
                    <p>
                        I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to get new
                        experiences and always learn from my surroundings. I've done more than 285 projects. You can
                        check it through portfolio section on this website. I looking forward to any opportunities and
                        challenges.
                    </p>
                    <div className={style.aboutMe}>
                        <Skill title={'HTML5 / CSS3 / SASS'} description={'Lorem ipsum dolor sit amet, consectetur'}/>
                        <Skill title={'JS / TS'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Skill title={'React / Redux / Toolkit'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Skill title={'Git'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default AboutMe;