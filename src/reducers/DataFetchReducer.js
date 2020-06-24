import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  FETCH_CARDS_LOADING,
} from '../constants';

const initialState = {
  cardsData: {success: null, message: ''},
  cardsDataStarted: null,
  cardsDataSuccess: null,
  cardsDataFailed: null,
};
const dataFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cardsDataStarted: true,
        cardsDataSuccess: true,
        cardsDataFailed: false,
        cardsData: action.payload,
      };
    case FETCH_CARDS_LOADING:
      return {
        ...state,
        cardsDataStarted: true,
        cardsDataSuccess: false,
        cardsDataFailed: false,
        cardsData: {success: null, message: ''},
      };
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        cardsDataStarted: true,
        cardsDataSuccess: false,
        cardsDataFailed: true,
        cardsData: {success: null, message: ''},
      };
    default:
      return state;
  }
};
export default dataFetchReducer;
