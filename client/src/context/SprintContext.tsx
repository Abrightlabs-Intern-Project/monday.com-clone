import React, { createContext, useState, ReactNode, useContext } from "react";
import { Sprint } from "../interfaces/Sprint";
import sprintList from "../mockdata/Sprint";

interface SprintContextType {
  sprints: Sprint[];
  setSprints: React.Dispatch<React.SetStateAction<Sprint[]>>;
}

const SprintContext = createContext<SprintContextType | undefined>(undefined);

const SprintProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sprints, setSprints] = useState<Sprint[]>(sprintList);
  return (
    <SprintContext.Provider value={{ sprints, setSprints }}>
      {children}
    </SprintContext.Provider>
  );
};

const useSprint = () => {
  const context = useContext(SprintContext);
  if (!context) {
    throw new Error("useSprint must be used within a SprintProvider");
  }
  return context;
};

export { SprintProvider, useSprint };
