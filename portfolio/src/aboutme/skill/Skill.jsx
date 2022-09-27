import React from 'react';
import style from './Skill.module.css';
import skillImg from "../../assets/img/skill.png";

const Skill = (props) => {

    const skill = {
        backgroundImage: `url(${skillImg})`,
    }
    return (
        <div className={style.skill}>
            <div style={skill} className={style.icon}>
                <div className={style.iconText}>90.0%</div>
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Skill;