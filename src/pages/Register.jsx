import { Helmet } from 'react-helmet';
import { Box } from 'components/Box';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  return (
    <Box ml="50px" mt="100px" mr="50px" mb="20px">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
};

export default Register;
