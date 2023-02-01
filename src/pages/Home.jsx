import { Helmet } from 'react-helmet';
import { Box } from 'components/Box';
import { WelcomeTitle } from 'components/WelcomeTitle';

export const Home = () => {
  return (
    <Box textAlign="center" display="block" marginTop="100px">
      <Helmet>
        <title>Welcome page</title>
      </Helmet>
      <WelcomeTitle />
    </Box>
  );
};
