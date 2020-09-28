import styled from "styled-components"
import variables from "../../../data/variables"

export const FooterStyle = styled.footer`
  padding-top: 1rem;
  padding-bottom: 8rem;
  z-index: 0;
  position: relative;
  text-align: left;
  @media (min-width: ${variables.breakpointPhone}) {
    background: linear-gradient(to top, #efe9e9, transparent 50%);
  }
  @media (max-width: ${variables.breakpointPhone}) {
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
  }
  .quote {
    font-size: 1.5rem;
    font-family: ${variables.fontFamily};
    font-weight: bold;
    line-height: 1.2;
    color: ${variables.primary};
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 2rem;
    }
  }
`

export const SubRight = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-family: ${variables.fontFamily};
  font-weight: bold;
`
export const CopyRight = styled.p`
  font-size: 11px;
  line-height: 1.8;
  letter-spacing: 1px;
  text-transform: capitalize;
`
export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`
