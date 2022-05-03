import axios from "axios";
import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const searchReducerA = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REDUCERA,
    });

    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REDUCERA_ERROR,
        payload: error.message,
      });
    }
  };
};

export default searchReducerA;
