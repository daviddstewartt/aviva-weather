import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

// Reducers (if there were more i would combine reducers and import them here)
import locationReducer from './features/location';
import layoutReducer from './features/layout';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    location: locationReducer,
    layout: layoutReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export {store};
