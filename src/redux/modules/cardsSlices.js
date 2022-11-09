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
        description: "nggak bisa",
      },
      {
        id: "2",
        title: "Kijang 1",
        imagelink: "https://wallsdesk.com/wp-content/uploads/2018/03/Pictures-of-Elk.jpg",
        category: 'trap',
        description: "Kijang lompat",
      },
    ],
    card: {
      id: "0",
      title: "",
      imagelink: "",
      category: '',
      description: "",
    },
    filtered_cards: [
    ],
  };

const cardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addcard: (state, action) => {
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

    searchcard: (state, action) => {
        return{
          ...state,
          filtered_cards: state.cards.filter((card)=> Object.keys(card).some((title) => card[title].includes(action.payload.search))) 
        }
    },  
  },
});

export const { addcard, deletecard, getcardByID, searchcard} = cardsSlice.actions;
export default cardsSlice.reducer;