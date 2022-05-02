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

const reducerA = (
  state: ReducerAStateProps,
  action: SearchActionProps | SuccessActionProps | ErrorActionProps
): ReducerAStateProps => {
  switch (action.type) {
    case "search_reducerA":
      return { loading: true, error: null, data: [] };
    case "search_reducerA_success":
      return { loading: false, error: null, data: action.payload };
    case "search_reducerA_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducerA;
