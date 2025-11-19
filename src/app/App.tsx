import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        userActions.initAuthData();
    }, [dispatch]);

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
