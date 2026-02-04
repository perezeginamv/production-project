import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>
}
export function useInfiniteScroll(
    {
        callback,
        triggerRef,
        wrapperRef,
    }: UseInfiniteScrollOptions,
) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElemet = triggerRef.current;
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerElemet);
        }

        return () => {
            if (observer && triggerElemet) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElemet);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
