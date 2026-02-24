import {
    ArticleDetailsCommentsSchema,
} from './ArticleDetailsCommentsSchema';
import {
    ArticleDetailsRecommdationsSchema,
} from './ArticleDetailsRecommdationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommdationsSchema;
}
