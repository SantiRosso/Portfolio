import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//components
import NavBar2 from "../../NavBar2/NavBar2";
import Button from "../../Button/Button";
import Contact from "../../Contact/Contact";
//style
import s from "./ProjectDetail.module.css";
import "./imgActive.css";
//icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"

const ProjectDetail = () => {

    const width = window.innerWidth
    const id = useParams().id;
    const projects = useSelector((state) => state.projects);
    const project = projects?.filter((e) => e.id == id)

    const [image, setImage] = useState(
        {
            image: project[0].images[0].img,
            id: project[0].images[0].id
        }
    )

    const handleClick = (e) => {
        setImage({image: e.target.src, id: e.target.id})
    }

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(width > 800 ? 3 : 2);
    let max = Math.ceil(project[0].images.length - perPage + 1 / perPage)

    const nextPage = () => {
        setPage (page +1)
    }

    const previousPage = () => {
        setPage (page -1)
    }

    return(
        <div>
            <div className={s.container}>
                <NavBar2/>
                <div className={s.info}>
                    <h1>{project[0].name}</h1>
                    <a href={project[0]?.repository} target="blanck" style={{textDecoration: "none", color: "#69b4ff"}}>Repositorio del proyecto</a>
                    <p className={s.p}>{project[0].description}</p>
                    <h3>Creadores:</h3>
                    <div className={s.creators}>
                        {
                            project[0]?.creators?.map((e, i) => {
                                return(
                                    <div key={i} className={s.creator}>
                                        <h6>{e.name}</h6>
                                        <a href={`https://github.com/${e.github}`} target="blanck" style={{textDecoration: "none", color: "#69b4ff"}}>Github</a>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    <div className={s.technologies}>
                        {
                           project[0]?.technologies?.map((e) => {
                            return(
                                <img src={e} alt="ícono de la tecnología" className={s.technology}/>
                            )
                           }) 
                        }
                    </div>
                </div>
                <div className={s.carrouselContainer}>
                    <div className={s.divSelectedImage}>
                        <img src={image.image} alt="Imagen seleccionada" className={s.selectedImage}/>
                    </div>
                    <div className={s.carrousel}>
                        <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1} /* hidden={page === 1} *//>
                        {
                            project[0].images.slice(page - 1, (page - 1) + perPage).map((e) => {
                                return(
                                    <div className={s.tooltipContainer}>
                                        <span className={s.tooltipText}>{e.description}</span>
                                        <img className={e.id == image?.id ? "imgActive" : "img"} id={e.id} src={e.img} alt="Imagen del proyecto" onClick={handleClick}/>
                                    </div>
                                )
                            })
                        }
                        <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max} /* hidden={page === max} *//>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
        
    )
}

export default ProjectDetail;