import { Helmet } from 'react-helmet';
import { Box } from 'components/Box';
import { LoginForm } from 'components/LoginForm';

export const Login = () => {
  return (
    <Box ml="50px" mt="20px">
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};
