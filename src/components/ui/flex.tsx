import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/cn';

const flexVariants = cva('flex gap-5', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      rowReverse: 'flex-row-reverse',
      columnReverse: 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      noWrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
    },
    content: {
      start: 'content-start',
      center: 'content-center',
      end: 'content-end',
      between: 'content-between',
      around: 'content-around',
      stretch: 'content-stretch',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    wrap: 'noWrap',
    content: 'start',
  },
});

export interface FlexProperties extends VariantProps<typeof flexVariants> {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Flex: React.FC<FlexProperties> = ({ className, children, as, ...variants }) => {
  const Tag = as ?? 'div';
  return <Tag className={cn(flexVariants(variants), className)}>{children}</Tag>;
};

export { Flex, flexVariants };
