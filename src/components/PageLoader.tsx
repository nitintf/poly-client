import { Loader2 } from 'lucide-react';
import { Flex } from './ui/flex';

export const PageLoader = () => {
  return (
    <Flex align="center" justify="center" className="!bg-background w-screen h-screen">
      <Loader2 className="mr-2 h-12 w-12 animate-spin" />
    </Flex>
  );
};
