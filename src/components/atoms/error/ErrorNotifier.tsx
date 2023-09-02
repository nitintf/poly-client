import { ToastProperties, useToast } from '@/hooks';
import React from 'react';

interface ErrorProperties {
  children: (function_: (properties: ToastProperties) => void) => void;
}

export const ErrorNotifier: React.FC<ErrorProperties> = ({ children }) => {
  const { toast } = useToast();
  return <>{children((properties) => toast(properties))}</>;
};
