//components
import About from "../../About/About";
import NavBar from "../../NavBar/NavBar";
import Projects from "../../Projects/Projects";
//styles
import s from "./Home.module.css";
//images
import programador from "./programador.png";

const Home = () => {
    return(
        <div className={s.container}>
            <NavBar/>
            <div className={s.about}>
                <img className={s.img} src={programador} alt="Imagen de programador" />
                <About/>
            </div>
            
            {/* <Technologies/> */}
            <Projects/>
            {/* <Contact/> */}
        </div>
    )
}

export default Home;