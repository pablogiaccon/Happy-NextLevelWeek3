import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }
`;

export const Form = styled.form`
  width: 70rem;
  margin: 6.4rem auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 2rem;

  padding: 6.4rem 8rem;

  overflow: hidden;

  fieldset {
    border: 0;

    & + fieldset {
      margin-top: 8rem;
    }

    legend {
      width: 100%;

      font-size: 3.2rem;
      line-height: 3.4rem;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 4rem;
      padding-bottom: 2.4rem;
    }
  }
`;

export const InputBlock = styled.div`
  & + div {
    margin-top: 2.4rem;
  }

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: #8fa7b3;
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 2rem;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  textarea {
    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
    padding: 1.6rem;
    line-height: 2.8rem;
  }

  .new-image {
    width: 100%;
    height: 6.4rem;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 2rem;
    cursor: pointer;
  }

  .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      height: 6.4rem;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      color: #5c8599;
      cursor: pointer;

      &.active {
        background: #edfff6;
        border: 1px solid #a1e9c5;
        color: #37c77f;
      }

      &:first-child {
        border-radius: 2rem 0 0 2rem;
      }

      &:last-child {
        border-radius: 0 2rem 2rem 0;
        border-left: 0;
      }
    }
  }

  button.confirm-button {
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
  }
`;
