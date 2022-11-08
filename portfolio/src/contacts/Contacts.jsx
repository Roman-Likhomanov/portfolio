import React from 'react';
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Zoom from 'react-reveal/Zoom';

const Contacts = () => {
    return (
        <div id="Contact Me" className={style.contactsBlock}>
            <Zoom>
                <div className={`${style.container} ${style.contactsContainer}`}>
                    <Title text={'Contact me'}/>
                    <form className={style.contactsForm}>
                        <div className={style.contactsInput}>
                            <input type='text'/>
                            <input type='text'/>
                            <input type='text'/>
                        </div>
                        <textarea></textarea>
                        <button type='submit' className={style.button}>Send Message</button>
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
            </Zoom>
        </div>
    );
}

export default Contacts;