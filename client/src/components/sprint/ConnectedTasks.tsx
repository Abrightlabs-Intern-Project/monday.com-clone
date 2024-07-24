import React, { useEffect, useState } from "react";
import {
  Checkbox,
  SpecialCheckbox,
  TableCell,
  TableHeader,
  TableRow,
  UserHeader,
} from "../task/taskTableStyles";
import axios from "axios";
import { userList } from "../../mockdata/User";
import { useTask } from "../../context/TaskContext";

export interface User {
  userId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  companyId?: string;
}

interface ConnectedTask {
  sprintId: string;
}

const ConnectedTask: React.FC<ConnectedTask> = ({ sprintId }) => {
  const { tasks } = useTask();
  const [loading, setLoading] = useState<boolean>(true);
  const [taskUsers, setTaskUsers] = useState<{ [userId: string]: boolean }>({});

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/users");
  //       setUsers(response.data);
  //     } catch (Err) {
  //       console.log(Err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   const fetchTaskUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/tasks/${taskId}/users`
  //       );
  //       const taskUserMap: { [userId: string]: boolean } = {};
  //       response.data.forEach((user: User) => {
  //         taskUserMap[user.userId] = true;
  //       });
  //       setTaskUsers(taskUserMap);
  //     } catch (Err) {
  //       console.log(Err);
  //     }
  //   };
  //   fetchUsers();
  //   fetchTaskUsers();
  // }, [taskId]);

  const handleCheckboxChange = async (userId: string) => {
    const newTaskUsers = { ...taskUsers, [userId]: !taskUsers[userId] };
    setTaskUsers(newTaskUsers);

    // try {
    //   await axios.post("http://localhost:3000/tasks/addUser", {
    //     userId,
    //     taskId,
    //   });
    // } catch (error) {
    //   console.error("There was an error adding the user to the task!", error);
    // }
  };

  // if (loading) return <div className="">Loading ...!</div>;

  return (
    <div className=" text-white">
      <table style={{ width: "100%", background: "rgb(24, 27, 52)" }}>
        <thead>
          <TableRow>
            <Checkbox>
              <input type="checkbox" />
            </Checkbox>
            <UserHeader>Task Name</UserHeader>
          </TableRow>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableRow key={task.taskId}>
              <SpecialCheckbox>
                <input
                  type="checkbox"
                  checked={!!taskUsers[task.taskId]}
                  onChange={() => handleCheckboxChange(task.taskId)}
                />
              </SpecialCheckbox>
              <TableCell bgColor="rgb(48, 50, 78)">{task.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectedTask;
