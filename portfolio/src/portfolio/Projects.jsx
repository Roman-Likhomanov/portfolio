import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialImg from './../assets/img/social.png';
import cardsImg from './../assets/img/cards.png';
import todoImg from './../assets/img/todo.png';
import usersImg from './../assets/img/users.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    }
    const cards = {
        backgroundImage: `url(${cardsImg})`,
    }
    const todo = {
        backgroundImage: `url(${todoImg})`,
    }
    const users = {
        backgroundImage: `url(${usersImg})`,
    }
    return (
        <div id="Projects" className={style.projectsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title text={'Projects'}/>
                    <div className={style.projects}>
                        <Project style={social} title={'Social network'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Project style={cards} title={'Todo list'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Project style={todo} title={'Game of life'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                        <Project style={users} title={'Weather forecast'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;