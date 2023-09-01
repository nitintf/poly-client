import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { PageLoader } from '@/components/atoms/PageLoader';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ThemeProvider defaultTheme="dark">
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
