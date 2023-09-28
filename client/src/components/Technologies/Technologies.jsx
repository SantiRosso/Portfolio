import s from "./Technologies.module.css";
import { front } from "../../assets/technologies";
import { back } from "../../assets/technologies";
import { otras } from "../../assets/technologies";

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