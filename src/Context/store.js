import { configureStore } from "@reduxjs/toolkit";
import ViewSlice from "./ViewSlice";
import DB_Slice from "./DB_Slice";

export default configureStore({
  reducer: {
    view: ViewSlice,
    movie: DB_Slice,
  },
});
