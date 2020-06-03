import { ADD_ICON, UPDATE_ICON, REMOVE_ICON } from '../actions/appIcons';

export default function appIcons(state:any[]=[], action: any) {
  switch(action.type) {
    case ADD_ICON:
      return state.concat({ applicationId: action.applicationId, path: action.path })
    case UPDATE_ICON:
      return state.map((icon)=> {
        if(action.applicationId == icon.applicationId) {
          return { applicationId: action.applicationId, path: action.newPath }
        } else {
          return icon;
        }
      });
    case REMOVE_ICON:
      return state.filter(icon => icon.applicationId !== action.applicationId);
    default:
      return state;
  }
}
