import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const taskSlice = createSlice({
  name: "fruits",
  initialState: [
    {
      id: 1,
      title: "Task 1",
      desc: "Description 1",
      isDone: false,
    },
  ],
  reducers: {
    addToTasks: (state, action) => {
      state.push(action.payload);
      console.log("state", state);
      console.log("action", action);
    },
    deleteFromTasks: (state, action) => {
      console.log("payload", action.payload);
      return state.filter((item) => item.id !== action.payload.id);
    },
    changeState: (state, action) => {
      const foundTask = state.find(
        (task) => task.id === action.payload.id
      );
      console.log(foundTask,action.payload.id)
      foundTask.isDone = !foundTask.isDone;
    },
    filter: (state, action) => {
      if (action.payload === "all") {
        return state;
      } else if (action.payload === "isDone") {
        return state.filter((task) => task.isDone === true);
      } else if (action.payload === "notDone") {
        return state.filter((task) => task.isDone === false);
      }
    },
  },
});
export const { addToTasks, deleteFromTasks, changeState , filter } = taskSlice.actions;
