import s from "./About.module.css";

const About = () => {
    return(
        <div className={s.container}>
            <div className={s.title}>
                <h1 className={s.h1}>Santiago Rosso</h1>
                <h3 className={s.h3}>Full stack developer</h3>
            </div>
            <div>
                <p>Hola! Soy Santiago Rosso, egresado de la carrera de Desarrollo Web Full Stack en la academia Soy Henry y apasionado por la tecnología.</p>
                <p>Soy un desarrollador con experiencia teórica y práctica, realizando proyectos, siendo teacher assistant, manejando a un grupo y absorbiendo todo lo posible, con muchas ganas de seguir aprendiendo y seguir formándome profesionalmente!</p>
                <p>Tengo capacidades y habilidades que fui puliendo a lo largo de este proceso como liderazgo, manejo de grupo, colaboración, trabajo de equipo, comunicación, organización, entre otras.</p>
            </div>
        </div>
    )
}

export default About;
