import Button from "../Button/Button";
import s from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={s.container}>
            <div className={s.title}>
                <span>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                {/* <span>Sobre mi</span>
                <span>Tecnologías</span>
                <span>Proyectos</span>
                <span>Contacto</span> */}
                <Button name={"Sobre mi"}/>
                <Button name={"Tecnologías"}/>
                <Button name={"Proyectos"}/>
                <Button name={"Contacto"}/>
            </div>
        </div>
    )
}

export default NavBar;