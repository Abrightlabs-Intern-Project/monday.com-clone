import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RowTask } from "../../interfaces/rowTaskModal";

const initialState: RowTask[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<RowTask>) => {
      const newTask: RowTask = {
        id: nanoid(),
        ...action.payload,
      };
      state.push(newTask);
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (
      state,
      action: PayloadAction<{
        id: string;
        updatedTask: Partial<RowTask>;
      }>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.updatedTask };
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
