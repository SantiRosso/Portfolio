//styles
import s from "./Contact.module.css";
//icons
import { BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

const Contact = () => {
    return(
        <div className={s.container2} id="contact">
            <div>
                <h1>Contacto</h1>
            </div>
            <div className={s.container}>
                <div>
                    <AiOutlineMail  className={s.icon}/>
                    <span>Correo: santiagorosso98@gmail.com</span> 
                </div>
                <div>
                    <BsFillTelephoneFill className={s.icon}/>
                    <span>Celular: +54 9 351 5336418</span>
                </div>
                <div>
                    <AiFillGithub className={s.icon}/>
                    <span>Github: SantiRosso</span>
                </div>
                <div> 
                    <BsLinkedin className={s.icon}/>
                    <span>Linkedin: linkedin.com/in/santiago-rosso-421484227</span>
                </div>
            </div>
            <div className={s.p}>
                <p>© 2023 | Diseñado por Santiago Rosso.</p>
            </div>
        </div>
    )
}

export default Contact;