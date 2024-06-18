// import React, { useState } from "react";
// import TaskTable from "./tasktable";

// const Sprint: React.FC = () => {
//   const [tables, setTables] = useState([{ id: 1 }]);

//   const addTable = () => {
//     setTables([...tables, { id: tables.length + 1 }]);
//   };

//   const removeTable = (id: number) => {
//     setTables(tables.filter((table) => table.id !== id));
//   };

//   return (
//     <div>
//       <button className="btn btn-primary mb-3" onClick={addTable}>
//         Add Table
//       </button>
//       {tables.map((table) => (
//         <div key={table.id} className="mb-4">
//           <button
//             className="btn btn-danger mb-2"
//             onClick={() => removeTable(table.id)}
//           >
//             Remove Table
//           </button>
//           <TaskTable />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sprint;
import React from "react";

const sprint = () => {
  return <div></div>;
};

export default sprint;
