import { Box } from 'components/Box';
import { Helmet } from 'react-helmet';
import image from 'images/phonebook.png';
import { Title, Image } from './Home.styled';

export const Home = () => {
  return (
    <Box textAlign="center" display="block" marginTop="100px">
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Title>Your personal Phonebook </Title>
      <Image src={image} alt="phonebook" />
    </Box>
  );
};
