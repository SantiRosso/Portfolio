import s from "./ProjectCard.module.css";

const ProjectCard = ({name, img, id}) => {
    return(
        <div className={s.card}>
            {/* <Link to={`/projectDetail/${id}`}> */}
                <h3>{name}</h3>
                <img src={img} alt={name} />
            {/* </Link> */}
        </div>
    )
}

export default ProjectCard;