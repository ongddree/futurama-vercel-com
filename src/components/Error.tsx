import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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

const textChange = keyframes`
0% { color: #ff2a2a; }
15% { color: #ff7a2a; }
30% { color: #ffc52a; }
45% { color: #43ff2a; }
60% { color: #2a89ff; }
75% { color: #202082; }
90% { color: #6b2aff; } 
100% { color: #e82aff; }`;

const colorChange = keyframes`
  0% { filter: hue-rotate(30deg); }
  15% { filter: hue-rotate(190deg); }
  30% { filter: hue-rotate(90deg);}
  45% {filter: hue-rotate(140deg); }
  60% {filter: hue-rotate(120deg); }
  75% { filter: hue-rotate(280deg); }
  90% { filter: hue-rotate(50deg); } 
  100% {filter: hue-rotate(150deg); }
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
  animation: ${textChange} 3s infinite;
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
`;

const Errorimg = styled.img`
  display: block;
  height: 300px;
  animation: ${colorChange} 3s infinite;
  animation-direction: alternate;
`;
