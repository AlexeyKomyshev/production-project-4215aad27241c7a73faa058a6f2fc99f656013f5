import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}
