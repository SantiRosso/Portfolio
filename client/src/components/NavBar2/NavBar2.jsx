import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjectById, cleanState } from "../../redux/actions";
//styles
import s from "./NavBar2.module.css";

const NavBar2 = () => {

    const id = useParams().id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const project = useSelector((state) => state.project)

    useEffect(()=> {
        if(!project.length){
            dispatch(getProjectById(id));
        }
        return () =>{
         dispatch(cleanState())
        }   
    }, [id])

    const handleClick = () => {
        navigate("/")
    }

    return(
        <div className={s.container}>
            <div className={s.title}>
                <span onClick={handleClick}>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                <div className={s.tooltipContainer}>
                    <span className={s.tooltipText}>Es posible que el deploy del proyecto se encuentre caído</span>
                    <a className={s.link} href={project[0]?.deploy} target="blanck"><span className={s.span}>Link del proyecto</span></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar2;