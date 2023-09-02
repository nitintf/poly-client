import React from 'react';
import { Tooltip as TooltipContainer, TooltipContent, TooltipTrigger } from './tooltip';

interface TooltipProperties extends React.PropsWithChildren {
  label: string;
}

export const Tooltip: React.FC<TooltipProperties> = ({ children, label }) => {
  return (
    <TooltipContainer>
      <TooltipTrigger asChild>
        <span>{children}</span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </TooltipContainer>
  );
};
