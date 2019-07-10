// @flow
type ContactlistStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: ContactlistStateType = {};

export const ACTION = 'ContactlistState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function ContactlistStateReducer(state: ContactlistStateType = initialState, action: ActionType): ContactlistStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
