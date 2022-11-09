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
                    <p className={style.aboutText}>
                        I'm a frontend developer with experience in creating SPA using React, Redux, Redux toolkit, TypeScript, SASS, TDD.<br></br>
                        I came to IT because I see great prospects for the growth of this direction. I understand that I can use my strengths in IT:
                        perseverance, consistency, purposefulness, a desire to understand the code. I want to contribute, develop and grow in skills and career.
                        To benefit the company and people, simultaneously achieving their goals.<br></br>
                        I love learning programming. I make a lot of efforts every day to grow in IT.
                    </p>
                    <div className={style.aboutMe}>
                        <Skill title={'HTML5 / CSS3 / SASS'}/>
                        <Skill title={'JS / TS'}/>
                        <Skill title={'React / Redux / Toolkit'}/>
                        <Skill title={'Git'}/>
                    </div>
                    <div>
                        <p className={style.skillText}>
                            More of my skills:<br></br>
                            Rest API, Axios, Ajax, Redux-thunk, Hooks<br></br>
                            Bootstrap, Material UI, Cross-browser layout, Adaptive layout<br></br>
                            OOP, Debugging, Code refactoring, The ability to understand someone else's code<br></br>
                            TDD, Storybook, Jest, Eslint, Prettier, Husky, Sanity Check<br></br>
                            Webpack, Postman, Figma, Formik
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default AboutMe;