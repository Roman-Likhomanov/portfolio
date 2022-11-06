import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import iImg from './../assets/img/i.jpg'

const Main = () => {
    const i = {
        backgroundImage: `url(${iImg})`,
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <h4>I Am Roman Likhomanov</h4>
                    <h1>Frontend React Developer</h1>
                </div>
                <div className={style.photo}>
                    <div style={i} className={style.img}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;