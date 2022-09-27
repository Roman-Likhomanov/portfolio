import React from 'react';
import style from './Project.module.scss';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a className={style.button}>Look</a>
            </div>
            <div className={style.projectInfo}>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.decription}>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;