import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: #ffffff;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  width: 460px;
  height: 35px;
`;

export const Button = styled.button`
  width: 120px;
  height: 35px;
  margin-right: 20px;
  padding: 3px 15px;
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
