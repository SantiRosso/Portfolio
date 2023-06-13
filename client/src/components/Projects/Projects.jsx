import { useState } from "react";
//components
import Button from "../Button/Button";
//styles
import s from "./Projects.module.css";
//icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"


const Projects = () => {

    /* //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(4);
    let max = Math.ceil(projects.length - perPage + 1 / perPage)

    const nextPage = () => {
        setPage (page +1)
    }

    const previousPage = () => {
        setPage (page -1)
    } */

    return(
        <div className={s.container}>
            <div>
                <h1>Proyectos</h1>
            </div>
            <div className={s.carrousel}>
                <Button icon={<TfiAngleLeft/>} /* click={previousPage} disabled={page === 1} */ /* hidden={page === 1} *//>
                    {/* {
                        projects.slice(page - 1, (page - 1) + perPage).map((e) => {
                            return(
                                <HomeCard name={e.name} image={e.image} route={e.route} onClick={e.onClick}/>
                            )
                        })
                    } */}
                <Button icon={<TfiAngleRight/>} /* click={nextPage} disabled={page === max} */ /* hidden={page === max} *//>
            </div>
        </div>
        
    )
}

export default Projects;