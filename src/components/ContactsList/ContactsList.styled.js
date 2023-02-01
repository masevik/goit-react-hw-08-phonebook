import styled from 'styled-components';
import { RiUser3Line, RiPhoneLine } from 'react-icons/ri';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  color: #ffffff;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  span {
    width: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const UserIcon = styled(RiUser3Line)`
  margin-right: 10px;
`;

export const PhoneIcon = styled(RiPhoneLine)`
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  color: #efb343;
  font-size: 14px;
  background: transparent;
  border: 1px solid #efb343;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }

  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
`;
