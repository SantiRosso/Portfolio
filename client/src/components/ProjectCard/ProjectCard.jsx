import { useNavigate } from "react-router-dom";
//styles
import s from "./ProjectCard.module.css";
//components
import Button2 from "../Button2/Button2";

const ProjectCard = ({name, img, id}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/projectDetail/${id}`)
    }

    return(
        <div className={s.card}>
                <h3>{name}</h3>
                <img src={img} alt={name} className={s.img}/>
                <Button2 click={handleClick} name={"Detalle"}/>
        </div>
    )
}

export default ProjectCard;