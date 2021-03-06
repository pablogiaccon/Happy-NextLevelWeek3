import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const Content = styled.div`
  width: 70rem;
  margin: 6.4rem auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 2rem;

  overflow: hidden;

  > img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

export const Image = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 1.6rem 4rem 0;

  button {
    border: 0;
    height: 8.8rem;
    background: none;
    border-radius: 2rem;
    overflow: hidden;
    outline: none;

    opacity: 0.6;

    &.active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 8.8rem;
      object-fit: cover;
    }
  }
`;

export const OrphanageDetails = styled.div`
  padding: 8rem;

  h1 {
    color: #4d6f80;
    font-size: 5.4rem;
    line-height: 5.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 2.8rem;
    color: #5c8599;
    margin-top: 2.4rem;
  }

  .map-container {
    margin-top: 6.4rem;
    background: #e6f7fb;
    border: 1px solid #b3dae2;
    border-radius: 2rem;

    footer {
      padding: 2rem 0;
      text-align: center;

      a {
        line-height: 2.4rem;
        color: #0089a5;
      }
    }

    .leaflet-container {
      border-bottom: 1px solid #dde3f0;
      border-radius: 20px;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #d3e2e6;
    margin: 6.4rem 0;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: #4d6f80;
  }
`;

export const OpenDetails = styled.div`
  margin-top: 2.4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  div {
    padding: 3.2rem 2.4rem;
    border-radius: 2rem;
    line-height: 2.8rem;

    svg {
      display: block;
      margin-bottom: 2rem;
    }

    &.hour {
      background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
      border: 1px solid #b3dae2;
      color: #5c8599;
    }

    &.open-on-weekends {
      background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
      border: 1px solid #a1e9c5;
      color: #37c77f;
    }
  }
`;

export const ContactButton = styled.button`
  margin-top: 6.4rem;

  width: 100%;
  height: 6.4rem;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 2rem;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    background: #36cf82;
  }
`;
