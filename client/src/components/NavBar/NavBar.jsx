import s from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={s.container}>
            <div className={s.title}>
                <span>Santiago Rosso</span>
            </div>
            <div className={s.content}>
                <span>About</span>
                <span>Technologies</span>
                <span>Projects</span>
                <span>Contact</span>
            </div>
        </div>
    )
}

export default NavBar;