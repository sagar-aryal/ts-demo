import axios from "axios";
import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const searchReducerA = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REDUCERA,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REDUCERA_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REDUCERA_ERROR,
        payload: error.message,
      });
    }
  };
};

export default searchReducerA;
