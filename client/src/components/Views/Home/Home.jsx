//components
import About from "../../About/About";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Projects from "../../Projects/Projects";
import Technologies from "../../Technologies/Technologies";
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
            <Projects/>
            <Technologies/>
            {/* <Education/> */}
            {/* <Contact/> */}
            <Footer/>
        </div>
    )
}

export default Home;