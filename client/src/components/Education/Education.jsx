//styles
import s from "./Education.module.css";
//images
import henry from "./henry.png";


// const Education = () => {
//     return(
//         <div className={s.container2} id="education">
//             <div>
//                 <h1>Educación</h1>
//             </div>
//             <div className={s.education}>
//                 <div className={s.container} >
//                     <div className={s.title}>
//                         <h1 className={s.h1}>Henry Bootcamp, Buenos Aires, Argentina.</h1>
//                         <h3 className={s.h3}>agosto 2022 - enero 2023</h3>
//                     </div>
//                     <div>
//                         <p>Curso intensivo de desarrollo web full stack. +700 horas de cursado teórico-práctico.</p>
//                         <p>Tecnologías: Node.js, Javascript, HTML, CSS, React, Redux, Express, PostgreSQL, Sequelize, Git y Github.</p>
//                     </div>
//                 </div>
//                 <div className={s.container} >
//                     <div className={s.title}>
//                         <h1 className={s.h1}>Henry Bootcamp, Buenos Aires, Argentina.</h1>
//                         <h3 className={s.h3}>agosto 2022 - enero 2023</h3>
//                     </div>
//                     <div>
//                         <p>Curso intensivo de desarrollo web full stack. +700 horas de cursado teórico-práctico.</p>
//                         <p>Tecnologías: Node.js, Javascript, HTML, CSS, React, Redux, Express, PostgreSQL, Sequelize, Git y Github.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Education = () => {
        return(
            <div className={s.container2} id="education">
                <div>
                    <h1>Educación</h1>
                </div>
                    <div className={s.container} >
                        <div className={s.title}>
                            <h1 className={s.h1}>Henry Bootcamp</h1>
                            <h2 className={s.h1}>Buenos Aires, Argentina.</h2>
                            <h3 className={s.h3}>agosto 2022 - enero 2023</h3>
                            <img src={henry} alt="soyHenry" style={{height:"5vh", width: "15vw"}}/>
                        </div>
                        <div>
                            <p>Curso intensivo de desarrollo web full stack. +700 horas de cursado teórico-práctico.</p>
                            <p>Tecnologías: Node.js, Javascript, HTML, CSS, React, Redux, Express, PostgreSQL, Sequelize, Git y Github.</p>
                        </div>
                    </div>
                </div>
        )
    }

export default Education;