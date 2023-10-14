import { TopNavbar } from '@/components/navbars/TopNavbar';
import { PropsWithChildren } from 'react';

interface Properties extends PropsWithChildren {}

export const MainLayout: React.FC<Properties> = ({ children }) => {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
};
