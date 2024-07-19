import { Task } from "../interfaces/Task";

// Function to generate an array of mock Task data
function generateMockData(count: number): Task[] {
  const mockTasks: Task[] = [];

  for (let i = 1; i <= count; i++) {
    const task: Task = {
      taskId: `task-${i}`,
      name: `Mock Task Name ${i}`,
      owner: "",
      type: "Missing", // Type is set to "missing"
      priority: "Missing", // Priority is set to "missing"
      itemId: "", // Not generated
      status: "missing", // Status is set to "missing"
    };

    mockTasks.push(task);
  }

  return mockTasks;
}

export const taskList = generateMockData(10);
