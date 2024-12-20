import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FilterContainer } from '../FilterContainer/FilterContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    content={
                        <Page
                            data-testid="ArticlesPage"
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticleInfiniteList className={cls.list} />
                            <ArticlePageGreeting />
                        </Page>
                    }
                    right={<FilterContainer />}
                />
            }
            off={
                <Page
                    data-testid="ArticlesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ArticlesPage, {}, [className])}
                >
                    <ArticlePageFilter />
                    <ArticleInfiniteList className={cls.list} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
