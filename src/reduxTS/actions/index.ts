import { ActionType } from "../action-types";

interface SearchActionProps {
  type: ActionType.SEARCH_REDUCERA;
}

interface SuccessActionProps {
  type: ActionType.SEARCH_REDUCERA_SUCCESS;
  payload: string[];
}

interface ErrorActionProps {
  type: ActionType.SEARCH_REDUCERA_ERROR;
  payload: string;
}

export type Action = SearchActionProps | SuccessActionProps | ErrorActionProps;
