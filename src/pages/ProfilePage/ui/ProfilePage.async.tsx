import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так в реальных проектах не делать!!!
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
