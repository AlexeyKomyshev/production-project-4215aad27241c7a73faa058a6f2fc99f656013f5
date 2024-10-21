import { Comment } from 'enteties/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
