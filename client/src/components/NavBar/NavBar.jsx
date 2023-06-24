import Button from "../Button/Button";
import s from "./NavBar.module.css";

const NavBar = () => {
    
    const handleClick = (id) => {
        const element = document.getElementById(id);
        const position = element.getBoundingClientRect();
        window.scrollTo({ top: position.top, left: position.left, behavior: 'smooth' })
    }

    return(
        <div className={s.container}>
            <div className={s.title}>
                <span>Santiago Rosso</span>
                <a href="./assets/pdf/Curriculum-Santiago-Rosso-20-02-2023.pdf"  download="Curriculum-Santiago-Rosso-20-02-2023.pdf" className={s.cv}>
                    Descargar CV 
                </a>
            </div>
            <div className={s.content}>
                <a /* href="#about" */ className={s.link} onClick={()=>handleClick("about")}><span className={s.span}>Sobre mi</span></a>
                <a /* href="#projects" */ className={s.link} onClick={()=>handleClick("projects")}><span className={s.span}>Proyectos</span></a>
                <a /* href="#technologies" */ className={s.link} onClick={()=>handleClick("technologies")}><span className={s.span}>Tecnologías</span></a>
                <a /* href="#education" */ className={s.link} onClick={()=>handleClick("education")}><span className={s.span}>Educación</span></a>
                <a /* href="#contact" */ className={s.link} onClick={()=>handleClick("contact")}><span className={s.span}>Contacto</span></a>
            </div>
        </div>
    )
}

export default NavBar;