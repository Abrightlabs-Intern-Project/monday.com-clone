import styled from "styled-components";

export const TableContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  font-weight: 100;
  font-size: small;
  background-color: rgb(48, 50, 78);
  color: white;
  padding: 5px;
  border: 1px solid #444;
  text-align: center;
  width: 10%; /* Adjust as necessary to fit your design */
`;

export const Checkbox = styled.th`
  font-weight: 100;
  font-size: small;
  background-color: rgb(48, 50, 78);
  color: white;
  padding: 5px;
  border: 1px solid #444;
  text-align: center;
  width: 3%;
`;
export const TableRow = styled.tr`
  color: green;
`;

export const TableCell = styled.td`
  font-weight: 100;
  font-size: small;
  color: white;
  padding: 0px;
  border: 1px solid #444;
  text-align: center;
  background-color: rgb(48, 50, 78);
  width: 15%; /* Ensure consistent width across cells */
`;

export const AddSprintContainer = styled.div`
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: 2px;
  margin: 2px;
  border: 1px solid green;
  border-radius: 3px;
  background-color: rgb(48, 50, 78);
  color: white;
  width: calc(100% - 10px);
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 5px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #444;
  }
`;

export const TextArea = styled.textarea`
  width: 200px;
  height: 100px;
  border: 1px solid green;
  border-radius: 3px;
  background-color: rgb(48, 50, 78);
  color: white;
  padding: 10px;
  font-size: 14px;
  resize: vertical;
  border: 1px solid white;
  box-sizing: border-box;
`;
