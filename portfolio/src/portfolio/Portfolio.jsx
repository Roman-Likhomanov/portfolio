import React from 'react';
import style from './Portfolio.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";

const Portfolio = () => {
    return (
        <div className={style.portfolioBlock}>
            <div className={`${styleContainer.container} ${style.portfolioContainer}`}>
                <h2 className={style.title}>Портфолио</h2>
                <div className={style.portfolio}>
                    <Project title={'Social network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Project title={'Todo list'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Project title={'Game of life'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Project title={'Weather forecast'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;