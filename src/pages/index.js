import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import db from '../../db.json';

import QuizLogo from '../components/QuizLogo';
import { Widget } from '../components/Widget';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>

          <Widget.Content>
            <p>lorem inpu</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>loren inpisoe</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Rodrigo001-de" />
    </QuizBackground>
  );
}
