import image from 'images/phonebook.png';
import { Title, Image } from './WelcomeTitle.styled';

export const WelcomeTitle = () => {
  return (
    <>
      <Title>Your personal Phonebook </Title>
      <Image src={image} alt="phonebook" />
    </>
  );
};
