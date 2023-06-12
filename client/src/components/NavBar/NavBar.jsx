import s from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={s.container}>
            <div>
                <h1>Santiago Rosso</h1>
            </div>
            <div className={s.content}>
                <h1>About</h1>
                <h1>Technologies</h1>
                <h1>Projects</h1>
                <h1>Contact</h1>
            </div>
        </div>
    )
}

export default NavBar;