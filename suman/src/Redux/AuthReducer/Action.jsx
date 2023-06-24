import * as types from "./ActionTypes";
import axios from "axios";

const getLoginreq = () => {
  return {
    type: types.LOGINUSERREQ,
  };
};

const getLoginsuccess = (payload) => {
  return {
    type: types.LOGINUSERSUCESS,
    payload,
  };
};

const geLoginfailure = () => {
  return {
    type: types.LOGINUSERFAILURE,
  };
};

// -------------

const getsignReq = () =>{
  return {
     type: types.SIGNUPUSERREQ
  }
}

const getsignSucess = (payload) => {
  return {
     type :types.SIGNUPUSERSUCESS,
     payload,
  }
}

const getsignFail = () => {
 return {
     type :types.SIGNUPUSERFAILURE
 }
}

export const Loginpost = (payload) => (dispatch) => {
  dispatch(getLoginreq());
  return axios
    .post(`https://glorious-tan-underclothes.cyclic.app/login`, payload)
    .then((r) => {
      return dispatch(getLoginsuccess(r.data));
    })
    .catch((err) => {
  return    dispatch(geLoginfailure());
    });
};

export const Signuppost =(payload) => (dispatch) => {
  dispatch(getsignReq);
  return axios.post(`https://glorious-tan-underclothes.cyclic.app/signup`,payload)
    .then((r) => {
      return dispatch(getsignSucess(r));
    })
    .catch((err) => {
      dispatch(getsignFail());
    });
};

  export const handleLogOut = () => (dispatch) =>{
     dispatch({type:types.LOGOUT_SUCCESS})
  }

    