import { createSlice } from "@reduxjs/toolkit";

export const MyListSlice = createSlice({
  name: "myList",
  initialState: {
    content: [],
  },
  reducers: {
    addToList: (state, action) => {
      // TODO: funktion zum hinzuügen anpassen. Keine Doppelten Einträge!
      let tempArr = [];
      console.log("AddToList: ", action.payload);

      tempArr.push(action.payload);
      console.log("Liste: ", tempArr);
      state.content.push((arr) => [...arr, tempArr]);
      console.log(state.content);
    },
    removeFromList: (state, action) => {
      console.log("RemoveFromList");
    },
  },
});

export const { removeFromList, addToList } = MyListSlice.actions;

export default MyListSlice.reducer;
