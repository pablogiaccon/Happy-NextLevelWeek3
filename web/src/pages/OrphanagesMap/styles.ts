import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const SideBar = styled.aside`
  width: 44rem;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 6.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 4.2rem;
  }

  p {
    line-height: 2.8rem;
    margin-top: 2.4rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    strong {
      font-weight: 800;
    }
  }
`;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 4rem;
  bottom: 4rem;
  z-index: 10;

  width: 6.4rem;
  height: 6.4rem;
  background: #15c3d6;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: #fff;
  }

  &:hover {
    background: #17d6eb;
  }
`;
