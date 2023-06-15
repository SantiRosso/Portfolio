//styles
import s from "./Education.module.css";
//images
import henry from "./henry.png";


const Education = () => {
    return(
        <div className={s.container2} id="education">
            <div>
                <h1>Educación</h1>
            </div>
            <div className={s.education}>
                <div className={s.container} >
                    <div className={s.title}>
                        <h1 className={s.h1}>Henry Bootcamp</h1>
                        <h2 className={s.h1}>Buenos Aires, Argentina.</h2>
                        <h3 className={s.h3}>agosto 2022 - enero 2023</h3>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Click para ver el certificado</span>
                            <a href="https://certificates.soyhenry.com/cert?id=4424eef6-4057-4582-ad49-5a7d187a80f5" target="blank"><img src={henry} alt="soyHenry" style={{height:"5vh", width: "15vw", boxShadow: "0px 0px 4px 2px #69b4ff", padding: "5px"}}/></a>
                        </div>
                    </div>
                    <div>
                        <p>Curso intensivo de desarrollo web full stack.</p>
                        <p>+700 horas de cursado teórico-práctico.</p>
                        <p>Tecnologías: Node.js, Javascript, HTML, CSS, React, Redux, Express, PostgreSQL, Sequelize, Git y Github.</p>
                    </div>
                </div>
                <div className={s.container} >
                    <div className={s.title}>
                        <h1 className={s.h1}>Full Stack Teaching Assistant</h1>
                        <h2 className={s.h1}>Henry Bootcamp, Buenos Aires, Argentina.</h2>
                        <h3 className={s.h3}>nov. 2022 - ene. 2023</h3>
                        <div className={s.tooltipContainer}>
                            <span className={s.tooltipText}>Click para ver el certificado</span>
                            <a href="https://drive.google.com/file/d/16rdHpTT-isSec6OmCh17I6naXkSlyZe5/view" target="blank"><img src={henry} alt="soyHenry" style={{height:"5vh", width: "15vw", boxShadow: "0px 0px 4px 2px #69b4ff", padding: "5px"}}/></a>
                        </div>
                    </div>
                    <div>
                        <p>Coordinar a un grupo de estudiantes para lograr la integración al equipo de estudio.</p>
                        <p>Asistir a la resolución de ejercicios y promover la colaboración grupal (Pair Programming).</p>
                        <p>Proponer ideas para la mejora de los procesos del Bootcamp.</p>
                        <p>Distinguido con una medalla de líder, por motivar e inspirar al resto.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const Education = () => {
//         return(
//             <div className={s.container2} id="education">
//                 <div>
//                     <h1>Educación</h1>
//                 </div>
//                     <div className={s.container} >
//                         <div className={s.title}>
//                             <h1 className={s.h1}>Henry Bootcamp</h1>
//                             <h2 className={s.h1}>Buenos Aires, Argentina.</h2>
//                             <h3 className={s.h3}>agosto 2022 - enero 2023</h3>
//                             <div className={s.tooltipContainer}>
//                                 <span className={s.tooltipText}>Click para ver el certificado</span>
//                                 <a href="https://certificates.soyhenry.com/cert?id=4424eef6-4057-4582-ad49-5a7d187a80f5" target="blank"><img src={henry} alt="soyHenry" style={{height:"5vh", width: "15vw"}}/></a>
//                             </div>
//                         </div>
//                         <div>
//                             <p>Curso intensivo de desarrollo web full stack. +700 horas de cursado teórico-práctico.</p>
//                             <p>Tecnologías: Node.js, Javascript, HTML, CSS, React, Redux, Express, PostgreSQL, Sequelize, Git y Github.</p>
//                         </div>
//                     </div>
//                 </div>
//         )
//     }

export default Education;