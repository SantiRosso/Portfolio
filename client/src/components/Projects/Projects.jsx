import { useState } from "react";
import { useSelector } from "react-redux";
//components
import Button from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard"
//styles
import s from "./Projects.module.css";
//icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"


const Projects = () => {

    const projects = useSelector((state) => state.projects)

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(3);
    let max = Math.ceil(projects.length - perPage + 1 / perPage)

    const nextPage = () => {
        setPage (page +1)
    }

    const previousPage = () => {
        setPage (page -1)
    }

    return(
        <div className={s.container} id="projects">
            <div>
                <h1>Proyectos</h1>
            </div>
            <div className={s.carrousel}>
                <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1} /* hidden={page === 1} *//>
                    {
                        projects.slice(page - 1, (page - 1) + perPage).map((e) => {
                            return(
                                <ProjectCard name={e.name} img={e.img[0]} id={e.id}/>
                            )
                        })
                    }
                <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max} /* hidden={page === max} *//>
            </div>
        </div>
    )
}

export default Projects;