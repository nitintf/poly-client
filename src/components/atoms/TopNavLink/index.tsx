import { cn } from '@/lib/utils';

export interface TopNavLinkProperties extends React.LiHTMLAttributes<HTMLLIElement> {}

export const TopNavLink: React.FC<TopNavLinkProperties> = (properties) => {
  const { className } = properties;
  return <li className={cn('cursor-pointer font-medium', className)} {...properties} />;
};

export interface TopNavLinkContainerProperties extends React.AllHTMLAttributes<HTMLUListElement> {}

export const TopNavLinkContainer: React.FC<TopNavLinkContainerProperties> = (properties) => {
  const { className } = properties;
  return (
    <ul className={cn('flex h-full items-center gap-1 mx-2 text-sm', className)} {...properties} />
  );
};
