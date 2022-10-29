import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const rootReducer = combineReducers({
    app: persistedReducer
})


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})


export const persistor = persistStore(store);


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;