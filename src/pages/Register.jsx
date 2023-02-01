import { Helmet } from 'react-helmet';
import { Box } from 'components/Box';
import { RegisterForm } from 'components/RegisterForm';

export const Register = () => {
  return (
    <Box ml="50px" mt="20px">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
};
