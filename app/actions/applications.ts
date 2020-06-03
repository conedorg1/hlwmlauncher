export const
  ADD_APPLICATION = "ADD_APPLICATION",
  DELETE_APPLICATION = "DELETE_APPLICATION",
  UPDATE_APPLICATION = "UPDATE_APPLICATION";

export function addApplication(name: string, path: string) {
  return {
    type: ADD_APPLICATION,
    name,
    path
  }
}

export function deleteApplication(id: number) {
  return {
    type: DELETE_APPLICATION,
    id: id
  }
}

export function updateApplication(id: number, name: string, path: string) {
  return {
    type: UPDATE_APPLICATION,
    name,
    path
  }
}
