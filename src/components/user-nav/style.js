import styled from "styled-components";
import { tabletWidth, desktopWidth } from "../../variables/variables";

export const Nav = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;

  @media (min-width: ${tabletWidth}) {
    margin-left: 20px;
  }
`

export const NavItem = styled.li`
position: relative;
`

export const Img = styled.img`
width:22px;
height:22px;
`

export const Link = styled.a`
display: flex;
  color: black;
`

export const Span = styled.span`
  display: none;

@media (min-width: ${desktopWidth}) {
  display: block;
}
`