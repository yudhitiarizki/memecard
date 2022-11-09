// Diubah ke versi Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import cards from "../modules/cardsSlices";
import commentsSlices from "../modules/commentsSlices";

const store = configureStore({
  reducer: { cards : cards, comments: commentsSlices },
});

export default store;