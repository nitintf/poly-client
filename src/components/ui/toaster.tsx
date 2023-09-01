import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { XCircle, CheckCircle, Info } from 'lucide-react';

const TOAST_ICONS = {
  success: <CheckCircle />,
  info: <Info />,
  destructive: <XCircle />,
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...properties }) {
        // eslint-disable-next-line security/detect-object-injection
        const icon = TOAST_ICONS[variant!];
        return (
          <Toast key={id} {...properties}>
            {icon && icon}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
