import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { SortOrder } from '@/shared/types/sort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

export function useArticleFilters() {
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debounceFetchData();
        },
        [debounceFetchData, dispatch],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    return {
        view,
        order,
        sort,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    };
}
