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
                <span className={s.span}>Proyectos</span>
                <span className={s.span}>Tecnologías</span>
                <span className={s.span}>Educación</span>
                <span className={s.span}>Contacto</span>
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