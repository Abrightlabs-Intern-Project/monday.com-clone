import React, { useState } from "react";
import "../../assets/styles/DisplayColumns.css";

interface Column {
  name: string;
  icon?: string;
}

const columns: Column[] = [
  { name: "name", icon: "📝" },
  { name: "goals", icon: "👤" },
  { name: "Connected task", icon: "✅" },
  { name: "startDate", icon: "📋" },
  { name: "endDate", icon: "📋" },
];

interface DisplayColumnsProps {
  hiddenColumns: string[];
  toggleColumnVisibility: (column: string) => void;
}

const DisplaySprint: React.FC<DisplayColumnsProps> = ({
  hiddenColumns,
  toggleColumnVisibility,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredColumns = columns.filter((col) =>
    col.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="display-columns">
      <div className="header">
        <span style={{ fontSize: "12px", fontWeight: "500" }}>
          Display columns
        </span>
      </div>
      <input
        type="text"
        placeholder="Find columns to show/hide"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="columns">
        <div className="all-columns">
          <input
            type="checkbox"
            checked={hiddenColumns.length === 0}
            onChange={() =>
              hiddenColumns.length === 0
                ? columns.forEach((col) => toggleColumnVisibility(col.name))
                : columns.forEach((col) => toggleColumnVisibility(col.name))
            }
          />
          <span>All columns</span>
        </div>
        <div className="item-columns">
          {filteredColumns.map((col) => (
            <div key={col.name} className="column-item">
              <input
                type="checkbox"
                checked={!hiddenColumns.includes(col.name)}
                onChange={() => toggleColumnVisibility(col.name)}
              />
              <span className="icon">{col.icon}</span>
              <span>{col.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplaySprint;
