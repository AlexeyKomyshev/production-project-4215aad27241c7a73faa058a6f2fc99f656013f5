import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducres?:ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducres,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
