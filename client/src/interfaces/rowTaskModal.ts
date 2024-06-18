export interface RowTask {
  id?: any;
  task?: string;
  owner?: string;
  status?: string;
  priority?: string;
  type?: string;
  itemId?: string;
}

export interface addTask {
  type: "ADD_TASK";
  payload: RowTask;
}

export interface removeTask {
  type: "REMOVE_TASK";
  payload: { id: number };
}
