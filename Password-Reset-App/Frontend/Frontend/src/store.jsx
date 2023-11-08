import { configureStore, combineReducers} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { userLoginReducer, userRegisterReducer, userResetReducer, userUpdateReducer } from "./reducers/userReducers";
// import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from "./reducers/notesReducers";

const reducer = combineReducers({
    // this will contain all our reducers
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    // noteList : noteListReducer,
    // noteCreate : noteCreateReducer,
    // noteUpdate: noteUpdateReducer,
    // noteDelete: noteDeleteReducer,
    userUpdate: userUpdateReducer,
    userReset: userResetReducer
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