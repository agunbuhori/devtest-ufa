import {SurahData} from '../../screens/app/Surah/SurahProps';

export interface SurahState {
  fetched: boolean;
  data: SurahData[];
}

export default function SurahReducer(
  state = {
    fetched: false,
    data: [],
  },
  action: {type: string; payload: any},
) {
  switch (action.type) {
    case 'FETCH_SURAH_SUCCESS':
      return {
        ...state,
        fetched: true,
        data: action.payload,
      };
    default:
      return state;
  }
}
