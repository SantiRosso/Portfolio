import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {

    const id = useParams().id;
    const projects = useSelector((state) => state.projects);

    const project = projects?.filter((e) => e.id == id)
    console.log("project", project[0])
    console.log(projects)
    console.log(id)

    return(
        <div>
            Detalle del proyecto
        </div>
    )
}

export default ProjectDetail;