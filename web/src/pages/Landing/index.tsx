import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg';

import { Container, ContentWrapper, Location, EnterApp } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
