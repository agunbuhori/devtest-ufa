import {LOGIN} from '../../constants/auth';

export default function AuthReducer(
  state = {},
  action: {type: string; payload: any},
) {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
        auth: action.payload,
      };
    default:
      return state;
  }
}
