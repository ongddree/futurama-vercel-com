import styled from "@emotion/styled";

export const Loading = () => {
  return (
    <Container>
      <Loadimg src="assets/loading-1.gif" alt="" />
    </Container>
  );
};

const Loadimg = styled.img`
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Container = styled.div`
  border-radius: 40px;
  &:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(61, 61, 61, 1) 29%,
      rgba(0, 0, 0, 1) 100%
    );
    opacity: 0.7;
  }
`;
