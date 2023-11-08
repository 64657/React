import axios from "axios";
import { USER_LOGIN_FAIL, 
  USER_LOGIN_LOGOUT,
   USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, 
    USER_REGISTER_FAIL,
     USER_REGISTER_REQUEST,
      USER_REGISTER_SUCCESS,
       USER_UPDATE_FAIL, 
       USER_UPDATE_SUCCESS } from "../constants/userConstants";

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const config = {
          headers: {
            "Content-type": "application/json",
          }
        };
        // setLoading(true);
    
        const {data} = await axios.post(
          "https://notezipper1.onrender.com/api/users/login",
          {
            email,
            password,
          },
          config
        );
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGIN_LOGOUT})
}

export const register = (name, email, password, pic) => async(dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST});

    const config = {
      headers: {
        "Content-Type":"application/json",
      },
    };

    const { data } = await axios.post(
      "https://notezipper1.onrender.com/api/users",
      { name, pic, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data});

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data});

    localStorage.setItem("userInfo", JSON.stringify(data));
    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message
})
  }
}

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST});

    const config = {
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "https://notezipper1.onrender.com/api/users/profile",
      { user },
      config
    );

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data});

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data});

    localStorage.setItem("userInfo", JSON.stringify(data));
    
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message
})
  }
}
