import React from 'react';

import styled from 'styled-components';

function Logo() {
  return (
    <>
      <a
        href="https://www.google.com/search?q=shingeki+no+kyojin&oq=shingeki+no+kyojin&aqs=chrome..69i57j46i433j69i59l3j69i60j69i61j69i60.3080j0j7&sourceid=chrome&ie=UTF-8"
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
