import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { SprintModal } from "../../interfaces/sprintModal";
import sprint from "../../components/main/sprint";

const initialState: SprintModal[] = [];

const sprintSlice = createSlice({
  name: "sprint",
  initialState,
  reducers: {
    addSprint: (state, action: PayloadAction<SprintModal>) => {
      const newSprint = {
        id: nanoid(),
        ...action.payload,
      };
      state.push(newSprint);
    },
    removeSprint: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    updateSprint: (
      state,
      action: PayloadAction<{
        id: string;
        updatedTask: Partial<SprintModal>;
      }>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.updatedTask };
      }
    },
  },
});

export const { addSprint, removeSprint, updateSprint } = sprintSlice.actions;
export default sprintSlice.reducer;
