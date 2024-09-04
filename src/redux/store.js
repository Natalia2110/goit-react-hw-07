import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { filtersReduser } from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };
// const filterConfig = {
//   key: "filter",
//   storage,
//   whitelist: ["name"],
// };

export const store = configureStore({
  // reducer: {
  //   contacts: persistReducer(contactsConfig, contactsReduser),
  //   filter: filtersReduser,
  // },
  reducer: {
    contacts: contactsReduser,
    filter: filtersReduser,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
