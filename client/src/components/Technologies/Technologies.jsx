import s from "./Technologies.module.css";
import cloudinary from "../../assets/cloudinarypng.png";
import emailJs from "../../assets/emailJS.png";
import nodemailer from "../../assets/nodemailer.png";
import chakra from "../../assets/chakra.png";
import typeorm from "../../assets/typeorm.png";


const Technologies = () => {
    return(
        <div className={s.container2} id="technologies">
            <div>
                <h1>Tecnologías</h1>
            </div>
            <div className={s.container}>
                <div className={s.technologies}>
                    <div>
                        <h1>Front</h1>
                    </div>
                    <div className={s.subDiv}>
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
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Typescript</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>React</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Redux</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        </div>
                        
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Next.js</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Angular</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Bootstrap</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Tailwind</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Chakra UI</span>
                            <img className={s.img} src={chakra} />
                        </div>
                        {/* <span>MUI</span> */}
                        {/* <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>React Native</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  style={{backgroundColor: "#1E1E1E", borderRadius: "40%"}} />
                        </div> */}
                        {/* <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" /> */}
                    </div>
                    <div>
                        <h1>Back</h1>
                    </div>
                    <div className={s.subDiv}>
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
                            <span className={s.tooltipText}>NestJS</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>MySQL</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>TypeORM</span>
                            <img className={s.img} src={typeorm} />
                        </div>
                        {/* TypeORM */}
                        {/* <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" /> */}
                    </div>
                    <div>
                        <h1>Otras</h1>
                    </div>
                    <div className={s.subDiv}>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>NPM</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Git</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Github</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Firebase</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Cloudinary</span>
                            <img className={s.img} src={cloudinary} />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Chart.js</span>
                            <img className={s.img} src="https://www.chartjs.org/media/logo-title.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Postman</span>
                            <img className={s.img} src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>EmailJs</span>
                            <img className={s.img} src={emailJs} />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Nodemailer</span>
                            <img className={s.img} src={nodemailer} />
                        </div>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Trello</span>
                            <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
                        </div>
                        {/* <span>Insomnia</span> */}
                        {/* <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" /> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" /> */}
                        {/* <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" /> */}
                        {/* <img className={s.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /> */}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Technologies;