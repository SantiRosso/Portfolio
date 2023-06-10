import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

const LandingPage = () => {
    return(
        <div className={s.container}>
            <h1>Santiago Rosso</h1>
            <Link to="/home">
                <p>Portfolio</p>
            </Link>
        </div>
    )
}

export default LandingPage;