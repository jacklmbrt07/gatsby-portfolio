import styled from 'styled-components';
import variables from '../../../data/variables'

export const UnderLink = styled.a`
  cursor: pointer;
  transition: color 300ms ease-in-out;
  font-family: ${variables.fontFamily};
  font-weight: bolder;
  color: #0027ff;
  padding: 0 .5rem;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`