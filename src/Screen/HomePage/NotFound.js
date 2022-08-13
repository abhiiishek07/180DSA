import React from "react";
import styled from "styled-components";

function NotFound() {
  return (
    <Wrapper>
      <Title>
        <h1>Error 404! page not found</h1>
      </Title>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Title = styled.div`
  margin-bottom: 8rem;
  color: white;
`;
export default NotFound;
