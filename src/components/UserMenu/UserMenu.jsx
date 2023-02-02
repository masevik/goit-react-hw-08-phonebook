import { Box } from 'components/Box';
import { UserName, Button } from './UserMenu.styled';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <UserName>{user}</UserName>
      <Button>LogOut</Button>
    </Box>
  );
};
