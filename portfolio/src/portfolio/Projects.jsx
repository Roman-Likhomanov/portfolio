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
                                 description={'Online platform to connect people'}
                                 projectLookUrl={'https://roman-likhomanov.github.io/samurai-way'}
                                 projectCodeUrl={'https://github.com/Roman-Likhomanov/samurai-way'}/>
                        <Project style={cards} title={'Learning cards'}
                                 description={'Learning cards application to learn new things'}
                                 projectLookUrl={'https://roman-likhomanov.github.io/cards'}
                                 projectCodeUrl={'https://github.com/Roman-Likhomanov/cards'}/>
                        <Project style={todo} title={'Todo list'}
                                 description={'Todo list, simple way to organise everything'}
                                 projectLookUrl={'https://roman-likhomanov.github.io/todo-toolkit'}
                                 projectCodeUrl={'https://github.com/Roman-Likhomanov/todo-toolkit'}/>
                        <Project style={users} title={'List of users'}
                                 description={'List of users application for interacting with users'}
                                 projectLookUrl={'https://roman-likhomanov.github.io/labmedia-test-task/'}
                                 projectCodeUrl={'https://github.com/Roman-Likhomanov/labmedia-test-task/tree/master/my-app'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;