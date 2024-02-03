import { Nav, Img, NavItem, Link, Span } from "./style";
import user from "../../img/user.svg";
import union from "../../img/Union.svg";

function UserNav() {
  return (
    <Nav>
      <NavItem>
        <Link href="">
          <Img src={user}></Img>
          <Span>Войти</Span>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="">
          <Img src={union}></Img>
          <Span>Корзина</Span>
        </Link>
      </NavItem>
    </Nav>
  );
}

export default UserNav;
