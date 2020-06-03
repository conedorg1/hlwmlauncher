/* Actions to manipulate launcher icons */

export const
  ADD_ICON="ADD_ICON",
  REMOVE_ICON="REMOVE_ICON",
  UPDATE_ICON="UPDATE_ICON";

export function addIcon(applicationId: String, path: String) {
  return {
    type: ADD_ICON,
    applicationId: applicationId,
    path: path
  }
}

export function removeIcon(applicationId: String) {
  return {
    type: REMOVE_ICON,
    applicationId: applicationId
  }
}

export function updateIcon(applicationId: String, newPath: String) {
  return {
    type: UPDATE_ICON,
    applicationId: applicationId,
    newPath: newPath
  }
}
