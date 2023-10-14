import { cn } from '@/lib/utils';

export interface NavLinkProperties extends React.LiHTMLAttributes<HTMLLIElement> {}

export const NavLink: React.FC<NavLinkProperties> = (properties) => {
  const { className } = properties;
  return <li className={cn('cursor-pointer font-medium', className)} {...properties} />;
};

export interface NavLinkContainerProperties extends React.AllHTMLAttributes<HTMLUListElement> {}

export const NavLinkContainer: React.FC<NavLinkContainerProperties> = (properties) => {
  const { className } = properties;
  return (
    <ul className={cn('flex h-full items-center gap-1 mx-2 text-sm', className)} {...properties} />
  );
};
