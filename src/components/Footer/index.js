import React from 'react';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper>
      <a href="https://www.github.com/Rodrigo001-de">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHNbXe8srzXoQ/profile-displayphoto-shrink_200_200/0/1592671000196?e=1620864000&v=beta&t=lGGti75wrdubV9E246sj1tzWzKNgi3P53vzAVxada8U"
          alt="Repositories"
        />
      </a>
      <p>
        Orgulhosamente criado por{' '}
        <a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/">
          <span>Rodrigo Rael</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
