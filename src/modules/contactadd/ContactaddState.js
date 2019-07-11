// @flow
type ContactaddStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: ContactaddStateType = {};

export const ACTION = 'ContactaddState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function ContactaddStateReducer(state: ContactaddStateType = initialState, action: ActionType): ContactaddStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
