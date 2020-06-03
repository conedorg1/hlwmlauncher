import { ADD_APPLICATION, DELETE_APPLICATION, UPDATE_APPLICATION } from '../actions/applications';

export default function applications(state:any[] = [], action: any) {
  switch (action.type) {
    case ADD_APPLICATION:
      return state.concat([{ id: action.id, name: action.name, path: action.path }])
    case DELETE_APPLICATION:
      return state.filter((i)=>{
        if(i.id == action.id) {
          return false;
        }
        return true;
      })
    case UPDATE_APPLICATION:
      return state.map((i)=> {
        if(i.id == action.id) {
          return Object.assign({}, { id: i.id, name: action.name, path: action.path });
        } else {
          return i;
        }
      });
    default:
      return state;
  }
}
