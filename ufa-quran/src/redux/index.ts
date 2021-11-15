import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
import SurahReducer from './reducers/SurahReducer';

const reducers = combineReducers({
  AuthReducer,
  SurahReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export type RootReducer<R extends any = any> = ReturnType<typeof reducers>;

export {store, persistor};
