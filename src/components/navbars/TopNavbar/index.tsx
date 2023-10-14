import { Bell, HelpCircle, Settings } from 'lucide-react';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { User, useMeQuery } from '@/graphql/generated';
import { cn, getUserFullName, getUserInitials } from '@/lib/utils';
import { SelectOrg } from '@/components/comboboxs';
import { AccountDropdown } from '@/components/dropdowns';
import { Tooltip } from '@/components/ui/Tooltip';
import { Flex } from '../../ui/flex';
import { Separator } from '../../ui/separator';
import { PolyLogo } from '../../atoms/PolyLogo';
import { Avatar, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { NavLink, NavLinkContainer } from '../NavLink';

const LINK_CLASS = 'px-2';
const RIGHT_ICONS_CLASS = 'w-[18px] cursor-pointer';

export const TopNavbar = () => {
  const { data } = useMeQuery();

  return (
    <>
      <Flex as="header" className="h-navbar px-3 relative">
        <Flex as="nav" justify="start" className="min-w-0 grow gap-1">
          <PolyLogo className="mb-0 mr-0" showText={false} logoClassName="w-6" />
          <SelectOrg />
          <NavLinkContainer>
            <NavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Your Work
              </Button>
            </NavLink>
            <NavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Projects
              </Button>
            </NavLink>
            <NavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Dashboards
              </Button>
            </NavLink>
            <NavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Filters
              </Button>
            </NavLink>
            <NavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Teams
              </Button>
            </NavLink>
            <Button size="sm">Create</Button>
          </NavLinkContainer>
        </Flex>
        <Flex className="gap-2 shrink-0">
          <Tooltip label="Notifications">
            <Button variant="ghost" size="icon">
              <Bell className={cn(RIGHT_ICONS_CLASS)} />
            </Button>
          </Tooltip>
          <Tooltip label="Help">
            <Button variant="ghost" size="icon">
              <HelpCircle className={cn(RIGHT_ICONS_CLASS)} />
            </Button>
          </Tooltip>
          <Tooltip label="Settings">
            <Button variant="ghost" size="icon">
              <Settings className={cn(RIGHT_ICONS_CLASS)} />
            </Button>
          </Tooltip>
          <AccountDropdown>
            <Button variant="ghost" size="icon">
              <Avatar className="w-[22px] h-[22px] cursor-pointer">
                <AvatarImage src={data?.me?.avatar} alt={getUserFullName(data?.me as User)} />
                <AvatarFallback>{getUserInitials(data?.me as User)}</AvatarFallback>
              </Avatar>
            </Button>
          </AccountDropdown>
        </Flex>
      </Flex>
      <Separator />
    </>
  );
};
