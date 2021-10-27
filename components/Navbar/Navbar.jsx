import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Nav, LeftArrow, Logo, RightArrow } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <Link href="/starlink11" passHref>
        <LeftArrow>
          <Image src="/arrow-left.svg" width={15} height={24} alt="" />
        </LeftArrow>
      </Link>
      <Logo>
        <Image src="/spacex-logo.svg" width={300} height={36} alt="" />
      </Logo>
      <Link href="/starlink13" passHref>
        <RightArrow>
          <Image src="/arrow-right.svg" width={15} height={24} alt="" />{" "}
        </RightArrow>
      </Link>
    </Nav>
  );
};

export default Navbar;
