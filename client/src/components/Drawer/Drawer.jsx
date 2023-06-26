import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import Button from "../Button/Button";
//styles
import s from "./Drawer.module.css";

const Drawer = () => {

    const width = window.innerWidth
    const [drawer, setDrawer] = useState(false)

    const handleClickDrawer = () => {
        setDrawer(!drawer)
    }

    const handleClick = (id) => {
        const element = document.getElementById(id);
        const position = element.getBoundingClientRect();
        window.scrollTo({ top: position.top, left: position.left, behavior: 'smooth' })
    }

    return(
        <div>
            <button className={s.button} onClick={handleClickDrawer}>Desplegable</button>
            {
                drawer && 
                <div className={s.drawer}>
                    <a className={s.link} onClick={()=>handleClick("about")}><span className={s.span}>Sobre mi</span></a>
                    <a className={s.link} onClick={()=>handleClick("projects")}><span className={s.span}>Proyectos</span></a>
                    <a className={s.link} onClick={()=>handleClick("technologies")}><span className={s.span}>Tecnologías</span></a>
                    <a className={s.link} onClick={()=>handleClick("education")}><span className={s.span}>Educación</span></a>
                    <a className={s.link} onClick={()=>handleClick("contact")}><span className={s.span}>Contacto</span></a>
                </div>
            }
        </div>
    )
}

export default Drawer;