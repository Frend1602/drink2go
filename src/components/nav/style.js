import styled from "styled-components";
import { mobileWidth, desktopWidth, tabletWidth } from "../../variables/variables";

export const Style = styled.nav`
grid-column: 1 / -1;
  grid-row: 2/3;
  order: -1;
  margin: 0;

  @media (min-width: ${tabletWidth}) {
    display: block;
    grid-column: 2 / 3;
    grid-row: 1/2;
  }

  @media (min-width: ${desktopWidth}) {
    grid-column: 3 / 4;
  }
`

export const Nav = styled.ul`
padding: 0;
list-style: none;

@media (min-width: ${tabletWidth}) {
  display: flex;
  justify-content: space-between;
}
`

export const NavItem = styled.a`

display: block;
  min-height: 47px;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: $base-black;

  @media (min-width: ${tabletWidth}) {
    padding-top: 16px;
  }

:active {
  background-color: #7859CF;
}

:hover {
  color: #7859CF;
}
`