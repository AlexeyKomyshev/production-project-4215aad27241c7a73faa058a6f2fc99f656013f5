import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string

    // pagination
    limit: number;
    page: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
