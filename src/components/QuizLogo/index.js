import React from 'react';

import styled from 'styled-components';

function Logo() {
  return (
    <>
      <a
        href="https://www.google.com/search?sxsrf=ALeKk01NgFp6IqMs650A6bH1dySDC6t6Mg%3A1615777451952&ei=q85OYIHZOY7W5OUPnLGuwAM&q=the+legend+of+zelda&oq=the+legend+of+zelda&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAguEEMyBwguELEDEEMyBAguEEMyBAguEEMyBAguEEMyBAguEEMyBAguEEMyBwguELEDEEMyBAguEEM6CggAELADEEMQiwM6DQguELADEMgDEEMQiwM6BwguECcQkwI6BAguECc6CAguELEDEIMBOgQIABBDOgIIADoFCC4QsQM6CgguEOoCECcQkwI6BwguEOoCECc6BwgjEOoCECc6CQgjEOoCECcQE0oFCDgSATFQqL4BWLGVAmCllwJoAnACeACAAdEBiAGKCpIBBTAuOS4xmAEAoAEBqgEHZ3dzLXdperABCsgBDrgBAsABAQ&sclient=gws-wiz&ved=0ahUKEwjB2ryIqLHvAhUOK7kGHZyYCzgQ4dUDCA0&uact=5"
        target="_blank"
        rel="noreferrer"
      >
        <img src="Attack_on_Titan_logo.png" alt="Logo Attack on Titan" />
      </a>
    </>
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  margin-top: -32px;
  display: block;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
