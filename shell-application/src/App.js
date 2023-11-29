
import React, { lazy, Suspense } from 'react';

const MicroFrontendClickMe = lazy(() => import('MicroFrontend/ClickMe'));

export default function App() {
  return (
    <div>
      Shell Application
      <Suspense fallback={<div>Loading...</div>}>
        <MicroFrontendClickMe clickMe={"clickMe"}/>
      </Suspense>
    </div>
  );
}
