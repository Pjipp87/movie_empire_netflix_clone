import { configureStore } from "@reduxjs/toolkit";
import ViewSlice from "./ViewSlice";

export default configureStore({
  reducer: {
    view: ViewSlice,
  },
});
