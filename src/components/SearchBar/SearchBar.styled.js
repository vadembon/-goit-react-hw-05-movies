import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border: 1px solid;
  border-radius: 6px;
  overflow: hidden;
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 10px;
  background-color: #ddd;
  color: #222;
  border: none;
  /* border-radius: 6px 0 0 6px; */
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 10px 5px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
