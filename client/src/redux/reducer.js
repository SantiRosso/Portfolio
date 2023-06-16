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
      description: "asd",
      technologies: ["asd"],
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
      description: "asd",
      technologies: ["asd"],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermin Solaberrieta", github: "fermin234" },
        { name: "Joaquin Díaz", github: "diazjoaquin" },
        { name: "German Golder", github: "ggolder22" },
        { name: "Benjamin Gagnolo", github: "BenjaminGagnolo" },
        { name: "Bianca", github: "siasktv" },
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
      technologies: ["asd"],
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
      technologies: ["asd"],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermin Solaberrieta", github: "fermin234" },
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
      technologies: ["asd"],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermin Solaberrieta", github: "fermin234" },
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
      technologies: ["asd"],
      creators: [
        { name: "Santiago Rosso", github: "SantiRosso" },
        { name: "Franco Rantucho", github: "Fran3003" },
        { name: "Fermin Solaberrieta", github: "fermin234" },
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
    //   technologies: ["asd"],
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
    //   technologies: ["asd"],
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
    //   technologies: ["asd"],
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
    //   technologies: ["asd"],
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
    //   technologies: ["asd"],
    //   creators: [{ name: "Santiago Rosso", github: "SantiRosso" }, { name: "Lucas Camacho", github: "Lucascserrate"}],
    // },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
