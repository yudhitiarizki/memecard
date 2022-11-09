import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    comments: [
      {
        card_id: "1",
        comment_id: "1",
        name: 'userX01',
        comment: 'Hahahaha!!!!'
      },
    ],
  };

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addcomment: (state, action) => {
        return{
            comments: [...state.comments, {
              card_id: action.payload.card_id,
              comment_id: action.payload.comment_id,
              name: action.payload.name,
              comment: action.payload.comment
            }],
        }
    },

    deletecomment: (state, action) => {
        return {
            ...state,
            cards: state.cards.filter((card) => card.id !== action.payload),
        }
    },

    editcomment: (state, action) => {
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
    }
  },
});

export const { addcomment, deletecomment, editcomment} = commentsSlice.actions;
export default commentsSlice.reducer;