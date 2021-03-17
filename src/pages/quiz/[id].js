/* eslint-disable react/prop-types */
import React from 'react';

import QuizScreen from '../../screens/Quiz';

export default function GuysQuiz({ externalDb }) {
  return (
    <QuizScreen
      externalQuestions={externalDb.questions}
      externalBg={externalDb.bg}
    />
  );
}

export async function getServerSideProps(context) {
  const externalDb = await fetch('')
    .then(response => {
      // ok => https status 200
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then(jsonResponse => jsonResponse)
    .catch(error => {
      console.log(error);
    });

  return {
    props: {
      externalDb,
    },
  };
}
