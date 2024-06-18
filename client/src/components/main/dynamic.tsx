import React, { useState } from "react";
import { Button, Table, Form, Container, Row, Col } from "react-bootstrap";

interface Column {
  id: number;
  name: string;
}

interface RowData {
  [key: string]: string;
}

interface TableData {
  id: number;
  columns: Column[];
  rows: RowData[];
}

const DynamicTables = () => {
  const [tables, setTables] = useState<TableData[]>([]);
  const [nextTableId, setNextTableId] = useState(1);

  const addTable = () => {
    const newTable: TableData = {
      id: nextTableId,
      columns: [
        { id: 1, name: "Task" },
        { id: 2, name: "Owner" },
      ],
      rows: [{ Task: "", Owner: "" }],
    };
    setTables([...tables, newTable]);
    setNextTableId(nextTableId + 1);
  };

  const removeTable = (tableId: number) => {
    setTables(tables.filter((table) => table.id !== tableId));
  };

  const addColumn = (tableId: number) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          const newColumnId = table.columns.length + 1;
          return {
            ...table,
            columns: [
              ...table.columns,
              { id: newColumnId, name: `Column ${newColumnId}` },
            ],
            rows: table.rows.map((row) => ({
              ...row,
              [`Column ${newColumnId}`]: "",
            })),
          };
        }
        return table;
      })
    );
  };

  const removeColumn = (tableId: number, columnId: number) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          const newColumns = table.columns.filter((col) => col.id !== columnId);
          const newRows = table.rows.map((row) => {
            const { [`Column ${columnId}`]: _, ...newRow } = row;
            return newRow;
          });
          return { ...table, columns: newColumns, rows: newRows };
        }
        return table;
      })
    );
  };

  const handleInputChange = (
    tableId: number,
    rowIndex: number,
    columnName: string,
    value: string
  ) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          const newRows = table.rows.map((row, index) =>
            index === rowIndex ? { ...row, [columnName]: value } : row
          );
          return { ...table, rows: newRows };
        }
        return table;
      })
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={addTable}>Add Table</Button>
        </Col>
      </Row>
      {tables.map((table) => (
        <Row key={table.id} className="my-3">
          <Col>
            <h3>Table {table.id}</h3>
            <Button variant="danger" onClick={() => removeTable(table.id)}>
              Remove Table
            </Button>
            <Button className="ms-2" onClick={() => addColumn(table.id)}>
              Add Column
            </Button>
            <Table bordered>
              <thead>
                <tr>
                  {table.columns.map((column) => (
                    <th key={column.id}>
                      {column.name}
                      <Button
                        variant="link"
                        className="text-danger"
                        onClick={() => removeColumn(table.id, column.id)}
                      >
                        &times;
                      </Button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {table.columns.map((column) => (
                      <td key={column.id}>
                        <Form.Control
                          type="text"
                          value={row[column.name]}
                          onChange={(e) =>
                            handleInputChange(
                              table.id,
                              rowIndex,
                              column.name,
                              e.target.value
                            )
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default DynamicTables;
