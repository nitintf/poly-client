import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ROUTES } from '@/constants/routes';
import { useUser } from '@/store';
import { useNavigate } from 'react-router-dom';

export function SessionExpiredDialog() {
  const { setToken } = useUser();
  const navigate = useNavigate();

  const handleOnClick = () => {
    setToken(null);
    navigate(ROUTES.LOGIN);
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
