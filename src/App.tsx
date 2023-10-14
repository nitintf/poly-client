import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { PageLoader } from '@/components/atoms/PageLoader';
import { TooltipProvider } from '@/components/ui/Tooltip/tooltip';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Outlet />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
