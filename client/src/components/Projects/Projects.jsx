import { useState } from "react";
//components
import Button from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard"
//styles
import s from "./Projects.module.css";
//icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"


const Projects = () => {

    const [projects, setProjects] = useState([
        {
            name: "Videogames",
            img: "asd",
            id: 1
        },
        {
            name: "EasyLearning",
            img: "asd",
            id: 2
        },
        {
            name: "Pokedex",
            img: "asd",
            id: 3
        },
        {
            name: "Formulario: Coaching Empleo y Capacitación",
            img: "asd",
            id: 4
        },
        {
            name: "Inmobiliaria",
            img: "asd",
            id: 5
        }
    ])

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
        <div className={s.container}>
            <div>
                <h1>Proyectos</h1>
            </div>
            <div className={s.carrousel}>
                <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1} /* hidden={page === 1} *//>
                    {
                        projects.slice(page - 1, (page - 1) + perPage).map((e) => {
                            return(
                                <ProjectCard name={e.name} img={e.img} id={e.id}/>
                            )
                        })
                    }
                <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max} /* hidden={page === max} *//>
            </div>
        </div>
        
    )
}

export default Projects;