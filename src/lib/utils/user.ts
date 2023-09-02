import { User } from '@/graphql/generated';

export const getUserInitials = (user: User | undefined) => {
  return `${user?.firstName[0]}${user?.lastName[0]}`;
};

export const getUserFullName = (user: User | undefined) => {
  return `${user?.firstName} ${user?.lastName}`;
};
