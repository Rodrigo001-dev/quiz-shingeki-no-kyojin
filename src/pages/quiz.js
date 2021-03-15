import React from 'react';

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

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta 1 de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>

          <img
            src="https://placehold.it/400x400"
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            alt="Descrição"
          />

          <Widget.Content>
            <h2>Titulo</h2>
            <p>Descrição</p>

            <Button>Confirmar</Button>
          </Widget.Content>
        </Widget>

        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
