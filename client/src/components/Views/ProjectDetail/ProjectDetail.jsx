import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//components
import NavBar2 from "../../NavBar2/NavBar2";
import Button from "../../Button/Button";
import Footer from "../../Footer/Footer";
//style
import s from "./ProjectDetail.module.css";
import "./imgActive.css";
//icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"

const ProjectDetail = () => {

    const id = useParams().id;
    const projects = useSelector((state) => state.projects);
    const project = projects?.filter((e) => e.id == id)

    const [image, setImage] = useState({image: project[0].images[0].img, id:project[0].images[0].id })

    // useEffect(()=> {
    //     console.log(image)
    // },[image])

    const handleClick = (e) => {
        console.log("tttt", e.target.src)
        setImage({image:e.target.src, id:e.target.id})
    }

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(3);
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
                <h1>{project[0].name}</h1>
                <p>{project[0].description}</p>
                <h3>Creadores:</h3>
                <div>
                    {
                        project[0].creators.map((e) => {
                            return(
                                <div>
                                    <h6>{e.name}</h6>
                                    <a href={`https://github.com/${e.github}`} target="blanck">Github</a>
                                </div>
                                )
                        })
                    }
                </div>
                <div className={s.carrouselContainer}>
                    <div className={s.divSelectedImage}>
                        <img src={image.image} alt="Imagen seleccionada" className={s.selectedImage}/>
                    </div>
                    <div className={s.carrousel}>
                        <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1} /* hidden={page === 1} *//>
                        {
                            project[0].images.slice(page - 1, (page - 1) + perPage).map((e) => {
                                console.log("asdasd",e.img)
                                return(
                                    <img className={e.id == image?.id ? "imgActive" : "img"} id={e.id} src={e.img} alt="Imagen del proyecto" onClick={handleClick}/>
                                )
                            })
                        }
                        <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max} /* hidden={page === max} *//>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default ProjectDetail;

//     return(
//         <div className={s.container} id="projects">
//             <div>
//                 <h1>Proyectos</h1>
//             </div>
//             <div className={s.carrousel}>
//                 <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1} /* hidden={page === 1} *//>
//                     {
//                         projects.slice(page - 1, (page - 1) + perPage).map((e) => {
//                             return(
//                                 <ProjectCard name={e.name} img={e.img[0]} id={e.id}/>
//                             )
//                         })
//                     }
//                 <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max} /* hidden={page === max} *//>
//             </div>
//         </div>
//     )