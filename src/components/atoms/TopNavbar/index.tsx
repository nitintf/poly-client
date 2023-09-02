import { Bell, HelpCircle, Settings, ChevronDown } from 'lucide-react';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { User, useMeQuery } from '@/graphql/generated';
import { cn, getUserFullName, getUserInitials } from '@/lib/utils';
import { SelectOrg } from '@/components/comboboxs';
import { AccountDropdown } from '@/components/dropdowns';
import { Tooltip } from '@/components/ui/Tooltip';
import { Flex } from '../../ui/flex';
import { Separator } from '../../ui/separator';
import { PolyLogo } from '../PolyLogo';
import { Avatar, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { TopNavLink, TopNavLinkContainer } from '../TopNavLink';

const LINK_CLASS = 'px-2';
const ICON_CLASS = 'w-3 h-3 ml-1 mt-1 text-slate-500 stroke-[4px]';
const RIGHT_ICONS_CLASS = 'w-[18px] cursor-pointer';

export const TopNavbar = () => {
  const { data } = useMeQuery();

  return (
    <>
      <Flex as="header" className="h-navbar px-3 relative">
        <Flex as="nav" justify="start" className="min-w-0 grow gap-1">
          <PolyLogo className="mb-0 mr-0" showText={false} logoClassName="w-6" />
          <SelectOrg />
          <TopNavLinkContainer>
            <TopNavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Your Work
                <ChevronDown className={cn(ICON_CLASS)} />
              </Button>
            </TopNavLink>
            <TopNavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Projects
                <ChevronDown className={cn(ICON_CLASS)} />
              </Button>
            </TopNavLink>
            <TopNavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Dashboards
                <ChevronDown className={cn(ICON_CLASS)} />
              </Button>
            </TopNavLink>
            <TopNavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Filters
                <ChevronDown className={cn(ICON_CLASS)} />
              </Button>
            </TopNavLink>
            <TopNavLink>
              <Button size="sm" variant="ghost" className={cn(LINK_CLASS)}>
                Teams
                <ChevronDown className={cn(ICON_CLASS)} />
              </Button>
            </TopNavLink>
          </TopNavLinkContainer>
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
