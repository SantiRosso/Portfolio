import s from "./Technologies.module.css";
import cloudinary from "../../assets/cloudinarypng.png";
import emailJs from "../../assets/emailJS.png";
import nodemailer from "../../assets/nodemailer.png";
import chakra from "../../assets/chakra.png";
import typeorm from "../../assets/typeorm.png";

const front = [{name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
{name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}, 
{name: "Javascript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
{name: "Typescript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
{name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"},
{name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
{name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
{name: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
{name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
{name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
{name: "Chakra UI", img: chakra}]
// {name: "MUI", img: }
// {name: "React Native", img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", style={{backgroundColor: "#1E1E1E", borderRadius: "40%"}}
// {name: Flutter, img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"}

const back = [{name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
{name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
{name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"},
{name: "Sequelize", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"},
{name: "MongoDB/Mongoose", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
{name: "NestJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"},
{name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
{name: "TypeORM", img: typeorm},]
//{name: GoogleCloud, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"}

const otras = [{name: "NPM", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"},
{name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
{name: "Github", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
{name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
{name: "Cloudinary", img: cloudinary},
{name: "Chart.js", img: "https://www.chartjs.org/media/logo-title.svg"},
{name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"},
{name: "EmailJs", img: emailJs},
{name: "Nodemailer", img: nodemailer},
{name: "Trello", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"},]
//{name: "Insomnia", img: }
//{name: "Babel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"}
//{name: "Webpack", img: ""https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg""}
//{name: "Andriod Studio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"}
//{name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}

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
                        {
                            front.map((tech) => {
                                return(
                                    <div className={s.tooltipContainer}>
                                        <span className={s.tooltipText}>{tech.name}</span>
                                        <img className={s.img} src={tech.img} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1>Back</h1>
                    </div>
                    <div className={s.subDiv}>
                        {
                            back.map((tech) => {
                                return(
                                    <div className={s.tooltipContainer}>
                                        <span className={s.tooltipText}>{tech.name}</span>
                                        <img className={s.img} src={tech.img} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1>Otras</h1>
                    </div>
                    <div className={s.subDiv}>
                        {
                            otras.map((tech) => {
                                return(
                                    <div className={s.tooltipContainer}>
                                        <span className={s.tooltipText}>{tech.name}</span>
                                        <img className={s.img} src={tech.img} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies