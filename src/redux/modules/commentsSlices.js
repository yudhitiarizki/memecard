import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  comments: [
    {
      card_id: "1",
      comment_id: "1",
      name: "userX01",
      comment: "Hahahaha!!!!"
    },
  ],
  comment: [
    {
      card_id: "1",
      comment_id: "1",
      name: "",
      comment: ""
    }
  ]
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addcomment: (state, action) => {
      return {
        ...state,
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
        comments: state.comments.filter((comment) => (comment.comment_id !== action.payload)),
      }
    },

    editcomment: (state, action) => {
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.card_id === action.payload.card_id && comment.comment_id === action.payload.comment_id) {
            return {
              ...comment,
              comment: action.payload.comment,
            };
          } else {
            return comment;
          }
        }),
      }
    },

    getcommentByID: (state, action) => {
      return {
        ...state,
        comment: state.comments.find((comment) => {
          return comment.comment_id === action.payload
        }),
      }
    },
  },
});

export const { addcomment, deletecomment, editcomment, getcommentByID } = commentsSlice.actions;
export default commentsSlice.reducer;