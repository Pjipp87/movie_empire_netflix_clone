import { createSlice } from "@reduxjs/toolkit";
import { Startpage } from "../Screens/Startpage";

export const viewSlice = createSlice({
  name: "view",
  initialState: {
    value: <Startpage />,
  },
  reducers: {
    changeView: (state, payload) => {
      console.log(payload.payload);
      //state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeView } = viewSlice.actions;

export default viewSlice.reducer;
