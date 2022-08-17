import React from 'react';
import style from './Project.module.css';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.button}>Посмотреть</a>
            </div>
            <h4 className={style.title}>{props.title}</h4>
            <span className={style.decription}>{props.description}</span>
        </div>
    );
}

export default Project;