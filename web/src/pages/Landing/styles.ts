import styled from 'styled-components';
import { Link } from 'react-router-dom';

import landingImg from '../../images/landing.svg';

export const Container = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  width: 100vw;
  height: 100vh;
  padding: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  background: url(${landingImg}) 80% center no-repeat;
  width: 100%;
  max-width: 110rem;
  height: 100%;
  max-height: 68rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  main {
    max-width: 35rem;
    h1 {
      font-size: 7.6rem;
      font-weight: 900;
      line-height: 7rem;
    }

    p {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3.4rem;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 8rem;
  height: 8rem;
  border-radius: 3rem;
  background: #ffd666;
  color: #8d734b;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  &:hover {
    background: #96feff;
    color: #15c3d6;
  }
`;
