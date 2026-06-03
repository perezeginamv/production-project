import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, HTMLAttributeAnchorTarget, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX, ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    onLoadNextPart?: () => void
}

const Header = memo(() => <ArticlesPageFilters />)

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton
            className={cls.card}
            key={index}
            view={ArticleView.BIG}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart,
    } = props;


    const { t } = useTranslation();

    const [selectedArticleId, setSelectedArticleId] = useState(1)
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null)

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1
        setSelectedArticleId(+paged)
    }, [])

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        if (view === ArticleView.SMALL) {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId)
                }
            }, 100)
        }

        return () => clearTimeout(timeoutId)
    }, [view, selectedArticleId])

    const renderArticle = useCallback((index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    ), [view, target]);

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            )
        }
        return null;
    })

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    const ItemContainerComp: FC<{ index: number }> = ({
        index
    }) => (
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton className={cls.card} view={ArticleView.SMALL} key={index} />
        </div>
    )

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {view === ArticleView.BIG ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header,
                        Footer
                    }}
                />
            ) : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header,
                        ScrollSeekPlaceholder: ItemContainerComp,
                    }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.itemsWrapper}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                    }}
                />
            )}
        </div >
    );
});
