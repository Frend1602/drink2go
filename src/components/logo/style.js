import styled from "styled-components";

export const LogoStyle = styled.a`
  width: 36px;
  height: 36px;
  margin-right: 88px;

  @media (min-width: $tablet-width) {
    width: 82px;
    height: 36px;
  }

  @media (min-width: $desktop-width) {
    width: 170px;
    height: 36px;
    margin-right: 28px;
  }
`;

