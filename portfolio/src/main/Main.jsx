import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Всем привет</span>
                    <h3>Я Роман Лихоманов</h3>
                    <h1>Фронтенд разработчик</h1>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;