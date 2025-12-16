import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './[FTName].module.scss'
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface [FTName]Props{
    className ?: string
}
export const [FTName] = memo((props: [FTName]Props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.[FTName], {}, [className])}>

        </div>
    );
})