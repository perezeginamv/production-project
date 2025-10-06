import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
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
