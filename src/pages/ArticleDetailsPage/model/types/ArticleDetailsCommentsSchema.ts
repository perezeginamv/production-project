import { EntityState } from '@reduxjs/toolkit';
import { CommentUser } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentUser> {
    isLoading?: boolean;
    error?: string;
}
