import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Error = () => {
  return (
    <Container>
      <header>
        <Errorimg src="assets/error_bender.png"></Errorimg>
        <Title>ERROR</Title>
      </header>
      <Desc>Please try again in a few minutes</Desc>
    </Container>
  );
};

const errorTextChange = keyframes`
 to {
  color:#16a9d7;
 }

 from {
   color: #952323;
 }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  header {
    position: relative;
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 60px;
  animation: ${errorTextChange} 1s infinite;
  animation-direction: alternate;
  margin-bottom: 0;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: #ffad2c;
  padding: 8px 12px;
  border-radius: 15px;
  background: #afc0c9;
`;

const Errorimg = styled.img`
  display: block;
  height: 300px;
  animation-direction: alternate;
  filter: drop-shadow(16px 16px 20px purple) invert(75%);
`;
