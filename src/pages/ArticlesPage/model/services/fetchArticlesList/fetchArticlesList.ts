import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'enteties/Article';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articlePage/fetchArticlesList',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
