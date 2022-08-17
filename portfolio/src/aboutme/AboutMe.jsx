import React from 'react';
import style from './AboutMe.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const AboutMe = () => {
    return (
        <div className={style.aboutMeBlock}>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                <h2 className={style.title}>Обо мне</h2>
                <p>
                    I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.
                </p>
                <div className={style.aboutMe}>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;