import { Style, Description } from "./style"
import Logo from "../logo/logo"
import MainNav from "../nav/nav";
import UserNav from "../user-nav/user-nav";



function Header() {
  return (
    <Style>
      <Logo />
      <Description>Интернет-магазин кофейных напитков</Description>
      <MainNav></MainNav>
      <UserNav></UserNav>
    </Style>
  )
}

export default Header;