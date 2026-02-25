import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так в реальных проектах не делать!!!
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
