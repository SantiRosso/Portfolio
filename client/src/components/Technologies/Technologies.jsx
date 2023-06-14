import s from "./Technologies.module.css";

const Technologies = () => {
    return(
        <div className={s.container}>
            <div>
                <h1>Tecnologías</h1>
            </div>
            <div className={s.technologies}>
                {/* <span>Git y Github</span> */}
                <div className={s.tooltipContainer}>
                    <span className={s.tooltipText}>Github</span>
                    <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </div>
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                {/* <span>HTML</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                {/* <span>CSS</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                {/* <span>Javascript</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                {/* <span>React</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                {/* <span>Redux</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                {/* <span>Node.js</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                {/* <span>Express</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                {/* <span>PostgreSQL</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
                {/* <span>Sequelize</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                {/* <span>MongoDB y Mongoose</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                {/* <span>Firebase</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                {/* <span>Cloudinary</span> */}
                {/* <span>Bootstrap</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                {/* <span>Chakra</span> */}
                {/* <span>Tailwind</span> */}
                <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                {/* <span>Postman</span> */}
                {/* <span>Insomnia</span> */}
            </div>
        </div>
    )
}

export default Technologies;