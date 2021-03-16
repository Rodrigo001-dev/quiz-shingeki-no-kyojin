/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import db from '../../db.json';

import { Widget } from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Button from '../components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

// eslint-disable-next-line object-curly-newline
function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative === question.answer;

  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);

  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        src={question.image}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        alt="Descrição"
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={event => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  type="radio"
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  id={alternativeId}
                  style={{ display: 'none' }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>

          <p>{`${selectedAlternative}`}</p>
          {isCorrect && <p>Você acertou!!</p>}
          {!isCorrect && <p>Você errou!!</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;

  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões</div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
