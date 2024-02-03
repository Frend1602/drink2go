import { LogoStyle } from "./style";
import icon from "../../img/Variant=Icon.svg";
import iconShort from "../../img/Variant=Short.svg";
import iconLong from "../../img/Variant=Long.svg";


function Logo() {
  return (
    <LogoStyle>
      <picture>
        <source media="(min-width: 1440px)" srcset={iconLong} />
        <source media="(min-width: 768px)" srcset={iconShort} />
        <img src={icon} width="36" height="36" alt="Логотип" />
      </picture>
    </LogoStyle>
  )
};

export default Logo;