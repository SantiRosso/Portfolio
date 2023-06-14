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
      name: "Inmobiliaria",
      img: "asd",
      id: 5,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
