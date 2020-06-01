/* Actions to manipulate launcher icons */

export const
  ADD="ADD",
  REMOVE="REMOVE",
  UPDATE="UPDATE";

export function addIcon(applicationId: String, path: String) {
  return {
    type: ADD,
    applicationId: applicationId,
    path: path
  }
}

export function removeIcon(applicationId: String) {
  return {
    type: REMOVE,
    applicationId: applicationId
  }
}

export function updateIcon(applicationId: String, newPath: String) {
  return {
    type: UPDATE,
    applicationId: applicationId,
    newPath: newPath
  }
}
