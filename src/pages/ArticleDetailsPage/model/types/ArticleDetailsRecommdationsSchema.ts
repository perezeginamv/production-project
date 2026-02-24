import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticleDetailsRecommdationsSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
