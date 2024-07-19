// src/mocks/mockSprints.ts

import { Sprint } from "../interfaces/Sprint";

const sprintList: Sprint[] = [
  {
    sprintId: "sprint-001",
    name: "Sprint 1",
    goals: "Complete the user authentication feature.",
    startDate: "2024-01-01",
    endDate: "2024-01-14",
  },
  {
    sprintId: "sprint-002",
    name: "Sprint 2",
    goals: "Implement the dashboard UI and integrate API.",
    startDate: "2024-01-15",
    endDate: "2024-01-28",
  },
  {
    sprintId: "sprint-003",
    name: "Sprint 3",
    goals: "Develop the reporting module and set up testing.",
    startDate: "2024-01-29",
    endDate: "2024-02-11",
  },
  {
    sprintId: "sprint-004",
    name: "Sprint 4",
    goals: "Refactor the codebase and improve performance.",
    startDate: "2024-02-12",
    endDate: "2024-02-25",
  },
  {
    sprintId: "sprint-005",
    name: "Sprint 5",
    goals: "Prepare for the product launch and finalize documentation.",
    startDate: "2024-02-26",
    endDate: "2024-03-10",
  },
];

export default sprintList;
