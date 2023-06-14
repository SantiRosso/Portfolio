import s from "./Technologies.module.css";

const Technologies = () => {
    return(
        <div className={s.container}>
            <div>
                <h1>Tecnologías</h1>
            </div>
            <div>
                <span>React</span>
                <span>Javascript</span>
                <span>MongoDB</span>
                <span>Tailwind</span>
            </div>
        </div>
    )
}

export default Technologies;