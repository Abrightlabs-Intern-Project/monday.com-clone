export const statusColors: { [key: string]: string } = {
  "Ready to start": "#007bff",
  "In Progress": "#ffca28",
  "Waiting for review": "#80d8ff",
  "Pending Deploy": "#8d6e63",
  Done: "#4caf50",
  Stuck: "#ff5252",
  "": "#797e93",
};

export const priorityColors: { [key: string]: string } = {
  Critical: "rgba(232,105,125,255)",
  High: "rgba(248,207,52,255)",
  Medium: "rgba(116,166,240,255)",
  Low: "#33d391",
  "Best Effort": "#999999",
  Missing: "#797e93",
};

export const typeColors: { [key: string]: string } = {
  Quality: "#fbb4f4",
  Feature: "#33d391",
  Bug: "#e8697d",
  Test: "#5c5c5c",
  Security: "#359970",
  Missing: "#797e93",
};
