import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjectById } from "../../redux/actions";
//styles
import s from "./NavBar2.module.css";

const NavBar2 = () => {

    const id = useParams().id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const project = useSelector((state) => state.project)

    useEffect(()=> {
        if(!project){
            dispatch(getProjectById(id));
        }
    })

    console.log(project)

    const handleClick = () => {
        navigate("/")
    }

    return(
        <div className={s.container}>
            <div className={s.title}>
                <span onClick={handleClick}>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                <a className={s.link} href="#" target="blanck"><span className={s.span}>Link del proyecto</span></a>
            </div>
        </div>
    )
}

export default NavBar2;