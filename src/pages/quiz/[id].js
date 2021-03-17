/* eslint-disable react/prop-types */
import React from 'react';

import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../screens/Quiz';

export default function GuysQuiz({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen
        externalQuestions={externalDb.questions}
        externalBg={externalDb.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDb = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`,
    )
      .then(response => {
        // ok => https status 200
        if (response.ok) {
          return response.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then(jsonResponse => jsonResponse);

    return {
      props: {
        externalDb,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
