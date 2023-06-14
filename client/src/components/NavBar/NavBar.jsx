import Button from "../Button/Button";
import s from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={s.container}>
            <div className={s.title}>
                <span>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                <span className={s.span}>Sobre mi</span>
                {/* <a href="#about"><span className={s.span}>Sobre mi</span></a> */}
                <span className={s.span}>Proyectos</span>
                {/* <a href="#projects"><span className={s.span}>Proyectos</span></a> */}
                <span className={s.span}>Tecnologías</span>
                {/* <a href="#technologies"><span className={s.span}>Tecnologías</span></a> */}
                <span className={s.span}>Educación</span>
                {/* <a href="#education"><span className={s.span}>Educación</span></a> */}
                <span className={s.span}>Contacto</span>
                {/* <a href="#contact"><span className={s.span}>Contacto</span></a> */}
                {/* <Button name={"Sobre mi"}/>
                <Button name={"Proyectos"}/>
                <Button name={"Tecnologías"}/>
                <Button name={"Educación"}/>
                <Button name={"Contacto"}/> */}
            </div>
        </div>
    )
}

export default NavBar;