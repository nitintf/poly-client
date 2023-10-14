import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

interface Properties extends PropsWithChildren {
  className?: string;
}

export const PageContainer: React.FC<Properties> = ({ className, ...properties }) => {
  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)} {...properties} />
  );
};
