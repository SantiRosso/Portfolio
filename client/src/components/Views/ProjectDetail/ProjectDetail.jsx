import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//components
import NavBar from "../../NavBar/NavBar";
//style
import s from "./ProjectDetail.module.css";
import Footer from "../../Footer/Footer";

const ProjectDetail = () => {

    const id = useParams().id;
    const projects = useSelector((state) => state.projects);

    const project = projects?.filter((e) => e.id == id)

    return(
        <div>
            <div className={s.container}>
                <NavBar/>
                <h1>{project[0].name}</h1>
                <img src={project[0].img} alt={project[0].name} />
            </div>
            <Footer/>
        </div>
        
    )
}

export default ProjectDetail;