import { useRef } from 'react';

const useScrollObserver = (callback: () => void) => {
    const observer = useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        }),
    );

    const observe = (el: HTMLElement) => {
        observer.current.observe(el);
    };

    const unobserve = (el: HTMLElement) => {
        observer.current.unobserve(el);
    };

    return { observe, unobserve };
};

export default useScrollObserver;
