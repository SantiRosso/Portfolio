import { useParams } from "react-router-dom";

const ProjectDetail = () => {

    const id = useParams()
    return(
        <div>
            Detalle del proyecto
        </div>
    )
}

export default ProjectDetail;