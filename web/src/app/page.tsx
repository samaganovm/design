import { Suspense } from 'react';
import { Demo } from './demo';

// motion's AnimatePresence calls Math.random() while rendering, which cacheComponents rejects outside Suspense.
export default function Home() {
  return (
    <Suspense>
      <Demo />
    </Suspense>
  );
}
