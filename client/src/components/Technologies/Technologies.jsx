import s from "./Technologies.module.css";

const Technologies = () => {
    return(
        <div className={s.container2} id="technologies">
            <div>
                <h1>Tecnologías</h1>
            </div>
            <div className={s.container}>
                <div className={s.technologies}>
                    <div className={s.subDiv}>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Git</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Github</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>HTML</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>CSS</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        </div>    
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Javascript</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        </div>
                        {/* <span>Typescript</span> */}
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>React</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Redux</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Node.js</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Express</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>PostgreSQL</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Sequelize</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                        </div>    
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>MongoDB/Mongoose</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>React Native</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  style={{backgroundColor: "#1E1E1E", borderRadius: "40%"}} />
                        </div>
                    </div>
                    <div className={s.subDiv}>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Next.js</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Firebase</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        </div>
                        {/* <span>Cloudinary</span> */}
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Bootstrap</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Tailwind</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        </div>
                        {/* <span>Chakra</span> */}
                        {/* <span>MUI</span> */}
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Chart.js</span>
                            <img className={s.img} src="https://www.chartjs.org/media/logo-title.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Postman</span>
                            <img className={s.img} src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                        </div>
                        {/* <span>Insomnia</span> */}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Technologies;