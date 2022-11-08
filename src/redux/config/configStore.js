// Diubah ke versi Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import cards from "../modules/cardsSlices";

const store = configureStore({
  reducer: { cards : cards },
});

export default store;