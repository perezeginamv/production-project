import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string
}
const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles_page');

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('ARTICLES PAGE')}
            {t('ARTICLES fff')}
        </div>
    );
};

export default memo(ArticlesPage);
