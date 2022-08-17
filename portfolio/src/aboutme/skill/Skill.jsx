import React from 'react';
import style from './Skill.module.css';

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
        </div>
    );
}

export default Skill;