import Button from "../Button/Button";
import s from "./NavBar.module.css";

const NavBar = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return(
        <div className={s.container}>
            <div className={s.title}>
                <span>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                <a href="#about" className={s.link}><span className={s.span}>Sobre mi</span></a>
                <a href="#projects" className={s.link}><span className={s.span}>Proyectos</span></a>
                <a href="#technologies" className={s.link}><span className={s.span}>Tecnologías</span></a>
                <a href="#education" className={s.link}><span className={s.span}>Educación</span></a>
                <a href="#contact" className={s.link}><span className={s.span}>Contacto</span></a>
            </div>
        </div>
    )
}

export default NavBar;