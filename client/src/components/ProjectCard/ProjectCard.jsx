//styles
import s from "./ProjectCard.module.css";
//components
import Button2 from "../Button2/Button2";

const ProjectCard = ({name, img, id}) => {
    return(
        <div className={s.card}>
            {/* <Link to={`/projectDetail/${id}`}> */}
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <Button2 name={"Detalle"}/>
            {/* </Link> */}
        </div>
    )
}

export default ProjectCard;