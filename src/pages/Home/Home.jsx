import { Box } from 'components/Box';
import image from 'images/phonebook.png';
import { Title, Image } from './Home.styled';

export const Home = () => {
  return (
    <Box textAlign="center" display="block" marginTop="100px">
      <Title>Your personal Phonebook </Title>
      <Image src={image} alt="phonebook" />
    </Box>
  );
};
