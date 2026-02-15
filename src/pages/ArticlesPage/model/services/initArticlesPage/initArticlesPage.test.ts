// import { ArticleView } from 'entities/Article';
// import { TestAsyncThunk } from 'shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk';
// import { ArticleSortField } from 'entities/Article/model/types/article';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
// import { initArticlesPage } from './initArticlesPage';

// jest.mock('../fetchArticlesList/fetchArticlesList');

// describe('initArticlesPage.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 isLoading: false,
//                 ids: [],
//                 entities: {},
//                 page: 1,
//                 limit: 5,
//                 hasMore: true,
//                 view: ArticleView.SMALL,
//                 _inited: false,
//                 order: 'asc',
//                 search: '',
//                 sort: ArticleSortField.CREATED,
// type: ArticleType.ALL,
//             },
//         });

//         await thunk.callThunk({});

//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toBeCalledWith({ page: 1 });
//     });

//     test('inited - true', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 isLoading: false,
//                 ids: [],
//                 entities: {},
//                 page: 1,
//                 limit: 5,
//                 hasMore: true,
//                 view: ArticleView.SMALL,
//                 _inited: true,
//                 order: 'asc',
//                 search: '',
//                 sort: ArticleSortField.CREATED,
//             },
//         });

//         await thunk.callThunk({});

//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
