import { useEffect } from 'react';

export default function useEvent(
  event: keyof DocumentEventMap,
  handler: any,
  passive = false,
): void {
  useEffect(() => {
    document.addEventListener(event, handler, passive);
    return function cleanup() {
      document.removeEventListener(event, handler);
    };
  });
}
