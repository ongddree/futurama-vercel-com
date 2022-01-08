import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Error } from '../components/Error';
import { keyframes } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>FuTuRaMaSiTe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Mainimg src="assets/error_bender.png"></Mainimg>
        <Title>Hello Human</Title>
      </Main>
    </Container>
  );
};

const Container = styled.section``;

const Main = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

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
  45% { filter: hue-rotate(140deg); }
  60% { filter: hue-rotate(120deg); }
  75% { filter: hue-rotate(280deg); }
  90% { filter: hue-rotate(50deg); } 
  100% { filter: hue-rotate(150deg); }
`;

const Title = styled.h3`
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
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

const Mainimg = styled.img`
  display: block;
  height: 330px;
  filter: grayscale(100%);
  animation: ${colorChange} 3s infinite;
  animation-direction: alternate;
`;

export default Home;
