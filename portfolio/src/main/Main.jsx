import style from './Main.module.scss';
import iImg from './../assets/img/i.jpg';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const Main = () => {
    const i = {
        backgroundImage: `url(${iImg})`,
    }

    return (
        <div className={style.mainBlock}>
            <Fade top>
                <div className={style.container}>
                    <div className={style.text}>
                        {/*<h4>I Am Roman Likhomanov</h4>*/}
                        <ReactTypingEffect
                            text={['I Am Roman Likhomanov']}
                        />
                        <h1>Frontend React Developer</h1>
                    </div>
                    <div className={style.photo}>
                        <div style={i} className={style.img}>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;