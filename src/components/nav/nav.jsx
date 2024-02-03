import { Style, Nav, NavItem } from "./style";

function MainNav() {
  return (
    <Style>
      <Nav>
        <NavItem>Главная</NavItem>
        <li>
          <NavItem>Каталог</NavItem>
        </li>
        <li>
          <NavItem>Доставка</NavItem>
        </li>
        <li>
          <NavItem>О нас</NavItem>
        </li>
      </Nav>
    </Style>
  );
}

export default MainNav;
