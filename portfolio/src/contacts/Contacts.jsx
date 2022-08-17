import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactsForm}>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea></textarea>
                </form>
                <a className={style.button}>Отправить</a>
            </div>
        </div>
    );
}

export default Contacts;