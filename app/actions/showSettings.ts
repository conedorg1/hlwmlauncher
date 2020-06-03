export const
  DISPLAY_SETTINGS = "DISPLAY_SETTINGS",
  HIDE_SETTINGS = "HIDE_SETTINGS";

export function showSettings() {
  return {
    type: DISPLAY_SETTINGS
  }
}

export function hideSettings() {
  return {
    type: HIDE_SETTINGS
  }
}
