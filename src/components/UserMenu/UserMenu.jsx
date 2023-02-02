import { Box } from 'components/Box';
import { UserName, Button } from './UserMenu.styled';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const HandleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box display="flex" alignItems="center">
      <UserName>Welcome, {user.name}</UserName>
      <Button onClick={HandleLogOut}>LogOut</Button>
    </Box>
  );
};
