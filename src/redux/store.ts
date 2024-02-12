import { configureStore, Tuple } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducers } from "./reducers";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const reducerConfig = {
  key: "root",
  whitelist: [],
  blacklist: [],
  storage: storage,
};

const persist = persistReducer(reducerConfig, reducers);
export const store = configureStore({
  middleware: () => new Tuple(thunk, logger),
  reducer: persist,
});

export const persistor = persistStore(store)
