import styled from 'styled-components';

export const UserName = styled.p`
  color: #ffffff;
  font-size: 25px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  padding: 5px 15px;
  color: #ffffff;
  font-size: 25px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;
