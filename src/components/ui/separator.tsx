import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...properties }, reference) => (
  <SeparatorPrimitive.Root
    ref={reference}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className,
    )}
    {...properties}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
