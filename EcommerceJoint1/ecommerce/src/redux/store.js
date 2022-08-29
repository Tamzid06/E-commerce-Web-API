import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import removeUserReducer from "./removing";
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';



import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const appReducer = combineReducers({ user: userReducer, cart: cartReducer , remv:removeUserReducer});

const rootReducer = (state, action) => {
  if (action.type === '/logout') {
    // for all keys defined in your persistConfig(s)
    storage.removeItem('persist:root');
    state = undefined;
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^$$$$$$$$$$$$$$$")
    persistStore(store).purge();
    // storage.removeItem('persist:otherKey')

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor1 = persistStore(store);
export default store;

// 333333333333333333333333333333333

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "./cartRedux";
// import userReducer from "./userRedux";
// import removeUserReducer from "./removing";
// import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';



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


// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };


// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: userReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const cartpersist = configureStore({
//   reducer: cartReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });


// export let persistor1 = persistStore(store);
// export let persistor2 = persistStore(cartpersist);

// export default store;