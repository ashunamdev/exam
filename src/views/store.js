import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import taskReducer from './redux/taskSlice'
// import toasterReducer from './redux/toasterSlice'
// import globalSlice from './redux/globalSlice';
// import loginReducer from './redux/loginSlice'
// import dashboardSlice from './redux/dashboardSlice';

const middlewarethunk = [thunk];
const combinedReducer = combineReducers({
  // tasks: taskReducer,
  // alert: toasterReducer,
  // toaster: toasterReducer,
  // global: globalSlice,
  // dashboard: dashboardSlice,
  // user_loggedin: loginReducer
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: [...middlewarethunk]
});
export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
