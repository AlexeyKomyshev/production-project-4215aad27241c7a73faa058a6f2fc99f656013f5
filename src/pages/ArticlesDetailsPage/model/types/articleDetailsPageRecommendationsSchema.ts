import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';

export interface ArticleDetailsPageRecommendationsSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
