import styled from "styled-components";
import Link from "next/dist/client/link";

export default function Custom404() {
  return (
    <div>
      <StyledErrorPage>404 - Page Not Found</StyledErrorPage>
      <Link href="/">Home</Link>
    </div>
  );
}

const StyledErrorPage = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
