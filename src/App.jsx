import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Dynamically import each page component using React.lazy
const Home = React.lazy(() => import('./Home'));
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));
const Page3 = React.lazy(() => import('./Page3'));
const Page4 = React.lazy(() => import('./Page4'));
const Page5 = React.lazy(() => import('./Page5'));
const Page6 = React.lazy(() => import('./Page6'));
const Page7 = React.lazy(() => import('./Page7'));
const Page8 = React.lazy(() => import('./Page8'));
const Final = React.lazy(() => import('./Final'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Fallback content while the components are loading */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Suspense>
  );
}

export default App;