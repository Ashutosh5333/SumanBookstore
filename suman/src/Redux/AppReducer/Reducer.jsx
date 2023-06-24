import * as types from "./ActionTypes";

const initailState = {
  isLoading: false,
  isError: false,
  Booksdata: [],
  CartData:[]
};

export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETALLBOOKREQ:
      return {
        ...state,
        isLoading: true,
      };

    case types.GETALLBOOKSUCESS:
      return {
        ...state,
        isLoading: false,
        Booksdata: payload,
      };

    case types.GETALLBOOKFAILURE:
      return {
        ...state,
        isLoading: true,
        Booksdata: [],
      };

      case types.GETCARTDATASUCESS:
        return {
          ...state,
          isLoading: false,
          CartData: payload,
        };

    default:
      return state;
  }
};
