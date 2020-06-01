import { ADD, UPDATE, REMOVE } from '../actions/appIcons';

export default function appIcons(state:any[]=[], action: any) {
  switch(action.type) {
    case ADD:
      return state.concat({ applicationId: action.applicationId, path: action.path })
    case UPDATE:
      return state.map((icon)=> {
        if(action.applicationId == icon.applicationId) {
          return { applicationId: action.applicationId, path: action.newPath }
        } else {
          return icon;
        }
      });
    case REMOVE:
      return state.filter(icon => icon.applicationId !== action.applicationId);
    default:
      return state;
  }
}
