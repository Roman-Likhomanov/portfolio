import React from 'react';
import style from './Skill.module.scss';
import skillImg from "../../assets/img/icons/skill.png";

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
        </div>
    );
}

export default Skill;