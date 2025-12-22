import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string
}
export const CommentList = memo((props: CommentListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            CommentList
        </div>
    );
});
