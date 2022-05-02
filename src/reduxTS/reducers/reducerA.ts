interface reducerAStateProps {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducerA = (
  state: reducerAStateProps,
  action: any
): reducerAStateProps => {
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
