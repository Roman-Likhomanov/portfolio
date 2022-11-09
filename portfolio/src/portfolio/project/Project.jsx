import React from 'react';
import style from './Project.module.scss';

const Project = (props) => {

    const onclickLookHandler = () => {
        window.open(props.projectLookUrl, '_blank')
    }

    const onclickCodeHandler = () => {
        window.open(props.projectCodeUrl, '_blank')
    }

    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <button onClick={onclickLookHandler} className={style.button}>Look</button>
                <button onClick={onclickCodeHandler} className={style.button}>Code</button>
            </div>
            <div className={style.projectInfo}>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.decription}>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;