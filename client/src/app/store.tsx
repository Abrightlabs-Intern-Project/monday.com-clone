// import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "../features/rowTask/taskSlice";
// const store = configureStore({
//   reducer: [taskReducer],
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/rowTask/taskSlice";
import sprintReducer from "../features/sprintTask/sprintSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    sprints: sprintReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
