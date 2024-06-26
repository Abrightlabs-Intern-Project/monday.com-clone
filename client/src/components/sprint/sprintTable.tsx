// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../app/store";
// import {
//   removeSprint,
//   updateSprint,
// } from "../../features/sprintTask/sprintSlice";
// import { SprintModal } from "../../interfaces/sprintModal";
// import {
//   Table,
//   TableContainer,
//   TableHeader,
//   TableRow,
//   TableCell,
//   Input,
//   Button,
//   TextArea,
//   Checkbox,
// } from "./SprintTableStyle";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";

// const SprintTable: React.FC = () => {
//   const sprints = useSelector((state: RootState) => state.sprints);
//   const dispatch = useDispatch();

//   const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
//   const [selectedSprints, setSelectedSprints] = useState<{
//     [key: string]: boolean;
//   }>({});

//   const handleCheckboxChange = (id: string) => {
//     setSelectedSprints({
//       ...selectedSprints,
//       [id]: !selectedSprints[id],
//     });
//   };

//   const handleDeleteSelected = () => {
//     Object.keys(selectedSprints).forEach((id) => {
//       if (selectedSprints[id]) {
//         handleRemoveSprint(id);
//       }
//     });
//     setSelectedSprints({});
//   };
//   const handleRemoveSprint = (id: string) => {
//     dispatch(removeSprint({ id }));
//   };

//   const handleChange = (id: string, field: string, value: string) => {
//     handleUpdateSprint(id, { [field]: value });
//   };

//   const handleUpdateSprint = (
//     id: string,
//     updatedSprint: Partial<SprintModal>
//   ) => {
//     dispatch(updateSprint({ id, updatedTask: updatedSprint }));
//   };

//   const toggleEditing = (id: string, field: string, isEditing: boolean) => {
//     setEditing({ ...editing, [`${id}-${field}`]: isEditing });
//   };

//   const isAnySprintSelected = Object.values(selectedSprints).some(Boolean);

//   return (
//     <TableContainer>
//       <Table>
//         <thead>
//           <TableRow>
//             <Checkbox>
//               <input type="checkbox" />
//             </Checkbox>
//             <TableHeader>Sprint</TableHeader>
//             <TableHeader>Sprint goals</TableHeader>
//             <TableHeader>Connected tasks</TableHeader>
//             <TableHeader>Start date</TableHeader>
//             <TableHeader>End date</TableHeader>
//           </TableRow>
//         </thead>
//         <tbody>
//           {sprints.map((sprint: SprintModal) => (
//             <TableRow key={sprint.id}>
//               <Checkbox>
//                 <input
//                   type="checkbox"
//                   checked={!!selectedSprints[sprint.id]}
//                   onChange={() => handleCheckboxChange(sprint.id)}
//                 />
//               </Checkbox>
//               <TableCell>
//                 {editing[`${sprint.id}-name`] ? (
//                   <Input
//                     type="text"
//                     value={sprint.name}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                       handleChange(sprint.id, "name", e.target.value)
//                     }
//                     onBlur={() => toggleEditing(sprint.id, "name", false)}
//                     onKeyPress={(e) => {
//                       if (e.key === "Enter") {
//                         toggleEditing(sprint.id, "name", false);
//                       }
//                     }}
//                   />
//                 ) : (
//                   <span onClick={() => toggleEditing(sprint.id, "name", true)}>
//                     {sprint.name || "New sprint"}
//                   </span>
//                 )}
//               </TableCell>
//               <TableCell>
//                 {editing[`${sprint.id}-goals`] ? (
//                   <TextArea
//                     value={sprint.goals}
//                     onChange={(e) =>
//                       handleChange(sprint.id, "goals", e.target.value)
//                     }
//                     onBlur={() => toggleEditing(sprint.id, "goals", false)}
//                     onKeyPress={(e) => {
//                       if (e.key === "Enter") {
//                         toggleEditing(sprint.id, "goals", false);
//                       }
//                     }}
//                   />
//                 ) : (
//                   <span onClick={() => toggleEditing(sprint.id, "goals", true)}>
//                     {sprint.goals || <FontAwesomeIcon icon={faComment} />}
//                   </span>
//                 )}
//               </TableCell>
//               <TableCell>nx lax</TableCell>
//               <TableCell>
//                 {editing[`${sprint.id}-startdate`] ? (
//                   <Input
//                     type="date"
//                     value={sprint.startdate}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                       handleChange(sprint.id, "startdate", e.target.value)
//                     }
//                     onBlur={() => toggleEditing(sprint.id, "startdate", false)}
//                     onKeyPress={(e) => {
//                       if (e.key === "Enter") {
//                         toggleEditing(sprint.id, "startdate", false);
//                       }
//                     }}
//                   />
//                 ) : (
//                   <span
//                     onClick={() => toggleEditing(sprint.id, "startdate", true)}
//                   >
//                     {sprint.startdate || <FontAwesomeIcon icon={faCalendar} />}
//                   </span>
//                 )}
//               </TableCell>
//               <TableCell>
//                 {editing[`${sprint.id}-endDate`] ? (
//                   <Input
//                     type="date"
//                     value={sprint.endDate}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                       handleChange(sprint.id, "endDate", e.target.value)
//                     }
//                     onBlur={() => toggleEditing(sprint.id, "endDate", false)}
//                     onKeyPress={(e) => {
//                       if (e.key === "Enter") {
//                         toggleEditing(sprint.id, "endDate", false);
//                       }
//                     }}
//                   />
//                 ) : (
//                   <span
//                     onClick={() => toggleEditing(sprint.id, "endDate", true)}
//                   >
//                     {sprint.endDate || <FontAwesomeIcon icon={faCalendar} />}
//                   </span>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>
//       {isAnySprintSelected && (
//         <Button onClick={handleDeleteSelected}>Delete Selected</Button>
//       )}
//     </TableContainer>
//   );
// };

// export default SprintTable;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   faAngleDown,
//   faSearch,
//   faHome,
//   faUserCircle,
//   faFilter,
//   faSort,
//   faEyeSlash,
//   faLayerGroup,
// } from "@fortawesome/free-solid-svg-icons";
// import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Table,
//   TableContainer,
//   TableHeader,
//   TableRow,
//   TableCell,
//   Input,
//   Button,
//   TextArea,
//   Checkbox,
// } from "./SprintTableStyle";

// interface SprintModal {
//   id?: any;
//   name?: string;
//   goals?: string;
//   startDate?: any;
//   endDate?: any;
// }

// const SprintTable: React.FC = () => {
//   const [sprints, setSprints] = useState<SprintModal[]>([]);
//   const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
//   const [selectedSprints, setSelectedSprints] = useState<{
//     [key: string]: boolean;
//   }>({});
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   useEffect(() => {
//     fetchSprints();
//   }, []);

//   const fetchSprints = async () => {
//     try {
//       const response = await axios.get<SprintModal[]>(
//         "http://localhost:3000/sprints"
//       );
//       setSprints(response.data);
//     } catch (error) {
//       console.error("Error fetching sprints:", error);
//     }
//   };

//   const handleAddSprint = async () => {
//     try {
//       const newSprint: SprintModal = {
//         name: "New sprint",
//         goals: "",
//         startDate: Date.now(),
//         endDate: Date.now(),
//       };
//       const response = await axios.post<SprintModal>(
//         "http://localhost:3000/sprints",
//         newSprint
//       );
//       setSprints([...sprints, { ...newSprint, id: response.data }]);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error adding sprint:", error);
//     }
//   };

//   const handleCheckboxChange = (id: any) => {
//     setSelectedSprints({
//       ...selectedSprints,
//       [id]: !selectedSprints[id],
//     });
//   };

//   const handleDeleteSelected = async () => {
//     try {
//       const idsToDelete = Object.keys(selectedSprints).filter(
//         (id) => selectedSprints[id]
//       );
//       await Promise.all(
//         idsToDelete.map((id) =>
//           axios.delete(`http://localhost:3000/sprints/${id}`)
//         )
//       );
//       setSprints(sprints.filter((sprint) => !selectedSprints[sprint.id]));
//       setSelectedSprints({});
//     } catch (error) {
//       console.error("Error deleting sprints:", error);
//     }
//   };

//   const handleChange = (id: any, field: keyof SprintModal, value: any) => {
//     const updatedSprints = sprints.map((sprint) =>
//       sprint.id === id ? { ...sprint, [field]: value } : sprint
//     );
//     const sprint = updatedSprints.find((sprint) => sprint.id === id);
//     if (sprint) {
//       console.log(sprint);
//       handleUpdateSprint(id, sprint);
//       setSprints(updatedSprints);
//     }
//   };

//   const handleUpdateSprint = async (id: any, updatedSprint: SprintModal) => {
//     try {
//       await axios.put(`http://localhost:3000/sprints/${id}`, updatedSprint);
//       const updatedSprints = sprints.map((sprint) =>
//         sprint.id === id ? { ...sprint, ...updatedSprint } : sprint
//       );
//       setSprints(updatedSprints);
//     } catch (error) {
//       console.error("Error updating sprint:", error);
//     }
//   };

//   const toggleEditing = (id: any, field: string, isEditing: boolean) => {
//     setEditing({
//       ...editing,
//       [`${id}-${field}`]: isEditing,
//     });
//   };

//   const isAnySprintSelected = Object.values(selectedSprints).some(Boolean);

//   const toggleSearch = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container">
//       <div className="row mb-3">
//         <div className="col">
//           <div className="sprinthome">
//             <FontAwesomeIcon icon={faHome} /> Main Table
//           </div>
//         </div>
//         <div className="row mt-3 ">
//           <div className="col d-flex">
//             <div className="sprintButton">
//               <button className="" onClick={handleAddSprint}>
//                 New Sprint
//                 <FontAwesomeIcon icon={faAngleDown} className="buttonIcon" />
//               </button>
//             </div>
//             <div className="searchSprint ms-3">
//               <button className="searchSprintButton" onClick={toggleSearch}>
//                 <FontAwesomeIcon icon={faSearch} className="iconSprint" />
//               </button>
//               {!isOpen && <span>Search</span>}
//               {isOpen && (
//                 <input
//                   type="text"
//                   placeholder="Search in this board"
//                   className="searchInput"
//                   autoFocus
//                 />
//               )}
//             </div>
//             <div className="sprintPerson ms-3">
//               <button className="sprintPersonButton">
//                 <FontAwesomeIcon icon={faUserCircle} className="iconSprint" />
//                 Person
//               </button>
//             </div>
//             <div className="sprintPerson ms-3">
//               <button className="sprintPersonButton">
//                 <FontAwesomeIcon icon={faFilter} className="iconSprint" />
//                 Filter
//               </button>
//             </div>
//             <div className="sprintPerson ms-3">
//               <button className="sprintPersonButton">
//                 <FontAwesomeIcon icon={faSort} className="iconSprint" />
//                 Sort
//               </button>
//             </div>
//             <div className="sprintPerson ms-3">
//               <button className="sprintPersonButton">
//                 <FontAwesomeIcon icon={faEyeSlash} className="iconSprint" />
//                 Hide
//               </button>
//             </div>
//             <div className="sprintPerson ms-3">
//               <button className="sprintPersonButton">
//                 <FontAwesomeIcon icon={faLayerGroup} className="iconSprint" />
//                 Group by
//               </button>
//             </div>
//             <div className="sprintPerson ms-3">
//               <button className="sprintPersonButton">...</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <TableContainer>
//         <Table>
//           <thead>
//             <TableRow>
//               <Checkbox>
//                 <input type="checkbox" />
//               </Checkbox>
//               <TableHeader>Sprint</TableHeader>
//               <TableHeader>Sprint goals</TableHeader>
//               <TableHeader>Connected tasks</TableHeader>
//               <TableHeader>Start date</TableHeader>
//               <TableHeader>End date</TableHeader>
//             </TableRow>
//           </thead>
//           <tbody>
//             {sprints.map((sprint) => (
//               <TableRow key={sprint.id}>
//                 <Checkbox>
//                   <input
//                     type="checkbox"
//                     checked={!!selectedSprints[sprint.id]}
//                     onChange={() => handleCheckboxChange(sprint.id)}
//                   />
//                 </Checkbox>
//                 <TableCell>
//                   {editing[`${sprint.id}-name`] ? (
//                     <Input
//                       type="text"
//                       value={sprint.name}
//                       onChange={(e) =>
//                         handleChange(sprint.id, "name", e.target.value)
//                       }
//                       onBlur={() => toggleEditing(sprint.id, "name", false)}
//                       onKeyPress={(e) => {
//                         if (e.key === "Enter") {
//                           toggleEditing(sprint.id, "name", false);
//                         }
//                       }}
//                     />
//                   ) : (
//                     <span
//                       onClick={() => toggleEditing(sprint.id, "name", true)}
//                     >
//                       {sprint.name || "New sprint"}
//                     </span>
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editing[`${sprint.id}-goals`] ? (
//                     <TextArea
//                       value={sprint.goals}
//                       onChange={(e) =>
//                         handleChange(sprint.id, "goals", e.target.value)
//                       }
//                       onBlur={() => toggleEditing(sprint.id, "goals", false)}
//                       onKeyPress={(e) => {
//                         if (e.key === "Enter") {
//                           toggleEditing(sprint.id, "goals", false);
//                         }
//                       }}
//                     />
//                   ) : (
//                     <span
//                       onClick={() => toggleEditing(sprint.id, "goals", true)}
//                     >
//                       {sprint.goals || <FontAwesomeIcon icon={faComment} />}
//                     </span>
//                   )}
//                 </TableCell>
//                 <TableCell>nx lax</TableCell>
//                 <TableCell>
//                   {editing[`${sprint.id}-startdate`] ? (
//                     <Input
//                       type="date"
//                       value={sprint.startDate}
//                       onChange={(e) =>
//                         handleChange(sprint.id, "startDate", e.target.value)
//                       }
//                       onBlur={() =>
//                         toggleEditing(sprint.id, "startDate", false)
//                       }
//                       onKeyPress={(e) => {
//                         if (e.key === "Enter") {
//                           toggleEditing(sprint.id, "startDate", false);
//                         }
//                       }}
//                     />
//                   ) : (
//                     <span
//                       onClick={() =>
//                         toggleEditing(sprint.id, "startdate", true)
//                       }
//                     >
//                       {sprint.startDate || (
//                         <FontAwesomeIcon icon={faCalendar} />
//                       )}
//                     </span>
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editing[`${sprint.id}-endDate`] ? (
//                     <Input
//                       type="date"
//                       value={sprint.endDate}
//                       onChange={(e) =>
//                         handleChange(sprint.id, "endDate", e.target.value)
//                       }
//                       onBlur={() => toggleEditing(sprint.id, "endDate", false)}
//                       onKeyPress={(e) => {
//                         if (e.key === "Enter") {
//                           toggleEditing(sprint.id, "endDate", false);
//                         }
//                       }}
//                     />
//                   ) : (
//                     <span
//                       onClick={() => toggleEditing(sprint.id, "endDate", true)}
//                     >
//                       {sprint.endDate || <FontAwesomeIcon icon={faCalendar} />}
//                     </span>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </tbody>
//         </Table>
//         {isAnySprintSelected && (
//           <Button onClick={handleDeleteSelected}>Delete Selected</Button>
//         )}
//       </TableContainer>
//     </div>
//   );
// };

// export default SprintTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  faAngleDown,
  faSearch,
  faHome,
  faUserCircle,
  faFilter,
  faSort,
  faEyeSlash,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  Input,
  Button,
  TextArea,
  Checkbox,
} from "./SprintTableStyle";

interface SprintModal {
  sprintId?: any;
  name?: string;
  goals?: string;
  startDate?: any;
  endDate?: any;
}

const SprintTable: React.FC = () => {
  const [sprints, setSprints] = useState<SprintModal[]>([]);
  const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
  const [selectedSprints, setSelectedSprints] = useState<{
    [key: string]: boolean;
  }>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchSprints();
  }, []);

  const fetchSprints = async () => {
    try {
      const response = await axios.get<SprintModal[]>(
        "http://localhost:3000/sprints"
      );
      setSprints(response.data);
    } catch (error) {
      console.error("Error fetching sprints:", error);
    }
  };

  const handleAddSprint = async () => {
    try {
      const newSprint: SprintModal = {
        name: "New sprint",
        goals: "",
        startDate: Date.now(),
        endDate: Date.now(),
      };
      const response = await axios.post<SprintModal>(
        "http://localhost:3000/sprints",
        newSprint
      );
      setSprints([...sprints, { ...newSprint, sprintId: response.data }]);
      console.log(response.data);
    } catch (error) {
      console.error("Error adding sprint:", error);
    }
  };

  const handleCheckboxChange = (id: any) => {
    setSelectedSprints({
      ...selectedSprints,
      [id]: !selectedSprints[id],
    });
  };

  const handleDeleteSelected = async () => {
    try {
      const idsToDelete = Object.keys(selectedSprints).filter(
        (id) => selectedSprints[id]
      );
      await Promise.all(
        idsToDelete.map((id) =>
          axios.delete(`http://localhost:3000/sprints/${id}`)
        )
      );
      setSprints(sprints.filter((sprint) => !selectedSprints[sprint.sprintId]));
      setSelectedSprints({});
    } catch (error) {
      console.error("Error deleting sprints:", error);
    }
  };

  const handleChange = (id: any, field: keyof SprintModal, value: any) => {
    const updatedSprints = sprints.map((sprint) =>
      sprint.sprintId === id ? { ...sprint, [field]: value } : sprint
    );
    const sprint = updatedSprints.find((sprint) => sprint.sprintId === id);
    if (sprint) {
      handleUpdateSprint(id, sprint);
      setSprints(updatedSprints);
    }
  };

  const handleUpdateSprint = async (id: any, updatedSprint: SprintModal) => {
    try {
      await axios.put(`http://localhost:3000/sprints/${id}`, updatedSprint);
      const updatedSprints = sprints.map((sprint) =>
        sprint.sprintId === id ? { ...sprint, ...updatedSprint } : sprint
      );
      setSprints(updatedSprints);
    } catch (error) {
      console.error("Error updating sprint:", error);
    }
  };

  const toggleEditing = (id: any, field: string, isEditing: boolean) => {
    setEditing({
      ...editing,
      [`${id}-${field}`]: isEditing,
    });
  };

  const isAnySprintSelected = Object.values(selectedSprints).some(Boolean);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  if (!sprints) return <div>Loading....!</div>;
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <div className="sprinthome">
            <FontAwesomeIcon icon={faHome} /> Main Table
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col d-flex">
            <div className="sprintButton">
              <button className="" onClick={handleAddSprint}>
                New Sprint
                <FontAwesomeIcon icon={faAngleDown} className="buttonIcon" />
              </button>
            </div>
            <div className="searchSprint ms-3">
              <button className="searchSprintButton" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faSearch} className="iconSprint" />
              </button>
              {!isOpen && <span>Search</span>}
              {isOpen && (
                <input
                  type="text"
                  placeholder="Search in this board"
                  className="searchInput"
                  autoFocus
                />
              )}
            </div>
            <div className="sprintPerson ms-3">
              <button className="sprintPersonButton">
                <FontAwesomeIcon icon={faUserCircle} className="iconSprint" />
                Person
              </button>
            </div>
            <div className="sprintPerson ms-3">
              <button className="sprintPersonButton">
                <FontAwesomeIcon icon={faFilter} className="iconSprint" />
                Filter
              </button>
            </div>
            <div className="sprintPerson ms-3">
              <button className="sprintPersonButton">
                <FontAwesomeIcon icon={faSort} className="iconSprint" />
                Sort
              </button>
            </div>
            <div className="sprintPerson ms-3">
              <button className="sprintPersonButton">
                <FontAwesomeIcon icon={faEyeSlash} className="iconSprint" />
                Hide
              </button>
            </div>
            <div className="sprintPerson ms-3">
              <button className="sprintPersonButton">
                <FontAwesomeIcon icon={faLayerGroup} className="iconSprint" />
                Group by
              </button>
            </div>
            <div className="sprintPerson ms-3">
              <button className="sprintPersonButton">...</button>
            </div>
          </div>
        </div>
      </div>

      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <Checkbox>
                <input type="checkbox" />
              </Checkbox>
              <TableHeader>Sprint</TableHeader>
              <TableHeader>Sprint goals</TableHeader>
              <TableHeader>Connected tasks</TableHeader>
              <TableHeader>Start date</TableHeader>
              <TableHeader>End date</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sprints.map((sprint) => (
              <TableRow key={sprint.sprintId}>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={!!selectedSprints[sprint.sprintId]}
                    onChange={() => handleCheckboxChange(sprint.sprintId)}
                  />
                </Checkbox>
                <TableCell>
                  {editing[`${sprint.sprintId}-name`] ? (
                    <Input
                      type="text"
                      value={sprint.name}
                      onChange={(e) =>
                        handleChange(sprint.sprintId, "name", e.target.value)
                      }
                      onBlur={() =>
                        toggleEditing(sprint.sprintId, "name", false)
                      }
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          toggleEditing(sprint.sprintId, "name", false);
                        }
                      }}
                    />
                  ) : (
                    <span
                      onClick={() =>
                        toggleEditing(sprint.sprintId, "name", true)
                      }
                    >
                      {sprint.name || "New sprint"}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {editing[`${sprint.sprintId}-goals`] ? (
                    <TextArea
                      value={sprint.goals}
                      onChange={(e) =>
                        handleChange(sprint.sprintId, "goals", e.target.value)
                      }
                      onBlur={() =>
                        toggleEditing(sprint.sprintId, "goals", false)
                      }
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          toggleEditing(sprint.sprintId, "goals", false);
                        }
                      }}
                    />
                  ) : (
                    <span
                      onClick={() =>
                        toggleEditing(sprint.sprintId, "goals", true)
                      }
                    >
                      {sprint.goals || <FontAwesomeIcon icon={faComment} />}
                    </span>
                  )}
                </TableCell>
                <TableCell>{sprint.sprintId == undefined}</TableCell>
                <TableCell>
                  {editing[`${sprint.sprintId}-startDate`] ? (
                    <Input
                      type="date"
                      value={sprint.startDate}
                      onChange={(e) =>
                        handleChange(
                          sprint.sprintId,
                          "startDate",
                          e.target.value
                        )
                      }
                      onBlur={() =>
                        toggleEditing(sprint.sprintId, "startDate", false)
                      }
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          toggleEditing(sprint.sprintId, "startDate", false);
                        }
                      }}
                    />
                  ) : (
                    <span
                      onClick={() =>
                        toggleEditing(sprint.sprintId, "startDate", true)
                      }
                    >
                      {sprint.startDate || (
                        <FontAwesomeIcon icon={faCalendar} />
                      )}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {editing[`${sprint.sprintId}-endDate`] ? (
                    <Input
                      type="date"
                      value={sprint.endDate}
                      onChange={(e) =>
                        handleChange(sprint.sprintId, "endDate", e.target.value)
                      }
                      onBlur={() =>
                        toggleEditing(sprint.sprintId, "endDate", false)
                      }
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          toggleEditing(sprint.sprintId, "endDate", false);
                        }
                      }}
                    />
                  ) : (
                    <span
                      onClick={() =>
                        toggleEditing(sprint.sprintId, "endDate", true)
                      }
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
    </div>
  );
};

export default SprintTable;
