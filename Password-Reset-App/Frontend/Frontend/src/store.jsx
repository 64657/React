import { configureStore, combineReducers} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { userLoginReducer, userRegisterReducer, userResetPasswordReducer, userResetReducer, userUpdateReducer } from "./reducers/userReducers";
// import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from "./reducers/notesReducers";

const reducer = combineReducers({
    // this will contain all our reducers
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    userReset: userResetReducer,
    userResetPassword: userResetPasswordReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo : userInfoFromStorage },
};

// if (userInfoFromStorage && !userInfoFromStorage.token) {
//     initialState.userLogin = null;
// }

const middleware = [thunk];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
    preloadedState: initialState,
    
})

export default store;