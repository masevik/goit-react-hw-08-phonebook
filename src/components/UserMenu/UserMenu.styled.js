import styled from 'styled-components';

export const UserName = styled.p`
  color: #ffffff;
  font-size: 24px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  padding: 5px 15px;
  color: #efb343;
  font-size: 24px;
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
