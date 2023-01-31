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
  color: #efb343;
  font-size: 25px;
  background: transparent;
  border: 1px solid #efb343;
  border-radius: 5px;

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`;
