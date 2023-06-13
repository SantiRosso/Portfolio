import { useNavigate } from "react-router-dom"
import s from "./Button2.module.css"

const Button2 = ({name, click, disabled, icon, type, route}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        if(route){
            navigate(route)
        } else if(click) {
            click()
        }
    }

    return(
        <button type={type} onClick={handleClick} className={s.button} disabled={disabled}>{icon}{name}</button>
    )
}

export default Button2;