import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@/assets/svgs/logo.svg';
import { cn } from '@/lib/utils/cn';

type Properties = {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
  showText?: boolean;
};

export const PolyLogo = ({
  logoClassName,
  showText = true,
  textClassName,
  className,
}: Properties) => {
  return (
    <Link
      to="/"
      className={cn(
        'flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white w-min',
        className,
      )}
    >
      <Logo className={cn('mr-2', logoClassName)} />
      {showText && <p className={cn(textClassName)}>Poly</p>}
    </Link>
  );
};
