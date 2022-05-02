interface ReducerAStateProps {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchActionProps {
  type: "search_reducerA";
}

interface SuccessActionProps {
  type: "search_reducerA_success";
  payload: string[];
}

interface ErrorActionProps {
  type: "search_reducerA_error";
  payload: string;
}

type Action = SearchActionProps | SuccessActionProps | ErrorActionProps;

enum ActionType {
  SEARCH_REDUCERA = "search_reducerA",
  SEARCH_REDUCERA_SUCCESS = "search_reducerA_success",
  SEARCH_REDUCERA_ERROR = "search_reducerA_error",
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
