import styled from "styled-components";

export const Style = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  padding: 12px 20px;
  min-width: 320px;

  @media (min-width: $tablet-width) {
    grid-template-columns: min-content 1fr 120px;
  }

  @media (min-width: $desktop-width) {
    grid-template-columns: min-content min-content 1fr min-content;
  }
`;

export const Description = styled.span`

display: none;

@media (min-width: 1440px) {
  display: block;
  font-size: 12px;
  width: 126px;
  margin-right: 20px;
}
`;