import { Box } from 'components/Box';
import { UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Box display="flex" alignItems="center">
      <UserName>mango@mail.com</UserName>
      <Button>LogOut</Button>
    </Box>
  );
};
