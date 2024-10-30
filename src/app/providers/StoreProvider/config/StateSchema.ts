import { CounterSchema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'enteties/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'enteties/Article';
import { ArticleDetailsPageSchema } from 'pages/ArticlesDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { UISchema } from 'features/UI';
import { ArticlePageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UISchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;

    // true - вмонтирован, false - не вмонтирован/демонтирован.
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
