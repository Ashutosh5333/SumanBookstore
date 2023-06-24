import axios from "axios";
import * as types from "./ActionTypes";

//  -----------------  Delete cart data ------------------ //

const token = JSON.parse(localStorage.getItem("usertoken"));

// --------------- All books get ------------

const GetAllBooksreq = () => {
  return {
    type: types.GETALLBOOKREQ,
  };
};

const GetAllBookssuccess = (payload) => {
  return {
    type: types.GETALLBOOKSUCESS,
    payload,
  };
};

const GetAllBooksfailure = () => {
  return {
    type: types.GETALLBOOKFAILURE,
  };
};

export const GetAllBooksData = (dispatch) => {
  dispatch(GetAllBooksreq());
  return axios
    .get(`https://glorious-tan-underclothes.cyclic.app/allbooks`)
    .then((r) => {
      return dispatch(GetAllBookssuccess(r.data));
    })
    .catch((err) => {
      dispatch(GetAllBooksfailure());
    });
};

// --------------------   Single Books data  ----------------------//

const GetSinglebookdetailReq = () => {
  return {
    type: types.GETSINGLE_BOOK_REQUEST,
  };
};
const GetSinglebookdetailSucess = (payload) => {
  return {
    type: types.GETSINGLE_BOOK_SUCCESS,
    payload,
  };
};
const GetSinglebookdetailFail = () => {
  return {
    type: types.GETSINGLE_BOOK_FAILURE,
  };
};

export const GetSinglebookdetail = (_id) => (dispatch) => {
  dispatch(GetSinglebookdetailReq());
  return axios
    .get(`https://glorious-tan-underclothes.cyclic.app/allbooks/${_id}`)
    .then((res) => {
      return dispatch(GetSinglebookdetailSucess(res.data));
    })
    .catch((e) => {
      return dispatch(GetSinglebookdetailFail());
    });
};

//  --------------------------- ADD TO CART -------------------- //

const CartAddedReq = () => {
  return {
    type: types.ADDTOCARTBOOKREQ,
  };
};

const CartAddedFailure = () => {
  return {
    type: types.ADDTOCARTBOOKUCESS,
  };
};

const CartAddedsucess = (payload) => {
  return {
    type: types.ADDTOCARTBOOKFAILURE,
    payload,
  };
};

export const ADDCart = (payload) => (dispatch) => {
  dispatch(CartAddedReq());
  return axios
    .post(`https://glorious-tan-underclothes.cyclic.app/cart`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => {
      return dispatch(CartAddedsucess(r.data));
    })
    .catch((err) => {
      dispatch(CartAddedFailure());
    });
};

// --------------------  Get My cart ------------------ //

const GetcartdataReq = () => {
  return {
    type: types.GETCARTDATAREQ,
  };
};

const GetCartdataSucess = (payload) => {
  return {
    type: types.GETCARTDATASUCESS,
    payload,
  };
};

const GetcartdataFail = () => {
  return {
    type: types.GETCARTDATAFAILURE,
  };
};

export const GetCartdata = (dispatch) => {
  dispatch(GetcartdataReq());
  return axios
    .get(`https://glorious-tan-underclothes.cyclic.app/mycart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => {
      return dispatch(GetCartdataSucess(r.data));
    })
    .catch((err) => {
      dispatch(GetcartdataFail());
    });
};

// --------------------  Delete cart data  ------------------ //

const DeletecartReq = () => {
  return {
    type: types.DELTEFROMCARTREQ,
  };
};

const Deletecartsucess = () => {
  return {
    type: types.DELTEFROMCARTUCESS,
  };
};

const DeletecartFailure = () => {
  return {
    type: types.DELTEFROMCARTFAILURE,
  };
};

export const Deletecartdata = (_id) => (dispatch) => {
  dispatch(DeletecartReq());
  return axios
    .delete(`https://glorious-tan-underclothes.cyclic.app//cart/delete/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => {
      return dispatch(Deletecartsucess(r));
    })
    .catch((err) => {
      dispatch(DeletecartFailure());
    });
};
