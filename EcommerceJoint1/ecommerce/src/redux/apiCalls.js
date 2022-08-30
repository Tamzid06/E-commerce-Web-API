import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    
  } catch (err) {
    console.log('Error', err.message);
    alert(err.response.data.message);
    dispatch(loginFailure());
  }
};

// export const authRegister = async (dispatch, user) => {
  
//   dispatch(regStart());
//   try {
//     const res = await publicRequest.post("/auth/register", user);
//     dispatch(regSuccess(res.data));
    
//   } catch (err) {
//     dispatch(regFailure());
//   }
// };