import styled from 'styled-components';

export const Title = styled.h2`
  padding: 15px;
  background-color: #cca8e9;
  border-radius: 10px 10px 0 0;
`

export const Form = styled.form`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #cadefc;
  border-radius: 0 0 10px 10px;
  border: 3px solid #cca8e9;
`

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const LabelTitle = styled.span`
  display: inline-block;
  margin: 5px;
  text-align: start;
  min-width: 80px;
  font-weight: bold;
`

export const Input = styled.input`
  border: 1px solid #cca8e9;
  height: 20px;
  &:hover,
  &:focus {
    outline: 1px solid #cca8e9;
  }
`