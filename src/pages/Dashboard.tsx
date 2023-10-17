import { PageContainer } from '@/components/ui/page-container';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default DashboardPage;
