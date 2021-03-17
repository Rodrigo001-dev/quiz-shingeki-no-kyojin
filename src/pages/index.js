import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

import db from '../../db.json';

import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import { Widget } from '../components/Widget';
import Link from '../components/Link';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import Input from '../components/Input';
import Button from '../components/Button';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            // show é o modo que ele vai aparecer
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          // initial é a posição inicial do componente e como a opacidade está
          // saindo de 0 para 1 eu quero que a posição inicial dele seja hidden
          // onde a opacidade é 0
          initial="hidden"
          // eu estuo animando o componente para a posição chamada show que eu
          // passei
          animate="show"
        >
          <Widget.Header>
            <h1>Shingeki no Kyojin</h1>
          </Widget.Header>

          <Widget.Content>
            <form
              onSubmit={event => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                type="text"
                name="nome do usuário"
                placeholder="Digite seu nome"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <ul>
              {db.external.map(externalLink => {
                const [projectName, githubUser] = externalLink
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={externalLink}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer
          as={motion.footer}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Rodrigo001-de" />
    </QuizBackground>
  );
}
