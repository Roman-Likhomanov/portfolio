import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contact me'}/>
                <form className={style.contactsForm}>
                    <div className={style.contactsInput}>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='text'/>
                    </div>
                    <textarea></textarea>
                    <button className={style.button}>Send Message</button>
                </form>
                <div className={style.contactsMe}>
                    <div className={style.contactsMeEmail}>
                        <h6>Email Me</h6>
                        <p>contact@kyrosnoriaki.com</p>
                    </div>
                    <div className={style.contactsMePhone}>
                        <h6>Call Me</h6>
                        <p>+1 700 333 92 96</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;