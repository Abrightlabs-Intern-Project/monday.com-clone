import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../features/rowTask/taskSlice"; // Adjust the path if necessary
import { RowTask as RowTaskType } from "../../interfaces/rowTaskModal";

interface RowTaskProps {
  id: string;
  task: RowTaskType;
}

const RowTask: React.FC<RowTaskProps> = ({ id, task }) => {
  const dispatch = useDispatch();

  const handleChange = (key: keyof RowTaskType, value: string) => {
    dispatch(updateTask({ id, updatedTask: { [key]: value } }));
  };
  const handleRemoveTask = () => {
    dispatch(removeTask({ id })); // Pass an object with the id property to the removeTask action creator
  };

  if (!task) {
    return null; // Handle the case where task is undefined
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          value={task.task}
          onChange={(e) => handleChange("task", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={task.owner}
          onChange={(e) => handleChange("owner", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={task.status}
          onChange={(e) => handleChange("status", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={task.priority}
          onChange={(e) => handleChange("priority", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={task.type}
          onChange={(e) => handleChange("type", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={task.itemId}
          onChange={(e) => handleChange("itemId", e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleRemoveTask}>x</button>
      </td>
    </tr>
  );
};

export default RowTask;
