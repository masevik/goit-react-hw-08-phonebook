import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 25px;

  &.active,
  :hover {
    color: #efb343;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
