import styled from "styled-components";

export const RegisterPage = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #ffb5d6;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 30px;
  border-radius: 4px;
  width: 540px;
  text-align: center;

  h1 {
    font-size: 25px;
    color: #bf1953;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`

export const FormRegister = styled.form`
  margin-top: 40px;

  button {
    width: 90%;
    padding: 10px 10px;
    border: none;
    border-radius: 4px;
    background-color: #bf1953;
    color: white;
    font-size: 18px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgba(191, 25, 83, 0.8);
    }
  }
`

export const InputGroup = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  text-align: left;
  margin-bottom: 30px;

  label {
    position: absolute;
    top: 11px;
    left: 15px;
  }

  input {
    border: none;
    border-radius: 20px;
    padding: 10px 15px 10px 50px;
    width: 100%;
    font-size: 18px;

    &:focus {
      outline: none;
    }
  }
`