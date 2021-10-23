import React from "react";
import Image from "next/dist/client/image";
import { Nav, LeftArrow, Logo, RightArrow } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <LeftArrow>
        <Image src="/arrow-left.svg" width={15} height={24} alt="" />
      </LeftArrow>
      <Logo>
        <Image src="/spacex-logo.svg" width={300} height={36} alt="" />
      </Logo>

      <RightArrow>
        <Image src="/arrow-right.svg" width={15} height={24} alt="" />{" "}
      </RightArrow>
    </Nav>
  );
};

export default Navbar;
