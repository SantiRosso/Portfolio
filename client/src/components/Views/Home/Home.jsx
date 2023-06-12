//components
import About from "../../About/About";
import NavBar from "../../NavBar/NavBar";
//styles
import s from "./Home.module.css";

const Home = () => {
    return(
        <div className={s.container}>
            <NavBar/>
            <About/>
            {/* <Technologies/> */}
            {/* <Projects/> */}
            {/* <Contact/> */}
        </div>
    )
}

export default Home;