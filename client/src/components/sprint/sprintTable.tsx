import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  removeSprint,
  updateSprint,
} from "../../features/sprintTask/sprintSlice";
import { SprintModal } from "../../interfaces/sprintModal";
import {
  Table,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  Input,
  Button,
  TextArea,
} from "./SprintTableStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";

const SprintTable: React.FC = () => {
  const sprints = useSelector((state: RootState) => state.sprints);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
  const [selectedSprints, setSelectedSprints] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCheckboxChange = (id: string) => {
    setSelectedSprints({
      ...selectedSprints,
      [id]: !selectedSprints[id],
    });
  };

  const handleDeleteSelected = () => {
    Object.keys(selectedSprints).forEach((id) => {
      if (selectedSprints[id]) {
        handleRemoveSprint(id);
      }
    });
    setSelectedSprints({});
  };
  const handleRemoveSprint = (id: string) => {
    dispatch(removeSprint({ id }));
  };

  const handleChange = (id: string, field: string, value: string) => {
    handleUpdateSprint(id, { [field]: value });
  };

  const handleUpdateSprint = (
    id: string,
    updatedSprint: Partial<SprintModal>
  ) => {
    dispatch(updateSprint({ id, updatedTask: updatedSprint }));
  };

  const toggleEditing = (id: string, field: string, isEditing: boolean) => {
    setEditing({ ...editing, [`${id}-${field}`]: isEditing });
  };

  const isAnySprintSelected = Object.values(selectedSprints).some(Boolean);

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              <input type="checkbox" />
            </TableHeader>
            <TableHeader>Sprint</TableHeader>
            <TableHeader>Sprint goals</TableHeader>
            <TableHeader>Connected tasks</TableHeader>
            <TableHeader>Start date</TableHeader>
            <TableHeader>End date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sprints.map((sprint: SprintModal) => (
            <TableRow key={sprint.id}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={!!selectedSprints[sprint.id]}
                  onChange={() => handleCheckboxChange(sprint.id)}
                />
              </TableCell>
              <TableCell>
                {editing[`${sprint.id}-name`] ? (
                  <Input
                    type="text"
                    value={sprint.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(sprint.id, "name", e.target.value)
                    }
                    onBlur={() => toggleEditing(sprint.id, "name", false)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        toggleEditing(sprint.id, "name", false);
                      }
                    }}
                  />
                ) : (
                  <span onClick={() => toggleEditing(sprint.id, "name", true)}>
                    {sprint.name || "New sprint"}
                  </span>
                )}
              </TableCell>
              <TableCell>
                {editing[`${sprint.id}-goals`] ? (
                  <TextArea
                    value={sprint.goals}
                    onChange={(e) =>
                      handleChange(sprint.id, "goals", e.target.value)
                    }
                    onBlur={() => toggleEditing(sprint.id, "goals", false)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        toggleEditing(sprint.id, "goals", false);
                      }
                    }}
                  />
                ) : (
                  <span onClick={() => toggleEditing(sprint.id, "goals", true)}>
                    {sprint.goals || <FontAwesomeIcon icon={faComment} />}
                  </span>
                )}
              </TableCell>
              <TableCell>nx lax</TableCell>
              <TableCell>
                {editing[`${sprint.id}-startdate`] ? (
                  <Input
                    type="date"
                    value={sprint.startdate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(sprint.id, "startdate", e.target.value)
                    }
                    onBlur={() => toggleEditing(sprint.id, "startdate", false)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        toggleEditing(sprint.id, "startdate", false);
                      }
                    }}
                  />
                ) : (
                  <span
                    onClick={() => toggleEditing(sprint.id, "startdate", true)}
                  >
                    {sprint.startdate || <FontAwesomeIcon icon={faCalendar} />}
                  </span>
                )}
              </TableCell>
              <TableCell>
                {editing[`${sprint.id}-endDate`] ? (
                  <Input
                    type="date"
                    value={sprint.endDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(sprint.id, "endDate", e.target.value)
                    }
                    onBlur={() => toggleEditing(sprint.id, "endDate", false)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        toggleEditing(sprint.id, "endDate", false);
                      }
                    }}
                  />
                ) : (
                  <span
                    onClick={() => toggleEditing(sprint.id, "endDate", true)}
                  >
                    {sprint.endDate || <FontAwesomeIcon icon={faCalendar} />}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {isAnySprintSelected && (
        <Button onClick={handleDeleteSelected}>Delete Selected</Button>
      )}
    </TableContainer>
  );
};

export default SprintTable;
