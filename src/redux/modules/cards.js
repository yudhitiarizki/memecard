// Action value
const ADD_CARD = "ADD_CARD";
const GET_CARD_BY_ID = "GET_CARD_BY_ID";
const DELETE_CARD = "DELETE_CARD";
const TOGGLE_STATUS_CARD = "TOGGLE_STATUS_CARD";

export const addcard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const deletecard = (payload) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};

export const toggleStatuscard = (payload) => {
  return {
    type: TOGGLE_STATUS_CARD,
    payload,
  };
};

export const getcardByID = (payload) => {
  return {
    type: GET_CARD_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  cards: [
    {
      id: "1",
      title: "Coba aja",
      imagelink: "https://images-cdn.9gag.com/photo/aQX6YeK_700b.jpg",
      category: 'Yudhit',
      description: "lorem ipsum sadaoidoa assdaidias asduashsdhida",
    },
  ],
  card: {
    id: "0",
    title: "",
    imagelink: "",
    category: '',
    description: "",
  },
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case TOGGLE_STATUS_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload) {
            return {
              ...card,
              isDone: !card.isDone,
            };
          } else {
            return card;
          }
        }),
      };

      case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };


    case GET_CARD_BY_ID:
      return {
        ...state,
        card: state.cards.find((card) => {
          return card.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cards;
