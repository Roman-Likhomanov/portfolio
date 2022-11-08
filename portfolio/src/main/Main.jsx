import style from './Main.module.scss';
import iImg from './../assets/img/i.jpg';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from "react-tilt/dist/tilt";

const Main = () => {
    const i = {
        backgroundImage: `url(${iImg})`,
    }

    return (
        <div id="Home" className={style.mainBlock}>
            <Fade top>
                <div className={style.container}>
                    <div className={style.text}>
                        <ReactTypingEffect
                            text={['I Am Roman Likhomanov']}
                        />
                        <h1>Frontend React Developer</h1>
                    </div>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className={style.photo}>
                            <div style={i} className={style.img}>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

export default Main;