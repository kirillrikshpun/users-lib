export const FETCH_USERS = "FETCH_USERS";
export const EDIT_USER = "EDIT_USER";
export const REMOVE_USER = "REMOVE_USER";

export function fetchUsers(payload) {
  return {
    type: FETCH_USERS,
    payload: payload,
  };
}

export function editUsers(payload) {
  return {
    type: EDIT_USER,
    payload: payload,
  };
}

export function removeUsers(payload) {
  return {
    type: REMOVE_USER,
    payload: payload,
  };
}
