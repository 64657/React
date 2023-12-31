import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_LOGOUT,
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_RESET_FAIL, 
    USER_RESET_PASSWORD_FAIL, 
    USER_RESET_PASSWORD_REQUEST, 
    USER_RESET_PASSWORD_SUCCESS, 
    USER_RESET_REQUEST, 
    USER_RESET_SUCCESS, 
    USER_UPDATE_FAIL, 
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
   switch (action.type) {
       case USER_LOGIN_REQUEST:
           return {loading: true}
       case USER_LOGIN_SUCCESS:
           return {loading: false, userInfo: action.payload}
       case USER_LOGIN_FAIL:
           return {loading: false, error: action.payload}
       case USER_LOGIN_LOGOUT:
           return {}
       default:
           return state;
   }
}

export const userRegisterReducer = (state = {}, action) => {
   switch (action.type) {
       case USER_REGISTER_REQUEST:
           return { loading: true };
       case USER_REGISTER_SUCCESS:
           return {loading: false, userInfo: action.payload}
       case USER_REGISTER_FAIL:
           return {loading: false, error: action.payload}
       default:
           return state;
   }
}


export const userUpdateReducer = (state = {}, action) => {
   switch (action.type) {
       case USER_UPDATE_REQUEST:
           return { loading: true };
       case USER_UPDATE_SUCCESS:
           return {loading: false, userInfo: action.payload, success: true}
       case USER_UPDATE_FAIL:
           return {loading: false, error: action.payload, success: false}
       default:
           return state;
   }
}

// Add this reducer to userReducers.js
export const userResetReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_RESET_REQUEST:
        return { loading: true };
      case USER_RESET_SUCCESS:
        return { loading: false, success: true };
      case USER_RESET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  const initialResetPasswordState = {
    loading: false,
    success: false,
    error: null,
  };
  
  export const userResetPasswordReducer = (state = initialResetPasswordState, action) => {
    switch (action.type) {
      case USER_RESET_PASSWORD_REQUEST:
        return { ...state, loading: true };
      case USER_RESET_PASSWORD_SUCCESS:
        return { ...state, loading: false, success: true };
      case USER_RESET_PASSWORD_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  