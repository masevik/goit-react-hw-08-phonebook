import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid black;
  color: #ffffff;
  background: #3f51b5;
  border-radius: 5px;
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

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Input = styled(Field)`
  margin-bottom: 10px;
  width: 100%;
  height: 35px;
`;

export const Error = styled(ErrorMessage)`
  margin-bottom: 10px;
  color: red;
`;
