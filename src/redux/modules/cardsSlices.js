// Ini menggantikan file "card.js" , jadi card.js bisa dihapus.

import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    cards: [
      {
        id: "1",
        title: "Coba aja",
        imagelink: "https://images-cdn.9gag.com/photo/aQX6YeK_700b.jpg",
        category: 'trap',
        description: "lorem ipsum sadaoidoa assdaidias asduashsdhida",
      },
      {
        id: "2",
        title: "Coba aja2 ",
        imagelink: "https://wallsdesk.com/wp-content/uploads/2018/03/Pictures-of-Elk.jpg",
        category: 'trap',
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

const cardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addcard: (state, action) => {
        console.log("di add card")
        return{
            ...state,
            cards: [...state.cards, action.payload],
        }
    },

    deletecard: (state, action) => {
        return {
            ...state,
            cards: state.cards.filter((card) => card.id !== action.payload),
        }
    },

    toggleStatuscard: (state, action) => {
        return{
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
        }
    },

    getcardByID: (state, action) => {
        return{
            ...state,
            card: state.cards.find((card) => {
              return card.id === action.payload;
            }),
        }
    },
  },
});

export const { addcard, deletecard, getcardByID} = cardsSlice.actions;
export default cardsSlice.reducer;