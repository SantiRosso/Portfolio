import videojuego1 from "../assets/images/videogames1.jpg";
import videojuego2 from "../assets/images/videogames2.jpeg";
import videojuego3 from "../assets/images/videogames3.jpeg";
import videojuego4 from "../assets/images/videogames4.jpeg";
import videojuego5 from "../assets/images/videogames5.jpeg";

const initialState = {
  projects: [
    {
      name: "Videogames",
      img: [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5],
      id: 1,
    },
    {
      name: "EasyLearning",
      img: [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5],
      id: 2,
    },
    {
      name: "Pokedex",
      img: [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5],
      id: 3,
    },
    {
      name: "Formulario: Coaching Empleo y Capacitación",
      img: [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5],
      id: 4,
    },
    {
      name: "Sinergia ONG",
      img: [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5],
      id: 5,
    },
    {
      name: "Inmobiliaria Martinez",
      img: [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5],
      id: 6,
    },
    // {
    //   name: "PokeCards",
    //   img: "asd",
    //   id: 0,
    // },
    // {
    //   name: "Achebeo",
    //   img: "asd",
    //   id: 0,
    // },
    // {
    //   name: "Turnero",
    //   img: "asd",
    //   id: 0,
    // },
    // {
    //   name: "ToDo",
    //   img: "asd",
    //   id: 0,
    // },
    // {
    //   name: "MovieLabs",
    //   img: "asd",
    //   id: 0,
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
