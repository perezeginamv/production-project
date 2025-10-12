/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/button-has-type */
import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
