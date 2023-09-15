import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { config } from '@/config';
import { ROUTES } from '@/constants/routes';
import { useUser } from '@/store';
import { useLocation, useNavigate } from 'react-router-dom';

export function SessionExpiredDialog() {
  const { setToken } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const redirectRoute = `${ROUTES.LOGIN}/${
    pathname === '/' ? '' : `?continue=${config.app.url}${pathname}`
  }`;

  const handleOnClick = () => {
    setToken(null);
    navigate(redirectRoute);
  };

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Whoops! Your Session Expired 🕒</AlertDialogTitle>
          <AlertDialogDescription>
            No worries - just hit &apos;Login&apos; to pick up where you left off with Poly. Your
            projects and tasks are waiting for you!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleOnClick}>Login</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
