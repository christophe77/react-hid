import { useEffect } from 'react';
export default function useEvent(event, handler, passive) {
    if (passive === void 0) { passive = false; }
    useEffect(function () {
        document.addEventListener(event, handler, passive);
        return function cleanup() {
            document.removeEventListener(event, handler);
        };
    });
}
