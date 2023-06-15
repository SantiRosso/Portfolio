//components
import About from "../../About/About";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Projects from "../../Projects/Projects";
import Technologies from "../../Technologies/Technologies";
import Education from "../../Education/Education";
import Contact from "../../Contact/Contact";
import row from "../../../assets/row.png"

//styles
import s from "./Home.module.css";
//images
import programador from "./programador.png";

const Home = () => {

    const handleClickRow = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }


    return(
        <div className={s.container}>
            <NavBar/>
            <div className={s.about}>
                <img className={s.img} src={programador} alt="Imagen de programador" />
                <About/>
            </div>
            <Projects/>
            <Technologies/>
            <Education/>
            <Contact/>
            <div >
                <img className={s.row} src={row} alt="flecha" onClick={handleClickRow}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;