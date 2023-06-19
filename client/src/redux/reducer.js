import { GET_PROJECT_BY_ID, CLEAN_STATE } from "./actions.js";

import videojuego1 from "../assets/images/videogames1.jpg";
import videojuego2 from "../assets/images/videogames2.jpeg";
import videojuego3 from "../assets/images/videogames3.jpeg";
import videojuego4 from "../assets/images/videogames4.jpeg";
import videojuego5 from "../assets/images/videogames5.jpeg";

const initialState = {
  projects: [
    {
      name: "Videogames",
      images: [
        { img: videojuego1, id: 1 },
        { img: videojuego2, id: 2 },
        { img: videojuego3, id: 3 },
        { img: videojuego4, id: 4 },
        { img: videojuego5, id: 5 },
      ],
      id: 1,
      description: "Desarrollo individual de una API REST en Node.js.",
      repository: "https://github.com/SantiRosso/PI-Videogames",
      deploy: "https://pi-videogames-pied.vercel.app/videogames",
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
        { img: videojuego1, id: 1 },
        { img: videojuego2, id: 2 },
        { img: videojuego3, id: 3 },
        { img: videojuego4, id: 4 },
        { img: videojuego5, id: 5 },
      ],
      id: 2,
      description:
        "Desarrollo grupal de una API REST en Node.js bajo la metogología SCRUM con un equipo de 7 devs y 1 lider técnico y una duración de 4 semanas.",
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
        "https://www.chartjs.org/media/logo-title.svg" /* "Chakra" */ /* "Render/Vercel" */ /* "axios" */ /*Paypal-MercadoPago*/ /* bcryptjs */,
        ,
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
        { img: videojuego1, id: 1 },
        { img: videojuego2, id: 2 },
        { img: videojuego3, id: 3 },
        { img: videojuego4, id: 4 },
        { img: videojuego5, id: 5 },
      ],
      id: 3,
      description: "asd",
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
        { img: videojuego1, id: 1 },
        { img: videojuego2, id: 2 },
        { img: videojuego3, id: 3 },
        { img: videojuego4, id: 4 },
        { img: videojuego5, id: 5 },
      ],
      id: 4,
      description: "asd",
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
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /* "toastify" */ /* "Vercel" */ /* "emailjs" */,
        ,
      ],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermín Solaberrieta", github: "fermin234" },
        { name: "Paul Esperon", github: "PaulBlack91" },
      ],
    },
    {
      name: "Sinergia ONG",
      images: [
        { img: videojuego1, id: 1 },
        { img: videojuego2, id: 2 },
        { img: videojuego3, id: 3 },
        { img: videojuego4, id: 4 },
        { img: videojuego5, id: 5 },
      ],
      id: 5,
      description: "asd",
      repository: "https://github.com/GroupFiveDev/Sinergia-ONG",
      deploy: "",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /* "ReactIcons", */ /* "Vercel", */,
      ],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermín Solaberrieta", github: "fermin234" },
        ,
      ],
    },
    {
      name: "Inmobiliaria Martinez",
      images: [
        { img: videojuego1, id: 1 },
        { img: videojuego2, id: 2 },
        { img: videojuego3, id: 3 },
        { img: videojuego4, id: 4 },
        { img: videojuego5, id: 5 },
      ],
      id: 6,
      description: "asd",
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
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" /* "ractIcons", */ /* "hostinger", */ /* Multer y Cloudinary */,
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
    //      { img: videojuego1, id: 1 },
    //      { img: videojuego2, id: 2 },
    //      { img: videojuego3, id: 3 },
    //      { img: videojuego4, id: 4 },
    //      { img: videojuego5, id: 5 },
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
    //      { img: videojuego1, id: 1 },
    //      { img: videojuego2, id: 2 },
    //      { img: videojuego3, id: 3 },
    //      { img: videojuego4, id: 4 },
    //      { img: videojuego5, id: 5 },
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
    //      { img: videojuego1, id: 1 },
    //      { img: videojuego2, id: 2 },
    //      { img: videojuego3, id: 3 },
    //      { img: videojuego4, id: 4 },
    //      { img: videojuego5, id: 5 },
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
    //      { img: videojuego1, id: 1 },
    //      { img: videojuego2, id: 2 },
    //      { img: videojuego3, id: 3 },
    //      { img: videojuego4, id: 4 },
    //      { img: videojuego5, id: 5 },
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
    //      { img: videojuego1, id: 1 },
    //      { img: videojuego2, id: 2 },
    //      { img: videojuego3, id: 3 },
    //      { img: videojuego4, id: 4 },
    //      { img: videojuego5, id: 5 },
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
