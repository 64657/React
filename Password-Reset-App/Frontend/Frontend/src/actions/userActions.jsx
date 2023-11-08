import axios from "axios";
import { USER_LOGIN_FAIL, 
  USER_LOGIN_LOGOUT,
   USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, 
    USER_REGISTER_FAIL,
     USER_REGISTER_REQUEST,
      USER_REGISTER_SUCCESS,
       USER_RESET_FAIL,
       USER_RESET_REQUEST,
       USER_RESET_SUCCESS,
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
          "http://localhost:3000/api/users/login",
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

export const register = (data) => async(dispatch) => {
  // console.log(user);
  try {
    dispatch({ type: USER_REGISTER_REQUEST});

    const config = {
      headers: {
        "Content-Type":"application/json",
      },
    };

    const response  = await axios.post(
      "http://localhost:3000/api/users/register",
      {...data},
      config
    );
    console.log("data",response);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data});

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data});

    localStorage.setItem("userInfo", JSON.stringify(data));
    
  } catch (error) {
    // console.log(dispatch.type);
    // console.log(diapatch.payload);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message
}) 
  //  console.log(error);
  }
// try {
//   const response = await axios.post(
//     "http://localhost:3000/api/users/register",
//     { name, email, password },
//     // config
//   );
//   console.log("Registration successful", response.data);
// } catch (error) {
//   if (error.response) {
//     console.error("Server returned an error with status code:", error.response.status);
//     console.error("Error data:", error.response.data);
//   } else if (error.request) {
//     console.error("No response received. Request made but no response.");
//   } else {
//     console.error("Request error:", error.message);
//   }
// }

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
      "http://localhost:3000/api/users/profile",
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


  // Add this action to userActions.jsx
export const forgetPassword = (email) => async (dispatch) => {
    try {
      dispatch({ type: USER_RESET_REQUEST });
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const { data } = await axios.post(
        'http://localhost:3000/api/users/reset-password',
        { email },
        config
      );
  
      dispatch({ type: USER_RESET_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_RESET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
