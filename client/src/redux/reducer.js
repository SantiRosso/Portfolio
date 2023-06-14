const initialState = {
  projects: [
    {
      name: "Videogames",
      img: "asd",
      id: 1,
    },
    {
      name: "EasyLearning",
      img: "asd",
      id: 2,
    },
    {
      name: "Pokedex",
      img: "asd",
      id: 3,
    },
    {
      name: "Formulario: Coaching Empleo y Capacitación",
      img: "asd",
      id: 4,
    },
    {
      name: "Sinergia ONG",
      img: "asd",
      id: 5,
    },
    {
      name: "Inmobiliaria Martinez",
      img: "asd",
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
