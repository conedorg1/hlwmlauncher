import { DISPLAY_SETTINGS, HIDE_SETTINGS } from '../actions/showSettings';

export default function showSettings(state=false, action:any) {
  switch(action.type) {
    case DISPLAY_SETTINGS:
      return true;
    case HIDE_SETTINGS:
      return false;
    default:
      return state;
  }
}
