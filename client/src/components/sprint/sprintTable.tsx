// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { format } from "date-fns";
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
// import PostAddIcon from "@mui/icons-material/PostAdd";
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
// import { useSprint } from "../../context/SprintContext";
// import { Sprint } from "../../interfaces/Sprint";
// import DisplaySprint from "./DisplaySprint";
// import ConnectedTask from "./ConnectedTasks";

// const SprintTable: React.FC = () => {
//   const { sprints, setSprints } = useSprint();
//   const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
//   const [selectedSprints, setSelectedSprints] = useState<{
//     [key: string]: boolean;
//   }>({});
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
//   const [showDisplayColumns, setShowDisplayColumns] = useState<boolean>(false);

//   const [sortKey, setSortKey] = useState<keyof Sprint>("sprintId");
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

//   const handleSort = (key: keyof Sprint) => {
//     setSortKey(key);
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const sortSprints = (
//     sprints: Sprint[],
//     sortKey: keyof Sprint,
//     sortOrder: "asc" | "desc"
//   ): Sprint[] => {
//     return [...sprints].sort((a, b) => {
//       if (a[sortKey] < b[sortKey]) {
//         return sortOrder === "asc" ? -1 : 1;
//       }
//       if (a[sortKey] > b[sortKey]) {
//         return sortOrder === "asc" ? 1 : -1;
//       }
//       return 0;
//     });
//   };

//   const handleAddSprint = async () => {
//     try {
//       const newSprint: Sprint = {
//         sprintId: `${Math.round(Math.random() * 1000)}`,
//         name: "New sprint",
//         goals: "",
//         startDate: Date.now(),
//         endDate: Date.now(),
//       };
//       setSprints((prevSprints) => [...prevSprints, newSprint]);
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
//       setSprints(sprints.filter((sprint) => !selectedSprints[sprint.sprintId]));
//       setSelectedSprints({});
//     } catch (error) {
//       console.error("Error deleting sprints:", error);
//     }
//   };

//   const handleChange = (id: any, field: keyof Sprint, value: any) => {
//     const updatedSprints = sprints.map((sprint) =>
//       sprint.sprintId === id ? { ...sprint, [field]: value } : sprint
//     );
//     const sprint = updatedSprints.find((sprint) => sprint.sprintId === id);
//     if (sprint) {
//       handleUpdateSprint(id, sprint);
//       setSprints(updatedSprints);
//     }
//   };

//   const handleUpdateSprint = async (id: any, updatedSprint: Sprint) => {
//     try {
//       const updatedSprints = sprints.map((sprint) =>
//         sprint.sprintId === id ? { ...sprint, ...updatedSprint } : sprint
//       );
//       setSprints(updatedSprints);
//     } catch (error) {
//       console.error("Error updating sprint:", error);
//     }
//   };

//   const toggleEditing = (id: any, field: string, isEditing: boolean) => {
//     const newEditingState = Object.keys(editing).reduce(
//       (acc, key) => ({ ...acc, [key]: false }),
//       { [`${id}-${field}`]: isEditing }
//     );
//     setEditing(newEditingState);
//   };

//   const isAnySprintSelected = Object.values(selectedSprints).some(Boolean);

//   const toggleSearch = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleColumnVisibility = (column: string) => {
//     setHiddenColumns((prevHiddenColumns) =>
//       prevHiddenColumns.includes(column)
//         ? prevHiddenColumns.filter((col) => col !== column)
//         : [...prevHiddenColumns, column]
//     );
//   };

//   const filteredSprints = sprints.filter((sprint) =>
//     sprint.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedSprints = sortSprints(filteredSprints, sortKey, sortOrder);

//   if (!sprints) return <div>Loading....!</div>;

//   return (
//     <div className="container" style={{ backgroundColor: "rgb(24, 27, 52)" }}>
//       <div className="row mb-3">
//         <div className="col" style={{ backgroundColor: "rgb(24, 27, 52)" }}>
//           <div className="sprinthome">
//             <FontAwesomeIcon icon={faHome} /> Main Table
//           </div>
//         </div>
//         <div className="row">
//           <div
//             className="col d-flex p-3"
//             style={{ backgroundColor: "rgb(24, 27, 52)" }}
//           >
//             <div
//               className="sprintButton"
//               style={{ backgroundColor: "rgb(24, 27, 52)" }}
//             >
//               <button className="" onClick={handleAddSprint}>
//                 New Sprint
//                 <FontAwesomeIcon
//                   icon={faAngleDown}
//                   className="buttonIcon"
//                   style={{ backgroundColor: "inherit" }}
//                 />
//               </button>
//             </div>
//             <div
//               className="searchSprint ms-3 mt-1"
//               style={{ backgroundColor: "rgb(24, 27, 52)" }}
//             >
//               <button className="searchSprintButton" onClick={toggleSearch}>
//                 <FontAwesomeIcon icon={faSearch} className="iconSprint" />
//               </button>
//               {!isOpen && (
//                 <span
//                   style={{ backgroundColor: "rgb(24, 27, 52)" }}
//                   className=""
//                 >
//                   Search
//                 </span>
//               )}
//               {isOpen && (
//                 <input
//                   type="text"
//                   placeholder="Search in this board"
//                   className="searchInput text-white"
//                   autoFocus
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               )}
//             </div>

//             <div
//               className="sprintPerson ms-3"
//               style={{ backgroundColor: "rgb(24, 27, 52)" }}
//             >
//               <button className="sprintPersonButton">
//                 <FontAwesomeIcon
//                   icon={faEyeSlash}
//                   className="iconSprint"
//                   onClick={() => setShowDisplayColumns(!showDisplayColumns)}
//                 />
//                 Hide
//                 {showDisplayColumns && (
//                   <div style={{ position: "absolute", zIndex: 100 }}>
//                     <DisplaySprint
//                       hiddenColumns={hiddenColumns}
//                       toggleColumnVisibility={toggleColumnVisibility}
//                     />
//                   </div>
//                 )}
//               </button>
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
//               {!hiddenColumns.includes("name") && (
//                 <TableHeader onClick={() => handleSort("name")}>
//                   Sprint{" "}
//                   {sortKey === "name" && (sortOrder === "asc" ? "↑" : "↓")}
//                 </TableHeader>
//               )}
//               {!hiddenColumns.includes("goals") && (
//                 <TableHeader onClick={() => handleSort("goals")}>
//                   Goals
//                   {sortKey === "goals" && (sortOrder === "asc" ? "↑" : "↓")}
//                 </TableHeader>
//               )}
//               {!hiddenColumns.includes("Connected task") && (
//                 <TableHeader>Connected task</TableHeader>
//               )}
//               {!hiddenColumns.includes("startDate") && (
//                 <TableHeader onClick={() => handleSort("startDate")}>
//                   Start Date
//                   {sortKey === "startDate" && (sortOrder === "asc" ? "↑" : "↓")}
//                 </TableHeader>
//               )}
//               {!hiddenColumns.includes("endDate") && (
//                 <TableHeader onClick={() => handleSort("endDate")}>
//                   End Date
//                   {sortKey === "endDate" && (sortOrder === "asc" ? "↑" : "↓")}
//                 </TableHeader>
//               )}
//             </TableRow>
//           </thead>
//           <tbody>
//             {sortedSprints.map((sprint) => (
//               <TableRow key={sprint.sprintId}>
//                 <Checkbox>
//                   <input
//                     type="checkbox"
//                     checked={selectedSprints[sprint.sprintId] || false}
//                     onChange={() => handleCheckboxChange(sprint.sprintId)}
//                   />
//                 </Checkbox>
//                 {!hiddenColumns.includes("name") && (
//                   <TableCell>
//                     {editing[`${sprint.sprintId}-name`] ? (
//                       <Input
//                         type="text"
//                         value={sprint.name}
//                         onChange={(e) =>
//                           handleChange(sprint.sprintId, "name", e.target.value)
//                         }
//                         onKeyPress={(e) => {
//                           if (e.key === "Enter") {
//                             toggleEditing(sprint.sprintId, "name", false);
//                           }
//                         }}
//                         autoFocus
//                       />
//                     ) : (
//                       <span
//                         onClick={() =>
//                           toggleEditing(sprint.sprintId, "name", true)
//                         }
//                       >
//                         {sprint.name}
//                       </span>
//                     )}
//                   </TableCell>
//                 )}
//                 {!hiddenColumns.includes("goals") && (
//                   <TableCell>
//                     {editing[`${sprint.sprintId}-goals`] ? (
//                       <div style={{ position: "absolute", marginLeft: "10px" }}>
//                         <TextArea
//                           value={sprint.goals}
//                           onChange={(e) =>
//                             handleChange(
//                               sprint.sprintId,
//                               "goals",
//                               e.target.value
//                             )
//                           }
//                           onKeyPress={(e) => {
//                             if (e.key === "Enter") {
//                               toggleEditing(sprint.sprintId, "goals", false);
//                             }
//                           }}
//                           autoFocus
//                         />
//                       </div>
//                     ) : (
//                       <span
//                         onClick={() =>
//                           toggleEditing(sprint.sprintId, "goals", true)
//                         }
//                       >
//                         <FontAwesomeIcon icon={faComment} />
//                       </span>
//                     )}
//                   </TableCell>
//                 )}
//                 {!hiddenColumns.includes("Connected task") && (
//                   <TableCell>
//                     {editing[`${sprint.sprintId}-Connected task`] ? (
//                       <>
//                         <span
//                           onClick={() =>
//                             toggleEditing(
//                               sprint.sprintId,
//                               "Connected task",
//                               false
//                             )
//                           }
//                         >
//                           <PostAddIcon />
//                         </span>
//                         <div
//                           style={{
//                             position: "absolute",
//                             zIndex: 100,
//                             left: 1000,
//                             top: 250,
//                             width: "15%",
//                           }}
//                         >
//                           <ConnectedTask sprintId={sprint.sprintId} />
//                         </div>
//                       </>
//                     ) : (
//                       <span
//                         onClick={() =>
//                           toggleEditing(sprint.sprintId, "Connected task", true)
//                         }
//                       >
//                         <PostAddIcon />
//                       </span>
//                     )}
//                   </TableCell>
//                 )}
//                 {!hiddenColumns.includes("startDate") && (
//                   <TableCell>
//                     {editing[`${sprint.sprintId}-startDate`] ? (
//                       <Input
//                         type="date"
//                         value={format(sprint.startDate, "yyyy-MM-dd")}
//                         onChange={(e) =>
//                           handleChange(
//                             sprint.sprintId,
//                             "startDate",
//                             new Date(e.target.value).getTime()
//                           )
//                         }
//                         onKeyPress={(e) => {
//                           if (e.key === "Enter") {
//                             toggleEditing(sprint.sprintId, "startDate", false);
//                           }
//                         }}
//                         autoFocus
//                       />
//                     ) : (
//                       <span
//                         onClick={() =>
//                           toggleEditing(sprint.sprintId, "startDate", true)
//                         }
//                       >
//                         {format(sprint.startDate, "yyyy-MM-dd")}
//                       </span>
//                     )}
//                   </TableCell>
//                 )}
//                 {!hiddenColumns.includes("endDate") && (
//                   <TableCell>
//                     {editing[`${sprint.sprintId}-endDate`] ? (
//                       <Input
//                         type="date"
//                         value={format(sprint.endDate, "yyyy-MM-dd")}
//                         onChange={(e) =>
//                           handleChange(
//                             sprint.sprintId,
//                             "endDate",
//                             new Date(e.target.value).getTime()
//                           )
//                         }
//                         onKeyPress={(e) => {
//                           if (e.key === "Enter") {
//                             toggleEditing(sprint.sprintId, "endDate", false);
//                           }
//                         }}
//                         autoFocus
//                       />
//                     ) : (
//                       <span
//                         onClick={() =>
//                           toggleEditing(sprint.sprintId, "endDate", true)
//                         }
//                       >
//                         {format(sprint.endDate, "yyyy-MM-dd")}
//                       </span>
//                     )}
//                   </TableCell>
//                 )}
//               </TableRow>
//             ))}
//           </tbody>
//         </Table>
//       </TableContainer>

//       {isAnySprintSelected && (
//         <div className="row deleteTaskSection m-2">
//           <div className="col">
//             <Button onClick={handleDeleteSelected}>Delete</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SprintTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
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
import PostAddIcon from "@mui/icons-material/PostAdd";
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
import { useSprint } from "../../context/SprintContext";
import { Sprint } from "../../interfaces/Sprint";
import DisplaySprint from "./DisplaySprint";
import ConnectedTask from "./ConnectedTasks";

const SprintTable: React.FC = () => {
  const { sprints, setSprints } = useSprint();
  const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
  const [selectedSprints, setSelectedSprints] = useState<{
    [key: string]: boolean;
  }>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [showDisplayColumns, setShowDisplayColumns] = useState<boolean>(false);

  const [sortKey, setSortKey] = useState<keyof Sprint>("sprintId");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof Sprint) => {
    setSortKey(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortSprints = (
    sprints: Sprint[],
    sortKey: keyof Sprint,
    sortOrder: "asc" | "desc"
  ): Sprint[] => {
    return [...sprints].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const handleAddSprint = async () => {
    try {
      const newSprint: Sprint = {
        sprintId: `${Math.round(Math.random() * 1000)}`,
        name: "New sprint",
        goals: "",
        startDate: Date.now(),
        endDate: Date.now(),
      };
      setSprints((prevSprints) => [...prevSprints, newSprint]);
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
      setSprints(sprints.filter((sprint) => !selectedSprints[sprint.sprintId]));
      setSelectedSprints({});
    } catch (error) {
      console.error("Error deleting sprints:", error);
    }
  };

  const handleChange = (id: any, field: keyof Sprint, value: any) => {
    const updatedSprints = sprints.map((sprint) =>
      sprint.sprintId === id ? { ...sprint, [field]: value } : sprint
    );
    const sprint = updatedSprints.find((sprint) => sprint.sprintId === id);
    if (sprint) {
      handleUpdateSprint(id, sprint);
      setSprints(updatedSprints);
    }
  };

  const handleUpdateSprint = async (id: any, updatedSprint: Sprint) => {
    try {
      const updatedSprints = sprints.map((sprint) =>
        sprint.sprintId === id ? { ...sprint, ...updatedSprint } : sprint
      );
      setSprints(updatedSprints);
    } catch (error) {
      console.error("Error updating sprint:", error);
    }
  };

  const toggleEditing = (id: any, field: string, isEditing: boolean) => {
    if (editing[`${id}-${field}`]) {
      setEditing({ [`${id}-${field}`]: !editing[`${id}-${field}`] });
    } else {
      const newEditingState = Object.keys(editing).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        { [`${id}-${field}`]: isEditing }
      );
      setEditing(newEditingState);
    }
  };

  const isAnySprintSelected = Object.values(selectedSprints).some(Boolean);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const toggleColumnVisibility = (column: string) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(column)
        ? prevHiddenColumns.filter((col) => col !== column)
        : [...prevHiddenColumns, column]
    );
  };

  const filteredSprints = sprints.filter((sprint) =>
    sprint.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSprints = sortSprints(filteredSprints, sortKey, sortOrder);

  if (!sprints) return <div>Loading....!</div>;

  return (
    <div className="container" style={{ backgroundColor: "rgb(24, 27, 52)" }}>
      <div className="row mb-3">
        <div className="col" style={{ backgroundColor: "rgb(24, 27, 52)" }}>
          <div className="sprinthome">
            <FontAwesomeIcon icon={faHome} /> Main Table
          </div>
        </div>
        <div className="row">
          <div
            className="col d-flex p-3"
            style={{ backgroundColor: "rgb(24, 27, 52)" }}
          >
            <div
              className="sprintButton"
              style={{ backgroundColor: "rgb(24, 27, 52)" }}
            >
              <button className="" onClick={handleAddSprint}>
                New Sprint
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="buttonIcon"
                  style={{ backgroundColor: "inherit" }}
                />
              </button>
            </div>
            <div
              className="searchSprint ms-3 mt-1"
              style={{ backgroundColor: "rgb(24, 27, 52)" }}
            >
              <button className="searchSprintButton" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faSearch} className="iconSprint" />
              </button>
              {!isOpen && (
                <span
                  style={{ backgroundColor: "rgb(24, 27, 52)" }}
                  className=""
                >
                  Search
                </span>
              )}
              {isOpen && (
                <input
                  type="text"
                  placeholder="Search in this board"
                  className="searchInput text-white"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}
            </div>

            <div
              className="sprintPerson ms-3"
              style={{ backgroundColor: "rgb(24, 27, 52)" }}
            >
              <button className="sprintPersonButton">
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="iconSprint"
                  onClick={() => setShowDisplayColumns(!showDisplayColumns)}
                />
                Hide
                {showDisplayColumns && (
                  <div style={{ position: "absolute", zIndex: 100 }}>
                    <DisplaySprint
                      hiddenColumns={hiddenColumns}
                      toggleColumnVisibility={toggleColumnVisibility}
                    />
                  </div>
                )}
              </button>
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
              {!hiddenColumns.includes("name") && (
                <TableHeader onClick={() => handleSort("name")}>
                  Sprint{" "}
                  {sortKey === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHeader>
              )}
              {!hiddenColumns.includes("goals") && (
                <TableHeader onClick={() => handleSort("goals")}>
                  Goals
                  {sortKey === "goals" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHeader>
              )}
              {!hiddenColumns.includes("Connected task") && (
                <TableHeader>Connected task</TableHeader>
              )}
              {!hiddenColumns.includes("startDate") && (
                <TableHeader onClick={() => handleSort("startDate")}>
                  Start Date
                  {sortKey === "startDate" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHeader>
              )}
              {!hiddenColumns.includes("endDate") && (
                <TableHeader onClick={() => handleSort("endDate")}>
                  End Date
                  {sortKey === "endDate" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHeader>
              )}
            </TableRow>
          </thead>
          <tbody>
            {sortedSprints.map((sprint) => (
              <TableRow key={sprint.sprintId}>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={selectedSprints[sprint.sprintId] || false}
                    onChange={() => handleCheckboxChange(sprint.sprintId)}
                  />
                </Checkbox>
                {!hiddenColumns.includes("name") && (
                  <TableCell>
                    {editing[`${sprint.sprintId}-name`] ? (
                      <Input
                        type="text"
                        value={sprint.name}
                        onChange={(e) =>
                          handleChange(sprint.sprintId, "name", e.target.value)
                        }
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            toggleEditing(sprint.sprintId, "name", false);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() =>
                          toggleEditing(sprint.sprintId, "name", true)
                        }
                      >
                        {sprint.name}
                      </span>
                    )}
                  </TableCell>
                )}
                {!hiddenColumns.includes("goals") && (
                  <TableCell>
                    {editing[`${sprint.sprintId}-goals`] ? (
                      <div style={{ position: "absolute", marginLeft: "10px" }}>
                        <TextArea
                          value={sprint.goals}
                          onChange={(e) =>
                            handleChange(
                              sprint.sprintId,
                              "goals",
                              e.target.value
                            )
                          }
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              toggleEditing(sprint.sprintId, "goals", false);
                            }
                          }}
                          autoFocus
                        />
                      </div>
                    ) : (
                      <span
                        onClick={() =>
                          toggleEditing(sprint.sprintId, "goals", true)
                        }
                      >
                        <FontAwesomeIcon icon={faComment} />
                      </span>
                    )}
                  </TableCell>
                )}
                {!hiddenColumns.includes("Connected task") && (
                  <TableCell>
                    {editing[`${sprint.sprintId}-Connected task`] ? (
                      <>
                        <span
                          onClick={() =>
                            toggleEditing(
                              sprint.sprintId,
                              "Connected task",
                              false
                            )
                          }
                        >
                          <PostAddIcon />
                        </span>
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 100,
                            left: 1000,
                            top: 250,
                            width: "15%",
                          }}
                        >
                          <ConnectedTask sprintId={sprint.sprintId} />
                        </div>
                      </>
                    ) : (
                      <span
                        onClick={() =>
                          toggleEditing(sprint.sprintId, "Connected task", true)
                        }
                      >
                        <PostAddIcon />
                      </span>
                    )}
                  </TableCell>
                )}
                {!hiddenColumns.includes("startDate") && (
                  <TableCell>
                    {editing[`${sprint.sprintId}-startDate`] ? (
                      <Input
                        type="date"
                        value={format(sprint.startDate, "yyyy-MM-dd")}
                        onChange={(e) =>
                          handleChange(
                            sprint.sprintId,
                            "startDate",
                            new Date(e.target.value).getTime()
                          )
                        }
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            toggleEditing(sprint.sprintId, "startDate", false);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() =>
                          toggleEditing(sprint.sprintId, "startDate", true)
                        }
                      >
                        {format(sprint.startDate, "yyyy-MM-dd")}
                      </span>
                    )}
                  </TableCell>
                )}
                {!hiddenColumns.includes("endDate") && (
                  <TableCell>
                    {editing[`${sprint.sprintId}-endDate`] ? (
                      <Input
                        type="date"
                        value={format(sprint.endDate, "yyyy-MM-dd")}
                        onChange={(e) =>
                          handleChange(
                            sprint.sprintId,
                            "endDate",
                            new Date(e.target.value).getTime()
                          )
                        }
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            toggleEditing(sprint.sprintId, "endDate", false);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() =>
                          toggleEditing(sprint.sprintId, "endDate", true)
                        }
                      >
                        {format(sprint.endDate, "yyyy-MM-dd")}
                      </span>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      {isAnySprintSelected && (
        <div className="row deleteTaskSection m-2">
          <div className="col">
            <Button onClick={handleDeleteSelected}>Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SprintTable;
