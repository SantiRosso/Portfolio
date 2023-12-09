import Button from "../Button/Button";
import Drawer from "../Drawer/Drawer";
import s from "./NavBar.module.css";

const NavBar = () => {

    const width = window.innerWidth
    
    const handleClick = (id) => {
        const element = document.getElementById(id);
        const position = element.getBoundingClientRect();
        window.scrollTo({ top: position.top, left: position.left, behavior: 'smooth' })
    }

    return(
        <div className={s.container}>
            <div className={s.title}>
                <span>Santiago Rosso</span>
                <a href="https://drive.google.com/uc?export=download&id=17GGLU6Q1pKmvTag3q8NGpGQd0AxMneB-" download className={s.cv}>
                    Descargar CV 
                </a>
            </div>
            {
                width > 1280 ?
                    <div className={s.content}>
                        <a className={s.link} onClick={()=>handleClick("about")}><span className={s.span}>Sobre mi</span></a>
                        <a className={s.link} onClick={()=>handleClick("projects")}><span className={s.span}>Proyectos</span></a>
                        <a className={s.link} onClick={()=>handleClick("technologies")}><span className={s.span}>Tecnologías</span></a>
                        <a className={s.link} onClick={()=>handleClick("education")}><span className={s.span}>Educación</span></a>
                        <a className={s.link} onClick={()=>handleClick("contact")}><span className={s.span}>Contacto</span></a>
                    </div>
                : 
                <Drawer/>
            }
            
        </div>
    )
}

export default NavBar;