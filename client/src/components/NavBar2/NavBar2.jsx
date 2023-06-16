import { useNavigate } from "react-router-dom";
//styles
import s from "./NavBar2.module.css";

const NavBar2 = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return(
        <div className={s.container}>
            <div className={s.title}>
                <span onClick={handleClick}>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                <a className={s.link} href="https://google.com" target="blanck"><span className={s.span}>Link del proyecto</span></a>
            </div>
        </div>
    )
}

export default NavBar2;