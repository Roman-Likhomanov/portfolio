import React from 'react';
import style from './Portfolio.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialImg from './../assets/img/social.jpg';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    }
    return (
        <div className={style.portfolioBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.portfolioContainer}`}>
                    <Title text={'Portfolio'}/>
                    <div className={style.portfolio}>
                        <Project style={social} title={'Social network'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Project title={'Todo list'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Project title={'Game of life'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Project title={'Weather forecast'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Portfolio;