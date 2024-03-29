import { Helmet } from 'react-helmet';
import { Box } from 'components/Box';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
  return (
    <Box ml="50px" mt="100px" mr="50px" mb="20px">
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};

export default Login;
