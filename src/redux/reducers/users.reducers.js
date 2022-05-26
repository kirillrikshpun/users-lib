import { FETCH_USERS, EDIT_USER, REMOVE_USER } from "../actions/users.actions";

const initialState = {
    users: []
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {

    case FETCH_USERS:
      return {
          ...state,
          users: payload
      };

    case EDIT_USER:

      const index = state.users.findIndex(u => u.login.uuid === payload.login.uuid)
      const newArr = [...state.users]
      newArr[index].name.first = payload.name.first
      newArr[index].name.last = payload.name.last
      newArr[index].email = payload.email
      newArr[index].location.country = payload.location.country
      newArr[index].location.city = payload.location.city
      newArr[index].location.street.name = payload.location.street.name
      newArr[index].location.street.number = payload.location.street.number

      return {
          ...state,
        users: newArr
      }
    
    case REMOVE_USER:
      return {
         ...state,
        users: state.users.filter(elem => elem.login.uuid !== payload)
      }

      default:
      return state;
    }
  
}
