import { GET_PROJECT_BY_ID, CLEAN_STATE } from "./actions.js";

//project images
import videojuego1 from "../assets/images/videogames1.jpg";
import videojuego2 from "../assets/images/videogames2.jpeg";
import videojuego3 from "../assets/images/videogames3.jpeg";
import videojuego4 from "../assets/images/videogames4.jpeg";
import videojuego5 from "../assets/images/videogames5.jpeg";
import EasyLearning1 from "../assets/images/EasyLearning1.jpg";
import EasyLearning2 from "../assets/images/EasyLearning2.jpg";
import EasyLearning3 from "../assets/images/EasyLearning3.jpg";
import EasyLearning4 from "../assets/images/EasyLearning4.jpg";
import EasyLearning5 from "../assets/images/EasyLearning5.jpg";
import EasyLearning6 from "../assets/images/EasyLearning6.jpg";
import EasyLearning7 from "../assets/images/EasyLearning7.jpg";
import Pokedex1 from "../assets/images/Pokedex1.jpg";
import Pokedex2 from "../assets/images/Pokedex2.jpg";
import Pokedex3 from "../assets/images/Pokedex3.jpg";
import Pokedex4 from "../assets/images/Pokedex4.jpg";
import Pokedex5 from "../assets/images/Pokedex5.jpg";
import Pokedex6 from "../assets/images/Pokedex6.jpg";
import FormularioCEC1 from "../assets/images/FormularioCEC1.jpg";
import FormularioCEC2 from "../assets/images/FormularioCEC2.jpg";
import FormularioCEC3 from "../assets/images/FormularioCEC3.jpg";
import FormularioCEC4 from "../assets/images/FormularioCEC4.jpg";
//icons
import cloudinary from "../assets/cloudinarypng.png";
import emailJs from "../assets/emailJS.png";
import nodemailer from "../assets/nodemailer.png";
import chakra from "../assets/chakra.png";

const initialState = {
  projects: [
    {
      name: "Videogames",
      images: [
        { img: videojuego1, id: 1, description: "Landing page" },
        { img: videojuego2, id: 2, description: "Home" },
        { img: videojuego3, id: 3, description: "Detalle del juego" },
        { img: videojuego4, id: 4, description: "Crear un juego" },
        { img: videojuego5, id: 5, description: "LogIn" },
      ],
      id: 1,
      description:
        "Desarrollo individual de una API REST en Node.js. Se trata de una página web desarrollada con React y Redux. Todos los componentes fueron creados con CSS sin uso de librerías externas. La página consume datos de una API a través de un Back End, que fue desarrollado en Node.JS con Express. La aplicación cuenta con un listado de más de 100 videojuegos con su información correspondiente detallada (imágenes, géneros, fecha de lanzamiento, etc.). Las funciones que se ofrecen para el usuario son: filtrar, ordenar, crear, editar, eliminar y/o guardar como favorito los videojuegos. También cuenta con la función de loguearse y crearse una cuenta.",
      video:
        "https://www.linkedin.com/posts/santiago-rosso-421484227_javascript-css-react-activity-7087858138422349824-an9U?utm_source=share&utm_medium=member_desktop",
      repository: "https://github.com/SantiRosso/PI-Videogames",
      deploy: "https://projectvideogames.vercel.app/",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" /* "toastify" */ /* "axios" */ /* "Render/Vercel" */,
      ],
      creators: [{ name: "Santiago Rosso", github: "SantiRosso" }],
    },
    {
      name: "EasyLearning",
      images: [
        { img: EasyLearning1, id: 1, description: "Home" },
        { img: EasyLearning2, id: 2, description: "Home" },
        { img: EasyLearning3, id: 3, description: "Home" },
        { img: EasyLearning4, id: 4, description: "SignUp" },
        { img: EasyLearning5, id: 5, description: "LogIn" },
        { img: EasyLearning6, id: 6, description: "Cursos" },
        { img: EasyLearning7, id: 7, description: "Contact" },
      ],
      id: 2,
      description:
        "Desarrollo grupal de una API REST en Node.js con metodología SCRUM, junto con otros 6 desarrolladores y un líder técnico, con una duración de 4 semanas. Se trata de una página web desarrollada con React y Redux. Utilizando librerías de estilos como Chakra.UI y Chart.js para gráficos de estadísticas (en el dashboard del admin). La página tiene un Back End, que fue desarrollado en Node.JS con Express y una base de datos en postgreSQL (Sequelize como ORM). La aplicación te da la posibilidad de comprar y vender cursos. Las funciones que se ofrecen para el usuario son: ver detalles del curso, filtrar, ordenar, crear, editar eliminar y/o guardar como favorito los cursos. También cuenta con la función de loguearse y crearse una cuenta. Las transacciones se realizan por medio de paypal y el administrador de la página cuenta con un dashboard personalizado.",
      video: "próximamente",
      repository: "",
      deploy: "https://easy-learning-414mpg2kj-fran3003.vercel.app/",
      // deploy: "https://easylearning-fp.web.app/",
      // deploy: "",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        "https://www.chartjs.org/media/logo-title.svg" /* "Render/Vercel" */ /* "axios" */ /*Paypal-MercadoPago*/ /* bcryptjs */,
        ,
        cloudinary,
        nodemailer,
        chakra,
      ],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermín Solaberrieta", github: "fermin234" },
        { name: "Joaquín Díaz", github: "diazjoaquin" },
        { name: "German Golder", github: "ggolder22" },
        { name: "Benjamín Gagnolo", github: "BenjaminGagnolo" },
        { name: "Bianca Benítez", github: "siasktv" },
      ],
    },
    {
      name: "Pokedex",
      images: [
        { img: Pokedex1, id: 1, description: "Home" },
        { img: Pokedex2, id: 2, description: "Todos los Pokemon" },
        { img: Pokedex3, id: 3, description: "Detalle de un Pokemon" },
        { img: Pokedex4, id: 4, description: "Crear un Pokemon" },
        { img: Pokedex5, id: 5, description: "LogIn" },
        { img: Pokedex6, id: 6, description: "SignUp" },
      ],
      id: 3,
      description:
        "Desarrollo individual de una API REST en Node.js. Se trata de una página web desarrollada con React y Redux. Todos los componentes fueron creados con CSS sin uso de librerías externas. La página consume datos de una API a través de un Back End, que fue desarrollado en Node.JS con Express. La aplicación cuenta con un listado de más de 151 pokemon con su información correspondiente detallada (imágenes, tipos, estadísticas, etc.). Las funciones que se ofrecen para el usuario son: filtrar, ordenar, crear, editar, eliminar y/o guardar como favorito los pokemon. También cuenta con la función de loguearse y crearse una cuenta.",
      video: "próximamente",
      repository: "https://github.com/SantiRosso/PI-Pokemon",
      deploy: "https://pi-pokemon-xi-wine.vercel.app/",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" /* "toastify" */ /* "Render/Vercel" */ /* ReactIcons */ /* axios */ /* Railwail/Vercel */,
      ],
      creators: [{ name: "Santiago Rosso", github: "SantiRosso" }],
    },
    {
      name: "Formulario: Coaching Empleo y Capacitación",
      images: [
        { img: FormularioCEC1, id: 1, description: "Datos personales" },
        { img: FormularioCEC2, id: 2, description: "Cuestionario 1" },
        { img: FormularioCEC3, id: 3, description: "Gráfica y propuestas" },
        {
          img: FormularioCEC4,
          id: 4,
          description: "Mail que le llega al usuario",
        },
        // { img: FormularioCEC5, id: 5, description: "Mail que le llega a la coach" },
      ],
      id: 4,
      description:
        "La página es un formulario automatizado de Coaching de empleo y capacitación. El usuario que busca capacitarce en busqueda de empleo, llena un formulario que tiene varias secciones como: datos personales, CV, Empleo, LinkedIn, etcetera. Luego, se da una respuesta automática con gráficas y propuestas que se podrían ofrecer en el coaching. También se envía un mail al usuario y a la licenciada encargada del coaching enviandolé dicha información.",
      video: "próximamente",
      repository:
        "https://github.com/GroupFiveDev/Formulario-Coaching-empleo-capacitacion",
      deploy: "https://formulario-taupe-nine.vercel.app/",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /* "toastify" */ /* "Vercel" */,
        emailJs,
      ],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermín Solaberrieta", github: "fermin234" },
        { name: "Paul Esperon", github: "PaulBlack91" },
      ],
    },
    // {
    //   name: "Sinergia ONG",
    //   images: [
    //     { img: videojuego1, id: 1, description: "" },
    //     { img: videojuego2, id: 2, description: "" },
    //     { img: videojuego3, id: 3, description: "" },
    //     { img: videojuego4, id: 4, description: "" },
    //     { img: videojuego5, id: 5, description: "" },
    //   ],
    //   id: 5,
    //   description: "asd",
    //   repository: "https://github.com/GroupFiveDev/Sinergia-ONG",
    //   deploy: "",
    //   technologies: [
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /* "ReactIcons", */ /* "Vercel", */,
    //   ],
    //   creators: [
    //     { name: "Santiago Rosso", github: "SantiRosso" },
    //     { name: "Franco Rantucho", github: "Fran3003" },
    //     { name: "Fermín Solaberrieta", github: "fermin234" },
    //     ,
    //   ],
    // },
    {
      name: "Inmobiliaria Martinez",
      images: [
        { img: videojuego1, id: 1, description: "" },
        { img: videojuego2, id: 2, description: "" },
        { img: videojuego3, id: 3, description: "" },
        { img: videojuego4, id: 4, description: "" },
        { img: videojuego5, id: 5, description: "" },
      ],
      id: 6,
      description:
        "Desarrollé junto a otros dos desarroladores, una plataforma completa que revoluciona la forma en que las propiedades se exploran y administran. En el frontend, combiné React y Tailwind para crear una interfaz receptiva que permite a los usuarios buscar, filtrar y ordenar propiedades según sus preferencias. Cada propiedad ofrece una página de detalle informativa, destacando imágenes de alta resolución y detalles clave. En el backend, utilicé Node.js y Express para construir una API sólida, respaldada por PostgreSQL y Sequelize para gestionar eficazmente la base de datos. Un panel de administración personalizado permite a los administradores agregar, modificar y eliminar propiedades de manera eficiente. Esta aplicación de inmobiliaria combina tecnologías modernas para ofrecer una experiencia excepcional tanto para usuarios como para el equipo interno.",
      video: "próximamente",
      repository: "https://github.com/GroupFiveDev/Martinez-Inmobiliaria-SRL",
      deploy: "https://martineznessicampos.com/",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" /* "ractIcons", */ /* "hostinger", */ /* Multer y Cloudinary */ /* google maps api*/,
        ,
      ],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermín Solaberrieta", github: "fermin234" },
        ,
      ],
    },
    // {
    //   name: "PokeCards",
    //   images: [
    //      { img: videojuego1, id: 1, description: "" },
    // { img: videojuego2, id: 2, description: "" },
    // { img: videojuego3, id: 3, description: "" },
    // { img: videojuego4, id: 4, description: "" },
    // { img: videojuego5, id: 5, description: "" },
    //    ],
    //   id: 1,
    //   description: "asd",
    //   repository: "https://github.com/SantiRosso/prueba-tecnica-pokemon",
    //   deploy: "",
    //   technologies: [],
    //   creators: [{ name: "Santiago Rosso", github: "SantiRosso" }],
    // },
    // {
    //   name: "Minimalista",
    //   images: [
    //      { img: videojuego1, id: 1, description: "" },
    // { img: videojuego2, id: 2, description: "" },
    // { img: videojuego3, id: 3, description: "" },
    // { img: videojuego4, id: 4, description: "" },
    // { img: videojuego5, id: 5, description: "" },
    //    ],
    //   id: 1,
    //   description: "asd",
    //   repository: "https://github.com/Lucascserrate/minimalista",
    //   deploy: "",
    //   technologies: [],
    //   creators: [{ name: "Santiago Rosso", github: "SantiRosso" }, { name: "Lucas Camacho", github: "Lucascserrate"}],
    // },
    // {
    //   name: "Turnero",
    //   images: [
    //      { img: videojuego1, id: 1, description: "" },
    // { img: videojuego2, id: 2, description: "" },
    // { img: videojuego3, id: 3, description: "" },
    // { img: videojuego4, id: 4, description: "" },
    // { img: videojuego5, id: 5, description: "" },
    //    ],
    //   id: 1,
    //   description: "asd",
    //   repository: "https://github.com/SantiRosso/Turnero",
    //   deploy: "",
    //   technologies: [],
    //   creators: [{ name: "Santiago Rosso", github: "SantiRosso" }],
    // },
    // {
    //   name: "ToDo"
    //   images: [
    //     { img: videojuego1, id: 1, description: "" },
    // { img: videojuego2, id: 2, description: "" },
    // { img: videojuego3, id: 3, description: "" },
    // { img: videojuego4, id: 4, description: "" },
    // { img: videojuego5, id: 5, description: "" },
    //    ],
    //   id: 1,
    //   description: "asd",
    //   repository: "https://github.com/SantiRosso/To-do",
    //   deploy: "",
    //   technologies: [],
    //   creators: [{ name: "Santiago Rosso", github: "SantiRosso" }],
    // },
    // {
    //   name: "MovieLabs",
    //   images: [
    // { img: videojuego1, id: 1, description: "" },
    // { img: videojuego2, id: 2, description: "" },
    // { img: videojuego3, id: 3, description: "" },
    // { img: videojuego4, id: 4, description: "" },
    // { img: videojuego5, id: 5, description: "" },
    //    ],
    //   id: 1,
    //   description: "asd",
    //   repository: "https://github.com/SantiRosso/ACHEBEO",
    //   deploy: "https://achebeo.vercel.app/",
    //   technologies: [],
    //   creators: [{ name: "Santiago Rosso", github: "SantiRosso" }, { name: "Lucas Camacho", github: "Lucascserrate"}],
    // },
  ],
  project: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_BY_ID:
      let proyecto = state.projects.filter((e) => e.id == action.payload);
      return {
        ...state,
        project: proyecto,
      };
    case CLEAN_STATE:
      return {
        ...state,
        project: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
