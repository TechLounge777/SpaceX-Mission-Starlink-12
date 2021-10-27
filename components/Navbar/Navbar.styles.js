import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px #5c5c5d;
  max-width: 1140px;
  margin: auto;
  height: 150px;
  @media (max-width: 375px) {
    margin: 0 20px;
    height: 85px;
  }
`;

export const LeftArrow = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display: flex;
  @media (max-width: 375px) {
    max-width: 164px;
  }
`;

export const RightArrow = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;
