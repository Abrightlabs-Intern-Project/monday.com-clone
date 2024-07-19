import React, { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../interfaces/Task";
interface TaskContext {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContext | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
const useTask = () => {
  return useContext(TaskContext);
};

export { TaskProvider, useTask };
