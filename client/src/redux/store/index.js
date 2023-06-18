import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "../reducers/userSlice";
import logger from "redux-logger";
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, red)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger]
});

export const persistor = persistStore(store)