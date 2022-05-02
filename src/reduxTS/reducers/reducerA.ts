import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ReducerAStateProps {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducerA = (
  state: ReducerAStateProps,
  action: Action
): ReducerAStateProps => {
  switch (action.type) {
    case ActionType.SEARCH_REDUCERA:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REDUCERA_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REDUCERA_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducerA;
