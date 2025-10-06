/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDAR} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
